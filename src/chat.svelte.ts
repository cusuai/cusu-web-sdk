import {
	canSend as callCanSend,
	canStartCall as callCanStartCall,
	orbitTone as callOrbitTone,
	callStatusLabel as callStatusLabelOf
} from './call-status';
import type { CusuConfig } from './config';
import type { ConversationSummary } from './history';
import {
	lastMessagePreview,
	loadCurrentId,
	loadHistory,
	persistCurrentId,
	persistHistory,
	upsertHistory
} from './history';
import type { ThreadAttachment, WidgetMessage } from './messages';
import {
	isVisibleWidgetRole,
	keepAttachmentPreviews,
	mergeAgentAttachments,
	previewUrlsByAttachment,
	threadToMessages
} from './messages';
import * as m from './paraglide/messages.js';
import { advancePlaybackHold, playbackOrbitEnergy, smoothPlaybackLevel } from './playback-meter';
import { connectRealtimeCall, type RealtimeActivity, type RealtimeCall } from './realtime-call';
import type { ChatEvent, RatingScale, SupportThread, ThreadMessage, ThreadStatus } from './types';
import { isClosedStatus, isTransferredStatus } from './types';
import {
	chatAttachmentUploadUrl,
	chatAttachmentUrl,
	realtimeSessionUrl,
	toWsUrl,
	transcribeUrl
} from './urls';
import type { TapeState } from './waveform';
import {
	advanceTape,
	createTapeState,
	IDLE_LEVEL,
	NOISE_MIN,
	sampleEnergy,
	WAVEFORM_BARS
} from './waveform';

export type { ConversationSummary } from './history';
export type { WidgetMessage } from './messages';

export type CallState = 'idle' | 'listening' | 'speaking' | 'thinking' | 'playing';

const RECORDING_MIME_TYPES = [
	'audio/webm;codecs=opus',
	'audio/webm',
	'audio/mp4',
	'audio/ogg;codecs=opus'
];

function pickRecorderMime(): string {
	if (typeof MediaRecorder === 'undefined') {
		return '';
	}
	return RECORDING_MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) ?? '';
}

function filenameForMime(mime: string): string {
	if (mime.includes('mp4') || mime.includes('m4a') || mime.includes('aac')) {
		return 'recording.m4a';
	}
	if (mime.includes('ogg')) {
		return 'recording.ogg';
	}
	if (mime.includes('mpeg') || mime.includes('mp3')) {
		return 'recording.mp3';
	}
	return 'recording.webm';
}

function wait(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function audioContextCtor(): typeof AudioContext | undefined {
	if (typeof window === 'undefined') {
		return undefined;
	}
	return (
		window.AudioContext ??
		(window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
	);
}

const MAX_PENDING_ATTACHMENTS = 5;
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
const MAX_PDF_BYTES = 16 * 1024 * 1024;
const IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/gif', 'image/webp']);

export type PendingUpload = {
	localId: string;
	name: string;
	kind: 'image' | 'pdf';
	previewUrl: string | null;
	id: string | null;
	uploading: boolean;
	error: string;
};

function nowIso(): string {
	return new Date().toISOString();
}

export class GroupChat {
	constructor(
		readonly config: CusuConfig,
		readonly visitorId: string
	) {
		this.showLauncher = config.showLauncher !== false;
	}

	open = $state(false);
	showLauncher = $state(true);
	voiceCallEnabled = $state(true);
	dictationEnabled = $state(true);
	voiceRealtimeEnabled = $state(false);
	ratingScale = $state<RatingScale>('stars_5');
	rated = $state(false);
	ratingBusy = $state(false);
	connected = $state(false);
	busy = $state(false);
	transferred = $state(false);
	status = $state<ThreadStatus>('waiting_customer');
	recording = $state(false);
	transcribing = $state(false);
	voiceMode = $state(false);
	callState = $state<CallState>('idle');
	levels = $state.raw<number[]>([]);
	waveTick = $state(0);
	waveShift = $state(0);
	error = $state('');
	draft = $state('');
	pending = $state<PendingUpload[]>([]);
	view = $state<'chat' | 'history'>('history');
	currentId = $state<string | null>(null);
	history = $state<ConversationSummary[]>([]);
	messages = $state<WidgetMessage[]>([]);
	#ws: WebSocket | null = null;
	#reconnect: ReturnType<typeof setTimeout> | null = null;
	#streamingId: string | null = null;
	#turnTimer: ReturnType<typeof setTimeout> | null = null;
	#recorder: MediaRecorder | null = null;
	#chunks: Blob[] = [];
	#mediaStream: MediaStream | null = null;
	#recordStream: MediaStream | null = null;
	#audioContext: AudioContext | null = null;
	#micSource: MediaStreamAudioSourceNode | null = null;
	#meterSink: MediaStreamAudioDestinationNode | null = null;
	#analyser: AnalyserNode | null = null;
	#analyserRaf: number | null = null;
	#tapeState: TapeState = createTapeState();
	#tapeLast = 0;
	#dictationSeq = 0;
	#playbackContext: AudioContext | null = null;
	#playbackAnalyser: AnalyserNode | null = null;
	#playbackRaf: number | null = null;
	#hangupAfterSpeech = false;
	#uploadThreadGate: Promise<void> | null = null;
	#realtime: RealtimeCall | null = null;
	#realtimeSeq = 0;
	#realtimePending = false;
	#realtimeAgentTalking = false;
	#voiceGrant: string | null = null;
	#voiceGrantSent = false;
	#realtimeListenTimer: ReturnType<typeof setTimeout> | null = null;
	#hangupQuietTimer: ReturnType<typeof setTimeout> | null = null;
	#toolWaiters = new Map<
		string,
		{
			resolve: (output: string) => void;
			reject: (error: Error) => void;
		}
	>();
	#agentTranscript = '';

	get closed(): boolean {
		return isClosedStatus(this.status);
	}

	get #callUi() {
		return {
			connected: this.connected,
			closed: this.closed,
			transferred: this.transferred,
			voiceRealtimeEnabled: this.voiceRealtimeEnabled,
			voiceMode: this.voiceMode,
			recording: this.recording,
			transcribing: this.transcribing,
			draft: this.draft,
			pendingCount: this.pending.filter((item) => item.id && !item.error).length,
			callState: this.callState
		};
	}

	get canSend(): boolean {
		return callCanSend(this.#callUi) && !this.pending.some((item) => item.uploading);
	}

	get canStartCall(): boolean {
		return this.voiceCallEnabled && callCanStartCall(this.#callUi);
	}

	get activityLevel(): number {
		return this.levels.at(-1) ?? 0;
	}

	get orbitTone(): 'idle' | 'cold' | 'warm' {
		return callOrbitTone(this.#callUi);
	}

	get callStatusLabel(): string {
		return callStatusLabelOf(this.#callUi);
	}

	toggle(): void {
		this.open = !this.open;
		if (this.open) {
			this.#openLanding();
			this.connect();
			return;
		}
		this.hangup();
	}

	openPanel(): void {
		this.open = true;
		this.#openLanding();
		this.connect();
	}

	closePanel(): void {
		this.open = false;
		this.hangup();
	}

	setShowLauncher(show: boolean): void {
		this.showLauncher = show;
	}

	connect(): void {
		if (this.#ws && this.#ws.readyState <= WebSocket.OPEN) {
			return;
		}
		this.#hydrateStorage();
		this.#open();
	}

	showHistory(): void {
		this.hangup();
		this.#syncHistoryPreview();
		this.view = 'history';
	}

	hideHistory(): void {
		this.view = 'chat';
	}

	startNew(): void {
		this.view = 'chat';
		this.hangup();
		this.#clearPending();
		if (!this.currentId && this.messages.length === 0) {
			return;
		}
		this.#resetComposer();
		this.currentId = null;
		persistCurrentId(this.config.group, null);
		this.messages = [];
		this.transferred = false;
		this.status = 'waiting_customer';
		this.rated = false;
		this.ratingBusy = false;
		this.error = '';
		this.busy = false;
		this.#streamingId = null;
		this.#clearTurnTimer();
		this.#open();
	}

	openThread(id: string): void {
		this.view = 'chat';
		this.hangup();
		if (id === this.currentId && this.#ws && this.#ws.readyState === WebSocket.OPEN) {
			return;
		}
		this.#resetComposer();
		this.currentId = id;
		persistCurrentId(this.config.group, id);
		this.messages = [];
		const existing = this.history.find((item) => item.id === id);
		this.status = existing?.status ?? 'waiting_customer';
		this.transferred = isTransferredStatus(this.status, existing?.assignee);
		this.rated = false;
		this.ratingBusy = false;
		this.error = '';
		this.busy = false;
		this.#streamingId = null;
		this.#clearTurnTimer();
		this.#open();
	}

	disconnect(): void {
		if (this.#reconnect) {
			clearTimeout(this.#reconnect);
			this.#reconnect = null;
		}
		this.#clearTurnTimer();
		this.hangup();
		this.#dictationSeq += 1;
		this.transcribing = false;
		this.#ws?.close();
		this.#ws = null;
		this.connected = false;
	}

	async toggleMic(): Promise<void> {
		if (
			!this.dictationEnabled ||
			this.closed ||
			this.voiceMode ||
			this.transcribing ||
			this.recording
		) {
			return;
		}
		await this.#startRecording();
	}

	async cancelRecording(): Promise<void> {
		if (!this.recording || this.voiceMode) {
			return;
		}
		await this.#stopRecording(true);
	}

	async startCall(): Promise<void> {
		if (!this.voiceRealtimeEnabled) {
			this.error = m.error_voice_unavailable();
			return;
		}
		if (!this.voiceCallEnabled || !this.canStartCall || this.voiceMode) {
			return;
		}
		this.#unlockPlayback();
		this.view = 'chat';
		this.open = true;
		this.#dictationSeq += 1;
		this.transcribing = false;
		this.draft = '';
		await this.#stopRecording(true);
		this.voiceMode = true;
		this.callState = 'listening';
		this.#hangupAfterSpeech = false;
		this.error = '';
		const started = await this.#startRealtimeCall();
		if (!started) {
			this.hangup();
			this.error ||= m.error_voice_unavailable();
		}
	}

	hangup(): void {
		this.#dictationSeq += 1;
		this.#realtimeSeq += 1;
		this.transcribing = false;
		this.#stopPlaybackMeter();
		this.#closePlayback();
		this.#hangupAfterSpeech = false;
		this.#agentTranscript = '';
		this.#failToolWaiters();
		this.#realtime?.disconnect();
		this.#realtime = null;
		this.#realtimePending = false;
		this.#realtimeAgentTalking = false;
		this.#voiceGrant = null;
		this.#voiceGrantSent = false;
		this.#clearRealtimeListenTimer();
		this.#clearHangupQuietTimer();
		this.voiceMode = false;
		this.callState = 'idle';
		void this.#stopRecording(true);
	}

	send(): void {
		if (this.closed || this.voiceMode || this.transcribing) {
			return;
		}
		if (this.recording) {
			void this.#sendRecording();
			return;
		}
		this.#sendText(this.draft.trim());
	}

	rate(value: number): void {
		if (
			this.status !== 'resolved' ||
			this.rated ||
			this.ratingBusy ||
			!this.#ws ||
			this.#ws.readyState !== WebSocket.OPEN
		) {
			return;
		}
		this.ratingBusy = true;
		this.error = '';
		this.#ws.send(JSON.stringify({ type: 'chat.rate', value }));
	}

	async addFiles(files: FileList | File[]): Promise<void> {
		if (this.voiceMode || this.closed) {
			return;
		}
		for (const file of [...files]) {
			if (this.pending.length >= MAX_PENDING_ATTACHMENTS) {
				this.error = m.error_too_many_files();
				break;
			}
			const kind = kindForFile(file);
			if (!kind) {
				this.error = m.error_file_type();
				continue;
			}
			const max = kind === 'pdf' ? MAX_PDF_BYTES : MAX_IMAGE_BYTES;
			if (file.size > max) {
				this.error = kind === 'pdf' ? m.error_file_too_large_pdf() : m.error_file_too_large_image();
				continue;
			}
			const localId = crypto.randomUUID();
			const previewUrl = kind === 'image' ? URL.createObjectURL(file) : null;
			this.pending.push({
				localId,
				name: file.name || (kind === 'pdf' ? 'dokument.pdf' : 'obrazek.jpg'),
				kind,
				previewUrl,
				id: null,
				uploading: true,
				error: ''
			});
			void this.#uploadPending(localId, file);
		}
	}

	removePending(localId: string): void {
		const item = this.pending.find((entry) => entry.localId === localId);
		if (item?.previewUrl) {
			URL.revokeObjectURL(item.previewUrl);
		}
		this.pending = this.pending.filter((entry) => entry.localId !== localId);
	}

	attachmentSrc(attachment: Pick<ThreadAttachment, 'id' | 'previewUrl'>): string {
		if (attachment.previewUrl) {
			return attachment.previewUrl;
		}
		return chatAttachmentUrl(
			this.config.apiUrl,
			attachment.id,
			this.config.group,
			this.config.apiKey,
			this.visitorId
		);
	}

	#clearPending(options: { revoke?: boolean } = {}): void {
		if (options.revoke !== false) {
			for (const item of this.pending) {
				if (item.previewUrl) {
					URL.revokeObjectURL(item.previewUrl);
				}
			}
		}
		this.pending = [];
	}

	#sendText(text: string, options: { alreadyShown?: boolean } = {}): void {
		const attachmentIds = this.pending
			.map((item) => item.id)
			.filter((id): id is string => Boolean(id));
		if (
			this.closed ||
			(!text && attachmentIds.length === 0) ||
			!this.#ws ||
			this.#ws.readyState !== WebSocket.OPEN
		) {
			return;
		}
		if (this.pending.some((item) => item.uploading)) {
			return;
		}
		const attachments: ThreadAttachment[] = this.pending
			.filter((item) => item.id)
			.map((item) => ({
				id: item.id as string,
				filename: item.name,
				contentType: item.kind === 'pdf' ? 'application/pdf' : 'image/jpeg',
				byteSize: 0,
				kind: item.kind,
				source: 'upload',
				...(item.previewUrl ? { previewUrl: item.previewUrl } : {})
			}));
		if (!options.alreadyShown) {
			this.draft = '';
			this.messages.push({
				id: crypto.randomUUID(),
				at: nowIso(),
				role: 'customer',
				text,
				streaming: false,
				...(attachments.length > 0 ? { attachments } : {})
			});
		}
		this.#clearPending({ revoke: false });
		this.error = '';
		this.#beginAgentWait();
		if (this.currentId) {
			this.#upsertHistory({
				id: this.currentId,
				preview: text || attachments[0]?.filename || '',
				updatedAt: new Date().toISOString(),
				status: this.transferred ? 'waiting_us' : 'ai_replying'
			});
		}
		this.#ws.send(
			JSON.stringify({
				type: 'chat.send',
				text,
				voice: this.voiceMode,
				attachmentIds
			})
		);
	}

	async #uploadPending(localId: string, file: File): Promise<void> {
		let releaseGate: (() => void) | undefined;
		if (!this.currentId) {
			if (this.#uploadThreadGate) {
				await this.#uploadThreadGate;
			} else {
				this.#uploadThreadGate = new Promise((resolve) => {
					releaseGate = resolve;
				});
			}
		}
		try {
			const form = new FormData();
			form.append('file', file);
			form.append('group', this.config.group);
			form.append('key', this.config.apiKey);
			form.append('visitor', this.visitorId);
			if (this.currentId) {
				form.append('thread', this.currentId);
			}
			const response = await fetch(chatAttachmentUploadUrl(this.config.apiUrl), {
				method: 'POST',
				body: form
			});
			const payload = (await response.json().catch(() => ({}))) as {
				attachment?: { id?: unknown };
				thread_id?: unknown;
				message?: unknown;
			};
			if (!response.ok) {
				throw new Error(
					typeof payload.message === 'string' ? payload.message : m.error_upload_failed()
				);
			}
			const id =
				payload.attachment && typeof payload.attachment.id === 'string'
					? payload.attachment.id
					: '';
			if (!id) {
				throw new Error(m.error_upload_failed());
			}
			if (typeof payload.thread_id === 'string' && payload.thread_id) {
				this.currentId = payload.thread_id;
				persistCurrentId(this.config.group, payload.thread_id);
			}
			this.pending = this.pending.map((item) =>
				item.localId === localId ? { ...item, id, uploading: false } : item
			);
		} catch (error) {
			this.pending = this.pending.map((item) =>
				item.localId === localId
					? {
							...item,
							uploading: false,
							error: error instanceof Error ? error.message : m.error_upload_failed()
						}
					: item
			);
		} finally {
			releaseGate?.();
			if (releaseGate) {
				this.#uploadThreadGate = null;
			}
		}
	}

	async #sendRecording(): Promise<void> {
		const blob = await this.#stopRecording(false);
		await this.#ingestSpokenBlob(blob, { revealPause: true });
	}

	async #ingestSpokenBlob(blob: Blob | null, options: { revealPause: boolean }): Promise<boolean> {
		if (!blob) {
			return false;
		}
		if (blob.size < 256) {
			this.error = m.error_recording_short();
			return false;
		}
		if (this.closed) {
			return false;
		}

		const seq = ++this.#dictationSeq;
		const bubble: WidgetMessage = {
			id: crypto.randomUUID(),
			at: nowIso(),
			role: 'customer',
			text: '',
			streaming: true,
			transcribing: true
		};
		this.transcribing = true;
		this.error = '';
		this.messages.push(bubble);

		try {
			const text = await this.#transcribe(blob);
			if (seq !== this.#dictationSeq) {
				return false;
			}
			if (!text) {
				throw new Error(m.error_speech_failed());
			}
			this.#patchMessage(bubble.id, {
				transcribing: false,
				streaming: true,
				transcribed: false
			});
			await this.#revealTranscript(bubble.id, text, seq);
			if (seq !== this.#dictationSeq) {
				return false;
			}
			this.#patchMessage(bubble.id, {
				text,
				streaming: false,
				transcribing: false,
				transcribed: true
			});
			this.transcribing = false;
			if (options.revealPause) {
				await wait(450);
			}
			if (seq !== this.#dictationSeq) {
				return false;
			}
			if (!this.#ws || this.#ws.readyState !== WebSocket.OPEN) {
				this.error = m.error_connection_lost();
				return false;
			}
			this.#sendText(text, { alreadyShown: true });
			return true;
		} catch (error) {
			if (seq !== this.#dictationSeq) {
				return false;
			}
			this.messages = this.messages.filter((message) => message.id !== bubble.id);
			this.transcribing = false;
			this.error = error instanceof Error ? error.message : m.error_transcribe_failed();
			return false;
		}
	}

	async #startRecording(): Promise<void> {
		await this.#openMic({ echoCancellation: false, noiseSuppression: false });
	}

	async #startRealtimeCall(): Promise<boolean> {
		this.callState = 'listening';
		this.#realtimePending = true;
		this.#realtimeAgentTalking = false;
		this.connect();
		const seq = ++this.#realtimeSeq;
		try {
			const minted = await this.#mintRealtimeSession();
			if (seq !== this.#realtimeSeq || !this.voiceMode) {
				this.#realtimePending = false;
				return true;
			}
			this.#voiceGrant = minted.grant ?? null;
			this.#voiceGrantSent = false;
			this.#sendVoiceReady();
			await this.#openMic({ echoCancellation: true, noiseSuppression: true }, { recorder: false });
			if (seq !== this.#realtimeSeq || !this.voiceMode) {
				this.#realtimePending = false;
				return true;
			}
			if (!this.#mediaStream) {
				throw new Error(m.error_mic_failed());
			}
			this.#realtime = await connectRealtimeCall(minted.clientSecret, this.#mediaStream, {
				onFunctionCall: (call) => this.#runRealtimeTool(call.callId, call.name, call.arguments),
				onTranscript: (transcript) => this.#onRealtimeTranscript(transcript),
				onRemoteStream: (stream) => this.#listenRemoteAudio(stream),
				onActivity: (activity) => this.#onRealtimeActivity(activity),
				onError: (message) => {
					this.error = message;
				}
			});
			if (seq !== this.#realtimeSeq || !this.voiceMode) {
				this.#realtime.disconnect();
				this.#realtime = null;
				this.#realtimePending = false;
				return true;
			}
			this.#realtimePending = false;
			this.callState = 'listening';
			await this.#playbackContext?.resume();
			return true;
		} catch (error) {
			if (seq !== this.#realtimeSeq) {
				this.#realtimePending = false;
				return true;
			}
			this.#realtime?.disconnect();
			this.#realtime = null;
			this.#realtimePending = false;
			await this.#stopRecording(true);
			this.error = error instanceof Error ? error.message : m.error_voice_unavailable();
			return false;
		}
	}

	async #mintRealtimeSession(): Promise<{ clientSecret: string; grant?: string }> {
		const response = await fetch(realtimeSessionUrl(this.config.apiUrl, this.config.group), {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				authorization: `Bearer ${this.config.apiKey}`
			},
			body: JSON.stringify({
				visitorId: this.visitorId,
				...(this.currentId ? { threadId: this.currentId } : {})
			})
		});
		const payload = (await response.json().catch(() => ({}))) as {
			client_secret?: unknown;
			grant?: unknown;
			message?: unknown;
		};
		if (!response.ok || typeof payload.client_secret !== 'string' || !payload.client_secret) {
			throw new Error(
				typeof payload.message === 'string' ? payload.message : 'Realtime session failed'
			);
		}
		return {
			clientSecret: payload.client_secret,
			...(typeof payload.grant === 'string' && payload.grant ? { grant: payload.grant } : {})
		};
	}

	#sendVoiceReady(): void {
		if (
			!this.#voiceGrant ||
			this.#voiceGrantSent ||
			!this.#ws ||
			this.#ws.readyState !== WebSocket.OPEN
		) {
			return;
		}
		this.#ws.send(JSON.stringify({ type: 'chat.voice.ready', grant: this.#voiceGrant }));
		this.#voiceGrantSent = true;
	}

	#runRealtimeTool(callId: string, name: string, args: string): Promise<string> {
		if (!this.#ws || this.#ws.readyState !== WebSocket.OPEN) {
			return Promise.resolve(JSON.stringify({ error: 'Chat is disconnected' }));
		}
		return new Promise((resolve, reject) => {
			this.#toolWaiters.set(callId, { resolve, reject });
			this.#ws?.send(
				JSON.stringify({
					type: 'chat.voice.tool',
					callId,
					name,
					arguments: args
				})
			);
		});
	}

	#failToolWaiters(): void {
		for (const waiter of this.#toolWaiters.values()) {
			waiter.reject(new Error('Call ended'));
		}
		this.#toolWaiters.clear();
	}

	#onRealtimeTranscript(transcript: {
		role: 'customer' | 'agent';
		text: string;
		done: boolean;
	}): void {
		if (!this.voiceMode) {
			return;
		}
		if (transcript.role === 'customer') {
			if (!transcript.done) {
				return;
			}
			const text = transcript.text.trim();
			if (!text) {
				return;
			}
			this.messages.push({
				id: crypto.randomUUID(),
				at: nowIso(),
				role: 'customer',
				text,
				streaming: false
			});
			this.#commitVoiceTranscript('customer', text);
			return;
		}
		if (!transcript.done) {
			this.#agentTranscript += transcript.text;
			this.#appendRealtimeAgent(this.#agentTranscript, false);
			return;
		}
		const text = (transcript.text || this.#agentTranscript).trim();
		this.#agentTranscript = '';
		if (text) {
			this.#appendRealtimeAgent(text, true);
			this.#commitVoiceTranscript('agent', text);
		}
	}

	#onRealtimeActivity(activity: RealtimeActivity): void {
		if (!this.voiceMode) {
			return;
		}
		if (activity === 'agent-start') {
			this.#clearRealtimeListenTimer();
			this.#clearHangupQuietTimer();
			this.#realtimeAgentTalking = true;
			this.callState = 'playing';
			return;
		}
		if (activity === 'agent-end') {
			this.#clearRealtimeListenTimer();
			this.#realtimeListenTimer = setTimeout(() => {
				this.#realtimeListenTimer = null;
				this.#realtimeAgentTalking = false;
				if (!this.voiceMode) {
					return;
				}
				if (this.#toolWaiters.size > 0) {
					this.callState = 'thinking';
					return;
				}
				if (this.#hangupAfterSpeech || this.transferred || this.closed) {
					this.hangup();
					return;
				}
				this.callState = 'listening';
			}, 1400);
			return;
		}
		if (this.#hangupAfterSpeech || this.#realtimeAgentTalking) {
			return;
		}
		this.callState = activity === 'user-start' ? 'speaking' : 'listening';
	}

	#clearRealtimeListenTimer(): void {
		if (this.#realtimeListenTimer === null) {
			return;
		}
		clearTimeout(this.#realtimeListenTimer);
		this.#realtimeListenTimer = null;
	}

	#clearHangupQuietTimer(): void {
		if (this.#hangupQuietTimer === null) {
			return;
		}
		clearTimeout(this.#hangupQuietTimer);
		this.#hangupQuietTimer = null;
	}

	#appendRealtimeAgent(text: string, done: boolean): void {
		if (!this.#streamingId) {
			const streaming: WidgetMessage = {
				id: crypto.randomUUID(),
				at: nowIso(),
				role: 'agent',
				text: '',
				streaming: true
			};
			this.#streamingId = streaming.id;
			this.messages.push(streaming);
		}
		const current = this.messages.find((message) => message.id === this.#streamingId);
		if (current) {
			current.text = text;
			current.streaming = !done;
		}
		if (done) {
			this.#streamingId = null;
		}
	}

	#commitVoiceTranscript(role: 'customer' | 'agent', text: string): void {
		if (!this.#ws || this.#ws.readyState !== WebSocket.OPEN) {
			return;
		}
		this.#ws.send(
			JSON.stringify({
				type: 'chat.voice.commit',
				role,
				text
			})
		);
	}

	#listenRemoteAudio(stream: MediaStream): void {
		this.#stopPlaybackMeter();
		const Context = audioContextCtor();
		if (!Context) {
			return;
		}
		if (!this.#playbackContext || this.#playbackContext.state === 'closed') {
			this.#playbackContext = new Context();
		}
		const context = this.#playbackContext;
		void context.resume();
		const source = context.createMediaStreamSource(stream);
		const analyser = context.createAnalyser();
		analyser.fftSize = 512;
		analyser.smoothingTimeConstant = 0.85;
		source.connect(analyser);
		this.#playbackAnalyser = analyser;
		const time = new Float32Array(analyser.fftSize);
		let hold = { speaking: false, silentMs: 0 };
		let smoothed = IDLE_LEVEL;
		let lastNow = performance.now();
		let published = IDLE_LEVEL;
		const tick = (): void => {
			if (!this.#playbackAnalyser || !this.#realtime) {
				return;
			}
			const now = performance.now();
			const dt = Math.min(80, now - lastNow);
			lastNow = now;
			this.#playbackAnalyser.getFloatTimeDomainData(time as Float32Array<ArrayBuffer>);
			const { peak } = sampleEnergy(time);
			hold = advancePlaybackHold(hold, peak, dt);
			const target =
				hold.speaking || this.#realtimeAgentTalking
					? playbackOrbitEnergy(Math.min(1, Math.max(0.4, peak * 4)))
					: IDLE_LEVEL;
			smoothed = smoothPlaybackLevel(smoothed, target);
			if (Math.abs(smoothed - published) >= 0.04) {
				published = smoothed;
				this.levels = Array.from({ length: WAVEFORM_BARS }, () => smoothed);
			}
			this.#playbackRaf = requestAnimationFrame(tick);
		};
		this.#playbackRaf = requestAnimationFrame(tick);
	}

	async #openMic(
		constraints: {
			echoCancellation: boolean;
			noiseSuppression: boolean;
		},
		options: { recorder?: boolean } = {}
	): Promise<void> {
		if (
			typeof navigator === 'undefined' ||
			!navigator.mediaDevices?.getUserMedia ||
			(options.recorder !== false && typeof MediaRecorder === 'undefined')
		) {
			this.error = m.error_dictation_unavailable();
			return;
		}

		this.error = '';
		this.#ensureMicContext();
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: {
					echoCancellation: constraints.echoCancellation,
					noiseSuppression: constraints.noiseSuppression,
					autoGainControl: true
				}
			});
			this.#mediaStream = stream;
			this.#startWaveform(stream);
			if (options.recorder === false) {
				this.recording = true;
				return;
			}
			this.#attachRecorder(stream);
		} catch (error) {
			this.#stopWaveform();
			this.#stopTracks();
			this.recording = false;
			if (error instanceof DOMException && error.name === 'NotAllowedError') {
				this.error = m.error_mic_denied();
				return;
			}
			this.error = m.error_mic_failed();
		}
	}

	#attachRecorder(stream: MediaStream): void {
		this.#stopRecordTracks();
		const recordStream = new MediaStream(stream.getAudioTracks().map((track) => track.clone()));
		this.#recordStream = recordStream;
		const mime = pickRecorderMime();
		const recorder = mime
			? new MediaRecorder(recordStream, { mimeType: mime })
			: new MediaRecorder(recordStream);
		this.#chunks = [];
		recorder.addEventListener('dataavailable', (event) => {
			if (event.data.size > 0) {
				this.#chunks.push(event.data);
			}
		});
		recorder.start(250);
		this.#recorder = recorder;
		this.recording = true;
	}

	#stopRecording(discard: boolean, keepStream = false): Promise<Blob | null> {
		const recorder = this.#recorder;
		if (!recorder || recorder.state === 'inactive') {
			if (!keepStream) {
				this.#stopWaveform();
				this.#stopTracks();
				this.recording = false;
			}
			this.#recorder = null;
			this.#chunks = [];
			return Promise.resolve(null);
		}

		return new Promise((resolve) => {
			recorder.addEventListener(
				'stop',
				() => {
					const blob = new Blob(this.#chunks, {
						type: recorder.mimeType || 'audio/webm'
					});
					this.#chunks = [];
					this.#recorder = null;
					if (!keepStream) {
						this.recording = false;
						this.#stopWaveform();
						this.#stopTracks();
					} else {
						this.#stopRecordTracks();
					}
					resolve(discard ? null : blob);
				},
				{ once: true }
			);
			recorder.stop();
		});
	}

	#stopRecordTracks(): void {
		for (const track of this.#recordStream?.getTracks() ?? []) {
			track.stop();
		}
		this.#recordStream = null;
	}

	#stopTracks(): void {
		this.#stopRecordTracks();
		for (const track of this.#mediaStream?.getTracks() ?? []) {
			track.stop();
		}
		this.#mediaStream = null;
	}

	#ensureMicContext(): AudioContext | null {
		const Context = audioContextCtor();
		if (!Context) {
			return null;
		}
		if (!this.#audioContext || this.#audioContext.state === 'closed') {
			this.#audioContext = new Context();
		}
		void this.#audioContext.resume();
		return this.#audioContext;
	}

	#startWaveform(stream: MediaStream): void {
		this.#haltMeter();
		const context = this.#ensureMicContext();
		if (!context) {
			return;
		}
		for (const track of stream.getAudioTracks()) {
			track.enabled = true;
		}
		const source = context.createMediaStreamSource(stream);
		const analyser = context.createAnalyser();
		analyser.fftSize = 512;
		analyser.smoothingTimeConstant = 0;
		analyser.minDecibels = -90;
		analyser.maxDecibels = -25;
		const sink = context.createMediaStreamDestination();
		source.connect(analyser);
		analyser.connect(sink);
		this.#micSource = source;
		this.#analyser = analyser;
		this.#meterSink = sink;
		this.#resetTape();
		const time = new Float32Array(analyser.fftSize);
		const tick = (): void => {
			if (!this.#analyser) {
				return;
			}
			const now = performance.now();
			if (
				this.#realtime ||
				this.#realtimePending ||
				(this.voiceMode && this.callState === 'playing')
			) {
				this.#tapeLast = now;
			} else {
				this.#analyser.getFloatTimeDomainData(time as Float32Array<ArrayBuffer>);
				const advanced = advanceTape(this.#tapeState, time, now, this.#tapeLast);
				this.#tapeState = advanced.state;
				this.levels = advanced.levels;
				this.waveShift = advanced.waveShift;
				this.waveTick += 1;
				this.#tapeLast = advanced.tapeLast;
			}
			this.#analyserRaf = requestAnimationFrame(tick);
		};
		void context.resume();
		this.#analyserRaf = requestAnimationFrame(tick);
	}

	#resetTape(): void {
		this.#tapeState = createTapeState();
		this.#tapeLast = 0;
		this.levels = this.#tapeState.tape.concat(this.#tapeState.column);
		this.waveShift = 0;
	}

	#haltMeter(): void {
		if (this.#analyserRaf !== null) {
			cancelAnimationFrame(this.#analyserRaf);
			this.#analyserRaf = null;
		}
		this.#analyser = null;
		this.#meterSink?.disconnect();
		this.#meterSink = null;
		this.#micSource?.disconnect();
		this.#micSource = null;
		this.#tapeState = {
			tape: [],
			clock: 0,
			column: IDLE_LEVEL,
			peakRef: NOISE_MIN,
			noise: NOISE_MIN
		};
		this.#tapeLast = 0;
		this.waveShift = 0;
	}

	#stopWaveform(): void {
		this.#haltMeter();
		if (this.#audioContext) {
			void this.#audioContext.close();
			this.#audioContext = null;
		}
		this.levels = [];
	}

	#patchMessage(id: string, patch: Partial<WidgetMessage>): void {
		const current = this.messages.find((message) => message.id === id);
		if (!current) {
			return;
		}
		Object.assign(current, patch);
	}

	async #transcribe(blob: Blob): Promise<string> {
		const form = new FormData();
		form.append('file', blob, filenameForMime(blob.type));
		form.append('company', this.config.group);
		form.append('context', 'thread');
		const response = await fetch(transcribeUrl(this.config.apiUrl), {
			method: 'POST',
			headers: {
				authorization: `Bearer ${this.config.apiKey}`
			},
			body: form
		});
		const payload = (await response.json().catch(() => ({}))) as {
			text?: unknown;
		};
		if (!response.ok) {
			throw new Error(
				response.status === 400 ? m.error_speech_failed() : m.error_transcribe_failed()
			);
		}
		return typeof payload.text === 'string' ? payload.text.trim() : '';
	}

	async #revealTranscript(id: string, text: string, seq: number): Promise<void> {
		const parts = text.split(/(\s+)/).filter(Boolean);
		if (parts.length <= 2) {
			this.#patchMessage(id, { text });
			return;
		}
		this.#patchMessage(id, { text: '' });
		let acc = '';
		const step = Math.max(12, Math.min(36, Math.floor(700 / parts.length)));
		for (const part of parts) {
			if (seq !== this.#dictationSeq) {
				return;
			}
			acc += part;
			this.#patchMessage(id, { text: acc });
			await wait(step);
		}
	}

	#beginAgentWait(): void {
		if (this.transferred || this.#streamingId) {
			return;
		}
		this.busy = true;
		if (this.voiceMode) {
			this.callState = 'thinking';
		}
		const streaming: WidgetMessage = {
			id: crypto.randomUUID(),
			at: nowIso(),
			role: 'agent',
			text: '',
			streaming: true
		};
		this.#streamingId = streaming.id;
		this.messages.push(streaming);
		this.#armTurnTimer();
	}

	#open(): void {
		if (this.#reconnect) {
			clearTimeout(this.#reconnect);
			this.#reconnect = null;
		}
		this.#ws?.close();
		const ws = new WebSocket(
			toWsUrl(
				this.config.apiUrl,
				this.config.group,
				this.config.apiKey,
				this.currentId,
				this.visitorId
			)
		);
		this.#ws = ws;
		ws.addEventListener('open', () => {
			if (this.#ws === ws) {
				this.connected = true;
				this.#sendVoiceReady();
			}
		});
		ws.addEventListener('close', () => {
			if (this.#ws !== ws) {
				return;
			}
			this.connected = false;
			this.#reconnect = setTimeout(() => this.#open(), 1500);
		});
		ws.addEventListener('message', (event) => {
			try {
				this.#handle(JSON.parse(String(event.data)) as ChatEvent);
			} catch {
				// ignore
			}
		});
	}

	#handle(event: ChatEvent): void {
		if (event.type === 'ping') {
			return;
		}
		if (event.type === 'chat.ready') {
			this.#applyThread(event.thread);
			this.#sendVoiceReady();
			return;
		}
		if (event.type === 'chat.delta' && event.kind === 'answer') {
			this.#appendDelta(event.text);
			return;
		}
		if (event.type === 'chat.ask') {
			this.#finishStream(event.question, event.message?.id);
			if (this.voiceMode) {
				this.busy = false;
				this.#maybeResumeCall();
			} else {
				this.busy = true;
			}
			this.#armTurnTimer();
			return;
		}
		if (event.type === 'chat.done') {
			this.#clearTurnTimer();
			this.#finishStream(event.text);
			if (event.thread) {
				this.#rememberThread(event.thread);
				const fromThread = [...event.thread.messages]
					.reverse()
					.find((message) => message.role === 'agent');
				if (fromThread?.attachments?.length) {
					const local = [...this.messages].reverse().find((message) => message.role === 'agent');
					if (local) {
						local.attachments = fromThread.attachments;
						local.id = fromThread.id;
					}
				}
			}
			this.busy = false;
			if (
				event.transferred ||
				isTransferredStatus(event.thread.status, event.thread.assignee) ||
				isClosedStatus(event.thread.status)
			) {
				this.#requestHangupAfterSpeech();
			}
			this.#maybeResumeCall();
			return;
		}
		if (event.type === 'chat.queued') {
			this.#clearTurnTimer();
			this.#dropEmptyStream();
			this.busy = false;
			this.#requestHangupAfterSpeech();
			this.#maybeResumeCall();
			return;
		}
		if (event.type === 'chat.error') {
			this.#clearTurnTimer();
			this.#dropEmptyStream();
			this.busy = false;
			if (this.ratingBusy) {
				this.ratingBusy = false;
				this.error = event.message;
			} else if (!this.closed) {
				this.error = event.message;
			}
			this.#maybeResumeCall();
			return;
		}
		if (event.type === 'chat.rated') {
			this.rated = true;
			this.ratingBusy = false;
			return;
		}
		if (event.type === 'chat.voice.committed') {
			if (event.thread) {
				this.#rememberThread(event.thread);
			}
			if (event.role === 'agent') {
				this.#applyVoiceAttachments(
					event.message?.attachments ?? lastAgentAttachments(event.thread)
				);
			}
			return;
		}
		if (event.type === 'chat.voice.tool_result') {
			const waiter = this.#toolWaiters.get(event.callId);
			if (waiter) {
				this.#toolWaiters.delete(event.callId);
				waiter.resolve(event.output);
			}
			if (event.thread) {
				this.currentId = event.thread.id;
				persistCurrentId(this.config.group, event.thread.id);
				this.status = event.thread.status;
				this.transferred = isTransferredStatus(event.thread.status, event.thread.assignee);
				this.#upsertHistory({
					id: event.thread.id,
					preview:
						event.thread.preview || lastMessagePreview(this.messages) || m.conversation_new(),
					updatedAt: event.thread.updatedAt,
					status: event.thread.status,
					assignee: event.thread.assignee
				});
			}
			this.#applyVoiceAttachments(event.attachments ?? lastAgentAttachments(event.thread));
			if (event.transferred || event.closed) {
				this.#requestHangupAfterSpeech();
			}
			return;
		}
		if (event.type === 'thread.message' && event.message.role === 'operator') {
			this.#upsertMessage(event.message);
			return;
		}
		if (event.type === 'thread.updated') {
			this.#applyStatus(event.thread.status, event.thread.assignee);
			const existing = this.history.find((item) => item.id === event.thread.id);
			if (existing) {
				this.#upsertHistory({
					...existing,
					status: event.thread.status,
					assignee: event.thread.assignee ?? existing.assignee
				});
			}
			if (this.closed || this.transferred) {
				this.#requestHangupAfterSpeech();
			}
			return;
		}
	}

	#applyThread(thread: SupportThread | null): void {
		if (!thread) {
			if (this.currentId) {
				this.error = m.error_conversation_gone();
				this.#removeHistory(this.currentId);
				this.currentId = null;
				persistCurrentId(this.config.group, null);
				this.messages = [];
			}
			this.transferred = false;
			this.status = 'waiting_customer';
			this.rated = false;
			this.ratingBusy = false;
			this.busy = false;
			this.#streamingId = null;
			this.#clearTurnTimer();
			return;
		}
		this.rated = thread.rated === true;
		this.ratingBusy = false;
		if (thread.messages.length > 0) {
			const previews = previewUrlsByAttachment(this.messages);
			this.messages = threadToMessages(thread.messages).map((message) =>
				keepAttachmentPreviews(message, previews)
			);
		}
		this.#rememberThread(thread);
		if ((this.transferred || this.closed) && this.voiceMode) {
			this.#requestHangupAfterSpeech();
		}
		if (thread.messages.length === 0) {
			return;
		}
		this.#streamingId = null;
		this.busy = false;
		this.#clearTurnTimer();
	}

	#openLanding(): void {
		this.#hydrateStorage();
		if (this.history.length === 0) {
			this.startNew();
			return;
		}
		this.view = 'history';
	}

	#hydrateStorage(): void {
		this.history = loadHistory(this.config.group);
		this.currentId = loadCurrentId(this.config.group);
		if (this.currentId && !this.history.some((item) => item.id === this.currentId)) {
			this.#upsertHistory({
				id: this.currentId,
				preview: m.conversation_fallback(),
				updatedAt: new Date().toISOString(),
				status: 'waiting_customer'
			});
		}
	}

	#rememberThread(
		thread: Pick<SupportThread, 'id' | 'preview' | 'updatedAt' | 'status' | 'assignee' | 'messages'>
	): void {
		this.currentId = thread.id;
		persistCurrentId(this.config.group, thread.id);
		this.#applyStatus(thread.status, thread.assignee);
		this.#upsertHistory({
			id: thread.id,
			preview:
				lastMessagePreview(thread.messages ?? this.messages) ||
				thread.preview ||
				m.conversation_new(),
			updatedAt: thread.updatedAt,
			status: thread.status,
			assignee: thread.assignee
		});
	}

	#syncHistoryPreview(): void {
		if (!this.currentId) {
			return;
		}
		const existing = this.history.find((item) => item.id === this.currentId);
		const preview = lastMessagePreview(this.messages);
		if (!existing || !preview) {
			return;
		}
		this.#upsertHistory({ ...existing, preview });
	}

	#applyStatus(status: ThreadStatus, assignee?: SupportThread['assignee']): void {
		this.status = status;
		this.transferred = isTransferredStatus(status, assignee);
		if (!this.voiceMode) {
			return;
		}
		if (this.closed || this.transferred) {
			this.#requestHangupAfterSpeech();
		}
	}

	#upsertHistory(item: ConversationSummary): void {
		this.history = upsertHistory(this.history, item);
		persistHistory(this.config.group, this.history);
	}

	#removeHistory(id: string): void {
		this.history = this.history.filter((item) => item.id !== id);
		persistHistory(this.config.group, this.history);
	}

	#resetComposer(): void {
		this.#dictationSeq += 1;
		this.transcribing = false;
		this.draft = '';
		this.#clearPending();
		if (!this.voiceMode) {
			void this.#stopRecording(true);
		}
	}

	#appendDelta(text: string): void {
		if (!this.#streamingId) {
			const streaming: WidgetMessage = {
				id: crypto.randomUUID(),
				at: nowIso(),
				role: 'agent',
				text: '',
				streaming: true
			};
			this.#streamingId = streaming.id;
			this.messages.push(streaming);
		}
		const current = this.messages.find((message) => message.id === this.#streamingId);
		if (current) {
			current.text += text;
		}
	}

	#finishStream(text: string, id?: string): void {
		if (!this.#streamingId) {
			if (
				text &&
				!this.messages.some((message) => message.role === 'agent' && message.text === text)
			) {
				this.messages.push({
					id: id ?? crypto.randomUUID(),
					at: nowIso(),
					role: 'agent',
					text,
					streaming: false
				});
			}
			return;
		}
		const current = this.messages.find((message) => message.id === this.#streamingId);
		if (current) {
			if (!current.text) {
				current.text = text;
			} else if (text && text.length > current.text.length && text.startsWith(current.text)) {
				current.text = text;
			}
			current.streaming = false;
			if (id) {
				current.id = id;
			}
		}
		this.#streamingId = null;
	}

	#dropEmptyStream(): void {
		if (!this.#streamingId) {
			return;
		}
		this.messages = this.messages.filter(
			(message) => message.id !== this.#streamingId || message.text
		);
		this.#streamingId = null;
	}

	#unlockPlayback(): void {
		const Context = audioContextCtor();
		if (!Context) {
			return;
		}
		if (!this.#playbackContext || this.#playbackContext.state === 'closed') {
			this.#playbackContext = new Context();
		}
		void this.#playbackContext.resume();
		const osc = this.#playbackContext.createOscillator();
		const gain = this.#playbackContext.createGain();
		gain.gain.value = 0;
		osc.connect(gain);
		gain.connect(this.#playbackContext.destination);
		osc.start();
		osc.stop(this.#playbackContext.currentTime + 0.05);
	}

	#stopPlaybackMeter(): void {
		if (this.#playbackRaf !== null) {
			cancelAnimationFrame(this.#playbackRaf);
			this.#playbackRaf = null;
		}
		this.#playbackAnalyser = null;
	}

	#closePlayback(): void {
		if (!this.#playbackContext) {
			return;
		}
		void this.#playbackContext.close();
		this.#playbackContext = null;
	}

	#requestHangupAfterSpeech(): void {
		if (!this.voiceMode) {
			return;
		}
		this.#hangupAfterSpeech = true;
		if (
			this.#realtime &&
			!this.#realtimeAgentTalking &&
			this.#toolWaiters.size === 0 &&
			this.#hangupQuietTimer === null
		) {
			this.#hangupQuietTimer = setTimeout(() => {
				this.#hangupQuietTimer = null;
				if (this.voiceMode && (this.#hangupAfterSpeech || this.transferred || this.closed)) {
					this.hangup();
				}
			}, 8000);
		}
	}

	#maybeResumeCall(): void {
		if (!this.voiceMode || this.#realtime) {
			return;
		}
		if (this.#hangupAfterSpeech || this.transferred) {
			this.hangup();
		}
	}

	#armTurnTimer(): void {
		this.#clearTurnTimer();
		this.#turnTimer = setTimeout(() => {
			if (!this.busy) {
				return;
			}
			this.error = m.error_reply_timeout();
			this.#dropEmptyStream();
			this.busy = false;
			this.#maybeResumeCall();
		}, 45_000);
	}

	#clearTurnTimer(): void {
		if (this.#turnTimer) {
			clearTimeout(this.#turnTimer);
			this.#turnTimer = null;
		}
	}

	#applyVoiceAttachments(attachments: ThreadAttachment[] | undefined): void {
		if (!attachments?.length) {
			return;
		}
		this.messages = mergeAgentAttachments(this.messages, attachments, nowIso(), {
			preferId: this.#streamingId
		});
	}

	#upsertMessage(message: ThreadMessage): void {
		if (this.messages.some((existing) => existing.id === message.id)) {
			return;
		}
		if (!isVisibleWidgetRole(message.role) || message.role === 'customer') {
			return;
		}
		this.messages.push({
			id: message.id,
			at: message.at,
			role: message.role,
			text: message.text,
			streaming: false,
			...(message.attachments && message.attachments.length > 0
				? { attachments: message.attachments }
				: {})
		});
		this.#syncHistoryPreview();
	}
}

function kindForFile(file: File): 'image' | 'pdf' | null {
	const type = file.type.split(';')[0]?.trim().toLowerCase() ?? '';
	if (type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
		return 'pdf';
	}
	if (IMAGE_TYPES.has(type)) {
		return 'image';
	}
	return null;
}

function lastAgentAttachments(
	thread: Pick<SupportThread, 'messages'> | null | undefined
): ThreadAttachment[] {
	if (!thread) {
		return [];
	}
	for (let index = thread.messages.length - 1; index >= 0; index -= 1) {
		const message = thread.messages[index];
		if (message?.role === 'agent' && message.attachments?.length) {
			return message.attachments;
		}
	}
	return [];
}

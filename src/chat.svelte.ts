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
import type { WidgetMessage } from './messages';
import { isVisibleWidgetRole, threadToMessages } from './messages';
import * as m from './paraglide/messages.js';
import { splitSpeakable } from './speech';
import type { ChatEvent, SupportThread, ThreadMessage, ThreadStatus } from './types';
import { isClosedStatus, isTransferredStatus } from './types';
import { toWsUrl, transcribeUrl, ttsUrl } from './urls';
import { createVadState, tickVad, VAD_THRESHOLD } from './vad';
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
	connected = $state(false);
	busy = $state(false);
	transferred = $state(false);
	status = $state<ThreadStatus>('ai');
	recording = $state(false);
	transcribing = $state(false);
	voiceMode = $state(false);
	callState = $state<CallState>('idle');
	levels = $state.raw<number[]>([]);
	waveTick = $state(0);
	waveShift = $state(0);
	error = $state('');
	draft = $state('');
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
	#pauseVad = false;
	#flushing = false;
	#vadState = createVadState();
	#ttsBuffer = '';
	#ttsQueue: string[] = [];
	#ttsPlaying = false;
	#ttsSeq = 0;
	#ttsAbort: AbortController | null = null;
	#playbackContext: AudioContext | null = null;
	#ttsSource: AudioBufferSourceNode | null = null;
	#playbackDone: (() => void) | null = null;
	#playbackAnalyser: AnalyserNode | null = null;
	#playbackRaf: number | null = null;
	#hangupAfterSpeech = false;

	get closed(): boolean {
		return isClosedStatus(this.status);
	}

	get #callUi() {
		return {
			connected: this.connected,
			closed: this.closed,
			transferred: this.transferred,
			voiceMode: this.voiceMode,
			recording: this.recording,
			transcribing: this.transcribing,
			draft: this.draft,
			callState: this.callState
		};
	}

	get canSend(): boolean {
		return callCanSend(this.#callUi);
	}

	get canStartCall(): boolean {
		return callCanStartCall(this.#callUi);
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
		this.view = 'history';
	}

	hideHistory(): void {
		this.view = 'chat';
	}

	startNew(): void {
		this.view = 'chat';
		this.hangup();
		if (!this.currentId && this.messages.length === 0) {
			return;
		}
		this.#resetComposer();
		this.currentId = null;
		persistCurrentId(this.config.group, null);
		this.messages = [];
		this.transferred = false;
		this.status = 'ai';
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
		this.status = existing?.status ?? 'ai';
		this.transferred = isTransferredStatus(this.status);
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
		if (this.closed || this.voiceMode || this.transcribing || this.recording) {
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
		if (!this.canStartCall || this.voiceMode) {
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
		this.#pauseVad = false;
		this.#hangupAfterSpeech = false;
		this.#ttsBuffer = '';
		this.#ttsQueue = [];
		this.error = '';
		await this.#startCallMic();
		await this.#playbackContext?.resume();
	}

	hangup(): void {
		this.#ttsSeq += 1;
		this.#dictationSeq += 1;
		this.transcribing = false;
		this.#ttsQueue = [];
		this.#ttsAbort?.abort();
		this.#ttsAbort = null;
		this.#stopPlayback();
		this.#stopPlaybackMeter();
		this.#closePlayback();
		this.#ttsPlaying = false;
		this.#hangupAfterSpeech = false;
		this.#pauseVad = true;
		this.#flushing = false;
		this.#vadState = createVadState();
		this.#ttsBuffer = '';
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

	#sendText(text: string, options: { alreadyShown?: boolean } = {}): void {
		if (this.closed || !text || !this.#ws || this.#ws.readyState !== WebSocket.OPEN) {
			return;
		}
		if (!options.alreadyShown) {
			this.draft = '';
			this.messages.push({
				id: crypto.randomUUID(),
				at: nowIso(),
				role: 'customer',
				text,
				streaming: false
			});
		}
		this.error = '';
		this.#beginAgentWait();
		if (this.currentId) {
			this.#upsertHistory({
				id: this.currentId,
				preview: text,
				updatedAt: new Date().toISOString(),
				status: this.transferred ? 'waiting' : 'ai'
			});
		}
		this.#ws.send(JSON.stringify({ type: 'chat.send', text, voice: this.voiceMode }));
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

	async #startCallMic(): Promise<void> {
		await this.#openMic({ echoCancellation: true, noiseSuppression: true });
		if (!this.recording) {
			this.voiceMode = false;
			this.callState = 'idle';
		}
	}

	async #openMic(constraints: {
		echoCancellation: boolean;
		noiseSuppression: boolean;
	}): Promise<void> {
		if (
			typeof navigator === 'undefined' ||
			!navigator.mediaDevices?.getUserMedia ||
			typeof MediaRecorder === 'undefined'
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
			if (!(this.voiceMode && this.callState === 'playing')) {
				this.#analyser.getFloatTimeDomainData(time as Float32Array<ArrayBuffer>);
				const advanced = advanceTape(this.#tapeState, time, now, this.#tapeLast);
				this.#tapeState = advanced.state;
				this.levels = advanced.levels;
				this.waveShift = advanced.waveShift;
				this.waveTick += 1;
				this.#tapeLast = advanced.tapeLast;
				this.#tickVadEnergy(advanced.energy);
			} else {
				this.#tapeLast = now;
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

	#tickVadEnergy(energy: number): void {
		if (!this.voiceMode || this.closed || this.transferred) {
			return;
		}
		const result = tickVad({
			energy,
			now: performance.now(),
			paused: this.#pauseVad,
			flushing: this.#flushing,
			state: this.#vadState
		});
		this.#vadState = result.state;
		if (energy >= VAD_THRESHOLD && !this.#pauseVad && !this.#flushing) {
			this.callState = 'speaking';
		}
		if (result.flush) {
			void this.#flushCallUtterance();
		}
	}

	async #flushCallUtterance(): Promise<void> {
		if (!this.voiceMode || this.#flushing) {
			return;
		}
		this.#flushing = true;
		this.#pauseVad = true;
		this.callState = 'thinking';
		try {
			const blob = await this.#stopRecording(false, true);
			if (!this.voiceMode) {
				return;
			}
			if (this.#mediaStream) {
				this.#attachRecorder(this.#mediaStream);
			}
			this.#flushing = false;
			const sent = await this.#ingestSpokenBlob(blob, { revealPause: false });
			if (!this.voiceMode) {
				return;
			}
			if (!sent) {
				this.#maybeResumeCall();
			}
		} finally {
			this.#flushing = false;
		}
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
			this.#pauseVad = true;
			this.callState = 'thinking';
			this.#ttsBuffer = '';
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
		if (event.type === 'chat.ready') {
			this.#applyThread(event.thread);
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
			}
			this.busy = false;
			if (
				event.transferred ||
				isTransferredStatus(event.thread.status) ||
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
			this.error = event.message;
			this.#dropEmptyStream();
			this.busy = false;
			this.#maybeResumeCall();
			return;
		}
		if (event.type === 'thread.message' && event.message.role === 'operator') {
			this.#upsertMessage(event.message);
			return;
		}
		if (event.type === 'thread.updated') {
			this.#applyStatus(event.thread.status);
			const existing = this.history.find((item) => item.id === event.thread.id);
			if (existing) {
				this.#upsertHistory({ ...existing, status: event.thread.status });
			}
			if (this.closed) {
				this.hangup();
				this.#resetComposer();
				return;
			}
			if (this.transferred) {
				this.#requestHangupAfterSpeech();
				this.#maybeResumeCall();
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
			this.status = 'ai';
			this.busy = false;
			this.#streamingId = null;
			this.#clearTurnTimer();
			return;
		}
		this.#rememberThread(thread);
		if ((this.transferred || this.closed) && this.voiceMode) {
			this.hangup();
		}
		if (thread.messages.length === 0) {
			return;
		}
		this.messages = threadToMessages(thread.messages);
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
				status: 'ai'
			});
		}
	}

	#rememberThread(thread: Pick<SupportThread, 'id' | 'preview' | 'updatedAt' | 'status'>): void {
		this.currentId = thread.id;
		persistCurrentId(this.config.group, thread.id);
		this.#applyStatus(thread.status);
		this.#upsertHistory({
			id: thread.id,
			preview: thread.preview || lastMessagePreview(this.messages) || m.conversation_new(),
			updatedAt: thread.updatedAt,
			status: thread.status
		});
	}

	#applyStatus(status: ThreadStatus): void {
		this.status = status;
		this.transferred = isTransferredStatus(status);
		if ((this.closed || this.transferred) && this.voiceMode) {
			this.hangup();
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
		if (this.voiceMode) {
			this.#ttsBuffer += text;
			this.#flushSpeech(false);
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
				if (this.voiceMode) {
					this.#ttsBuffer += text;
				}
			}
			if (this.voiceMode) {
				this.#flushSpeech(true);
			}
			return;
		}
		const current = this.messages.find((message) => message.id === this.#streamingId);
		if (current) {
			const previous = current.text;
			if (!current.text) {
				current.text = text;
			} else if (text && text.length > current.text.length && text.startsWith(current.text)) {
				current.text = text;
			}
			current.streaming = false;
			if (id) {
				current.id = id;
			}
			if (this.voiceMode) {
				if (current.text.startsWith(previous)) {
					this.#ttsBuffer += current.text.slice(previous.length);
				}
				this.#flushSpeech(true);
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
		this.#ttsBuffer = '';
	}

	#flushSpeech(force: boolean): void {
		if (!this.voiceMode) {
			this.#ttsBuffer = '';
			return;
		}
		const { spoken, rest } = splitSpeakable(this.#ttsBuffer, force);
		this.#ttsBuffer = rest;
		for (const sentence of spoken) {
			this.#enqueueSpeech(sentence);
		}
	}

	#enqueueSpeech(text: string): void {
		const cleaned = text.replace(/\s+/g, ' ').trim();
		if (!cleaned || !this.voiceMode) {
			return;
		}
		this.#ttsQueue.push(cleaned);
		void this.#drainSpeech();
	}

	async #drainSpeech(): Promise<void> {
		if (this.#ttsPlaying) {
			return;
		}
		this.#ttsPlaying = true;
		const seq = this.#ttsSeq;
		try {
			while (this.#ttsQueue.length && seq === this.#ttsSeq) {
				const text = this.#ttsQueue.shift();
				if (!text) {
					continue;
				}
				this.#pauseVad = true;
				this.callState = 'playing';
				try {
					await this.#playSpeech(text, seq);
					if (seq === this.#ttsSeq) {
						this.error = '';
					}
				} catch (error) {
					if (seq !== this.#ttsSeq || isAbortError(error)) {
						return;
					}
					this.error = m.error_voice_playback();
				}
			}
		} finally {
			if (seq === this.#ttsSeq) {
				this.#ttsPlaying = false;
				this.#maybeResumeCall();
			}
		}
	}

	async #playSpeech(text: string, seq: number): Promise<void> {
		const controller = new AbortController();
		this.#ttsAbort = controller;
		const response = await fetch(ttsUrl(this.config.apiUrl), {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'audio/mpeg'
			},
			body: JSON.stringify({
				text,
				company: this.config.group,
				context: 'thread'
			}),
			signal: controller.signal
		});
		if (seq !== this.#ttsSeq) {
			return;
		}
		if (!response.ok) {
			throw new Error('tts');
		}
		const data = await response.arrayBuffer();
		if (seq !== this.#ttsSeq) {
			return;
		}
		if (data.byteLength < 32) {
			throw new Error('tts');
		}
		await this.#playDecoded(data, seq);
	}

	async #playDecoded(data: ArrayBuffer, seq: number): Promise<void> {
		this.#unlockPlayback();
		const context = this.#playbackContext;
		if (!context) {
			throw new Error('play');
		}
		if (context.state === 'suspended') {
			await context.resume();
		}
		if (seq !== this.#ttsSeq) {
			return;
		}
		const buffer = await context.decodeAudioData(data.slice(0));
		if (seq !== this.#ttsSeq) {
			return;
		}
		await new Promise<void>((resolve, reject) => {
			const source = context.createBufferSource();
			this.#ttsSource = source;
			source.buffer = buffer;
			this.#startPlaybackMeter(context, source);
			let settled = false;
			const finish = (error?: Error): void => {
				if (settled) {
					return;
				}
				settled = true;
				source.onended = null;
				this.#stopPlaybackMeter();
				if (this.#ttsSource === source) {
					this.#ttsSource = null;
				}
				this.#playbackDone = null;
				if (error) {
					reject(error);
					return;
				}
				resolve();
			};
			this.#playbackDone = () => {
				try {
					source.stop();
				} catch {
					// already stopped
				}
				finish();
			};
			source.onended = () => finish();
			try {
				source.start();
			} catch (error) {
				finish(error instanceof Error ? error : new Error('play'));
			}
		});
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

	#startPlaybackMeter(context: AudioContext, source: AudioBufferSourceNode): void {
		this.#stopPlaybackMeter();
		const analyser = context.createAnalyser();
		analyser.fftSize = 256;
		analyser.smoothingTimeConstant = 0.45;
		source.connect(analyser);
		analyser.connect(context.destination);
		this.#playbackAnalyser = analyser;
		const tick = (): void => {
			if (!this.#playbackAnalyser) {
				return;
			}
			const data = new Float32Array(this.#playbackAnalyser.fftSize);
			this.#playbackAnalyser.getFloatTimeDomainData(data as Float32Array<ArrayBuffer>);
			const { peak } = sampleEnergy(data);
			const level = Math.min(1, Math.max(IDLE_LEVEL, (peak * 6) ** 0.7));
			this.levels = Array.from({ length: WAVEFORM_BARS }, () => level);
			this.#playbackRaf = requestAnimationFrame(tick);
		};
		this.#playbackRaf = requestAnimationFrame(tick);
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

	#stopPlayback(): void {
		this.#playbackDone?.();
		this.#playbackDone = null;
		this.#stopPlaybackMeter();
		if (!this.#ttsSource) {
			return;
		}
		try {
			this.#ttsSource.stop();
		} catch {
			// already stopped
		}
		this.#ttsSource = null;
	}

	#requestHangupAfterSpeech(): void {
		if (!this.voiceMode) {
			return;
		}
		this.#hangupAfterSpeech = true;
		this.#pauseVad = true;
	}

	#maybeResumeCall(): void {
		if (!this.voiceMode) {
			return;
		}
		if (this.#ttsPlaying || this.#ttsQueue.length > 0) {
			return;
		}
		if (this.#hangupAfterSpeech || this.transferred) {
			this.hangup();
			return;
		}
		if (this.busy || this.transcribing || this.#flushing) {
			return;
		}
		this.#pauseVad = false;
		this.callState = 'listening';
		this.#vadState = createVadState();
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
			streaming: false
		});
	}
}

function isAbortError(error: unknown): boolean {
	return error instanceof DOMException
		? error.name === 'AbortError'
		: error instanceof Error && error.name === 'AbortError';
}

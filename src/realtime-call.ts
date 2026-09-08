export const OPENAI_REALTIME_CALLS_URL = 'https://api.openai.com/v1/realtime/calls';

export type RealtimeFunctionCall = {
	callId: string;
	name: string;
	arguments: string;
};

export type RealtimeTranscript = {
	role: 'customer' | 'agent';
	text: string;
	done: boolean;
};

export type RealtimeActivity = 'agent-start' | 'agent-end' | 'user-start' | 'user-end' | 'thinking';

export type RealtimeCallHandlers = {
	onFunctionCall: (call: RealtimeFunctionCall) => Promise<string>;
	onTranscript: (transcript: RealtimeTranscript) => void;
	onRemoteStream: (stream: MediaStream) => void;
	onActivity?: (activity: RealtimeActivity) => void;
	onError: (message: string) => void;
};

export type RealtimeCall = {
	disconnect: () => void;
};

type RealtimeEvent = {
	type?: unknown;
	name?: unknown;
	call_id?: unknown;
	arguments?: unknown;
	transcript?: unknown;
	delta?: unknown;
	error?: { message?: unknown };
	response?: {
		output?: Array<{
			type?: unknown;
			call_id?: unknown;
			name?: unknown;
			arguments?: unknown;
		}>;
	};
};

export function functionCallsFromEvent(event: RealtimeEvent): RealtimeFunctionCall[] {
	if (event.type === 'response.function_call_arguments.done') {
		const callId = typeof event.call_id === 'string' ? event.call_id : '';
		const name = typeof event.name === 'string' ? event.name : '';
		if (!callId || !name) {
			return [];
		}
		return [
			{
				callId,
				name,
				arguments: typeof event.arguments === 'string' ? event.arguments : '{}'
			}
		];
	}
	if (event.type !== 'response.done' || !Array.isArray(event.response?.output)) {
		return [];
	}
	return event.response.output.flatMap((item) => {
		if (item.type !== 'function_call') {
			return [];
		}
		const callId = typeof item.call_id === 'string' ? item.call_id : '';
		const name = typeof item.name === 'string' ? item.name : '';
		if (!callId || !name) {
			return [];
		}
		return [
			{
				callId,
				name,
				arguments: typeof item.arguments === 'string' ? item.arguments : '{}'
			}
		];
	});
}

export function transcriptFromEvent(event: RealtimeEvent): RealtimeTranscript | null {
	if (
		event.type === 'conversation.item.input_audio_transcription.completed' ||
		event.type === 'conversation.item.input_audio_transcription.delta'
	) {
		const text =
			typeof event.transcript === 'string'
				? event.transcript
				: typeof event.delta === 'string'
					? event.delta
					: '';
		if (!text) {
			return null;
		}
		return {
			role: 'customer',
			text,
			done: event.type === 'conversation.item.input_audio_transcription.completed'
		};
	}
	if (
		event.type === 'response.output_audio_transcript.delta' ||
		event.type === 'response.audio_transcript.delta'
	) {
		const text = typeof event.delta === 'string' ? event.delta : '';
		if (!text) {
			return null;
		}
		return { role: 'agent', text, done: false };
	}
	if (
		event.type === 'response.output_audio_transcript.done' ||
		event.type === 'response.audio_transcript.done'
	) {
		const text = typeof event.transcript === 'string' ? event.transcript : '';
		return { role: 'agent', text, done: true };
	}
	return null;
}

function responseHasFunctionCall(event: RealtimeEvent): boolean {
	const output = event.response?.output;
	if (!Array.isArray(output)) {
		return false;
	}
	return output.some((item) => item.type === 'function_call');
}

export function activityFromEvent(event: RealtimeEvent): RealtimeActivity | null {
	const type = typeof event.type === 'string' ? event.type : '';
	if (
		type === 'output_audio_buffer.started' ||
		type === 'response.output_audio.delta' ||
		type === 'response.audio.delta'
	) {
		return 'agent-start';
	}
	if (type === 'output_audio_buffer.stopped' || type === 'output_audio_buffer.cleared') {
		return 'agent-end';
	}
	if (type === 'response.function_call_arguments.done') {
		return 'thinking';
	}
	if (type === 'response.done') {
		if (responseHasFunctionCall(event)) {
			return 'thinking';
		}
		return 'agent-end';
	}
	if (type === 'input_audio_buffer.speech_started') {
		return 'user-start';
	}
	if (type === 'input_audio_buffer.speech_stopped') {
		return 'user-end';
	}
	return null;
}

export async function connectRealtimeCall(
	clientSecret: string,
	mic: MediaStream,
	handlers: RealtimeCallHandlers
): Promise<RealtimeCall> {
	const pc = new RTCPeerConnection();
	const remoteAudio = document.createElement('audio');
	remoteAudio.autoplay = true;
	const seenCalls = new Set<string>();
	let pendingCreates = 0;
	let waitingForCreate = false;
	let closed = false;

	const send = (payload: unknown): void => {
		if (dc.readyState === 'open') {
			dc.send(JSON.stringify(payload));
		}
	};

	const finishFunctionBatch = (): void => {
		if (closed || pendingCreates > 0 || !waitingForCreate) {
			return;
		}
		waitingForCreate = false;
		send({ type: 'response.create' });
	};

	const handleFunctionCalls = (calls: RealtimeFunctionCall[]): void => {
		for (const call of calls) {
			if (seenCalls.has(call.callId)) {
				continue;
			}
			seenCalls.add(call.callId);
			pendingCreates += 1;
			void (async () => {
				let output = '';
				try {
					output = await handlers.onFunctionCall(call);
				} catch (error) {
					output = JSON.stringify({
						error: error instanceof Error ? error.message : String(error)
					});
				}
				if (closed) {
					return;
				}
				send({
					type: 'conversation.item.create',
					item: {
						type: 'function_call_output',
						call_id: call.callId,
						output
					}
				});
				pendingCreates -= 1;
				finishFunctionBatch();
			})();
		}
	};

	pc.ontrack = (event) => {
		const stream = event.streams[0] ?? new MediaStream([event.track]);
		remoteAudio.srcObject = stream;
		handlers.onRemoteStream(stream);
	};

	for (const track of mic.getAudioTracks()) {
		pc.addTrack(track, mic);
	}

	const dc = pc.createDataChannel('oai-events');
	dc.addEventListener('message', (event) => {
		let parsed: RealtimeEvent;
		try {
			parsed = JSON.parse(String(event.data)) as RealtimeEvent;
		} catch {
			return;
		}
		if (parsed.type === 'error') {
			const message =
				typeof parsed.error?.message === 'string' ? parsed.error.message : 'Realtime call failed';
			handlers.onError(message);
			return;
		}
		const activity = activityFromEvent(parsed);
		if (activity) {
			handlers.onActivity?.(activity);
		}
		const transcript = transcriptFromEvent(parsed);
		if (transcript) {
			handlers.onTranscript(transcript);
		}
		const calls = functionCallsFromEvent(parsed);
		if (calls.length > 0) {
			handleFunctionCalls(calls);
		}
		if (parsed.type === 'response.done' && calls.length > 0) {
			waitingForCreate = true;
			finishFunctionBatch();
		}
	});

	const offer = await pc.createOffer();
	await pc.setLocalDescription(offer);
	await waitForIce(pc);
	const sdp = pc.localDescription?.sdp ?? offer.sdp;
	if (!sdp) {
		pc.close();
		throw new Error('WebRTC offer was empty');
	}
	const sdpResponse = await fetch(OPENAI_REALTIME_CALLS_URL, {
		method: 'POST',
		body: sdp,
		headers: {
			Authorization: `Bearer ${clientSecret}`,
			'Content-Type': 'application/sdp'
		}
	});
	if (!sdpResponse.ok) {
		pc.close();
		throw new Error('Could not start Realtime call');
	}
	await pc.setRemoteDescription({
		type: 'answer',
		sdp: await sdpResponse.text()
	});

	return {
		disconnect: () => {
			closed = true;
			try {
				dc.close();
			} catch {
				// already closed
			}
			pc.close();
			remoteAudio.pause();
			remoteAudio.srcObject = null;
			remoteAudio.remove();
		}
	};
}

function waitForIce(pc: RTCPeerConnection): Promise<void> {
	if (pc.iceGatheringState === 'complete') {
		return Promise.resolve();
	}
	return new Promise((resolve) => {
		const timer = setTimeout(() => {
			pc.removeEventListener('icegatheringstatechange', onChange);
			resolve();
		}, 2000);
		const onChange = (): void => {
			if (pc.iceGatheringState !== 'complete') {
				return;
			}
			clearTimeout(timer);
			pc.removeEventListener('icegatheringstatechange', onChange);
			resolve();
		};
		pc.addEventListener('icegatheringstatechange', onChange);
	});
}

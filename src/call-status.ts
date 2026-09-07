import * as m from './paraglide/messages.js';

export type CallUiState = {
	connected: boolean;
	closed: boolean;
	transferred: boolean;
	voiceMode: boolean;
	recording: boolean;
	transcribing: boolean;
	draft: string;
	pendingCount: number;
	callState: 'idle' | 'listening' | 'speaking' | 'thinking' | 'playing';
};

export function canSend(state: CallUiState): boolean {
	return (
		state.connected &&
		!state.closed &&
		!state.transcribing &&
		!state.voiceMode &&
		(Boolean(state.draft.trim()) || state.recording || state.pendingCount > 0)
	);
}

export function canStartCall(state: CallUiState): boolean {
	return state.connected && !state.closed && !state.transferred && !state.transcribing;
}

export function orbitTone(state: CallUiState): 'idle' | 'cold' | 'warm' {
	if (!state.voiceMode) {
		return 'idle';
	}
	if (state.callState === 'playing' || state.callState === 'thinking') {
		return 'warm';
	}
	return 'cold';
}

export function callStatusLabel(state: CallUiState): string {
	if (state.transcribing) {
		return m.call_transcribing();
	}
	if (state.callState === 'speaking') {
		return m.call_hearing();
	}
	if (state.callState === 'thinking') {
		return m.call_thinking();
	}
	if (state.callState === 'playing') {
		return m.call_playing();
	}
	return m.call_listening();
}

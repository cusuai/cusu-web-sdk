import * as m from './paraglide/messages.js';

export type CallUiState = {
	connected: boolean;
	closed: boolean;
	transferred: boolean;
	voiceRealtimeEnabled: boolean;
	voiceMode: boolean;
	recording: boolean;
	transcribing: boolean;
	draft: string;
	pendingCount: number;
	callState: 'idle' | 'listening' | 'speaking' | 'thinking' | 'playing';
	agentActivity?: string | null;
};

export function agentActivityLabel(activity: string | null | undefined): string | null {
	if (!activity) {
		return null;
	}
	switch (activity) {
		case 'search_pages':
			return m.activity_search_pages();
		case 'browse_page':
			return m.activity_browse_page();
		case 'read_page':
			return m.activity_read_page();
		case 'attach_link':
			return m.activity_attach_link();
		case 'call_api':
			return m.activity_call_api();
		default:
			return m.activity_working();
	}
}

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
	return (
		state.voiceRealtimeEnabled &&
		state.connected &&
		!state.closed &&
		!state.transferred &&
		!state.transcribing
	);
}

export function orbitTone(state: CallUiState): 'idle' | 'cold' | 'warm' {
	if (!state.voiceMode) {
		return 'idle';
	}
	if (state.callState === 'playing' || state.callState === 'thinking' || state.agentActivity) {
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
	const activity = agentActivityLabel(state.agentActivity);
	if (activity) {
		return activity;
	}
	if (state.callState === 'thinking') {
		return m.call_thinking();
	}
	if (state.callState === 'playing') {
		return m.call_playing();
	}
	return m.call_listening();
}

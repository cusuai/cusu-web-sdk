import { describe, expect, it } from 'bun:test';
import { type CallUiState, canSend, canStartCall, orbitTone } from './call-status';

const base = (): CallUiState => ({
	connected: true,
	closed: false,
	transferred: false,
	voiceRealtimeEnabled: true,
	voiceMode: false,
	recording: false,
	transcribing: false,
	draft: '',
	pendingCount: 0,
	callState: 'idle'
});

describe('canSend', () => {
	it.each([
		['draft text when connected', { draft: 'hi' }, true],
		['recording without draft', { recording: true }, true],
		['empty draft and not recording', {}, false],
		['pending attachments', { pendingCount: 1 }, true],
		['whitespace-only draft', { draft: '   ' }, false],
		['disconnected', { connected: false, draft: 'hi' }, false],
		['closed', { closed: true, draft: 'hi' }, false],
		['transcribing', { transcribing: true, draft: 'hi' }, false],
		['voice mode', { voiceMode: true, draft: 'hi' }, false]
	] as const)('%s', (_label, overrides, expected) => {
		expect(canSend({ ...base(), ...overrides })).toBe(expected);
	});
});

describe('canStartCall', () => {
	it.each([
		['ready', {}, true],
		['disconnected', { connected: false }, false],
		['closed', { closed: true }, false],
		['transferred', { transferred: true }, false],
		['realtime voice disabled', { voiceRealtimeEnabled: false }, false],
		['transcribing', { transcribing: true }, false]
	] as const)('%s', (_label, overrides, expected) => {
		expect(canStartCall({ ...base(), ...overrides })).toBe(expected);
	});
});

describe('orbitTone', () => {
	it.each([
		['idle when not in voice mode', { voiceMode: false, callState: 'playing' as const }, 'idle'],
		['warm when playing', { voiceMode: true, callState: 'playing' as const }, 'warm'],
		['warm when thinking', { voiceMode: true, callState: 'thinking' as const }, 'warm'],
		['cold when listening', { voiceMode: true, callState: 'listening' as const }, 'cold'],
		['cold when speaking', { voiceMode: true, callState: 'speaking' as const }, 'cold'],
		['cold when idle call state', { voiceMode: true, callState: 'idle' as const }, 'cold']
	] as const)('%s', (_label, overrides, expected) => {
		expect(orbitTone({ ...base(), ...overrides })).toBe(expected);
	});
});

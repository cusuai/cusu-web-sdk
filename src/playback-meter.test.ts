import { describe, expect, it } from 'bun:test';
import {
	advancePlaybackHold,
	PLAYBACK_HOLD_MS,
	playbackOrbitEnergy,
	smoothPlaybackLevel
} from './playback-meter';

describe('advancePlaybackHold', () => {
	it('starts speaking on a loud peak', () => {
		expect(advancePlaybackHold({ speaking: false, silentMs: 0 }, 0.08, 16)).toEqual({
			speaking: true,
			silentMs: 0
		});
	});

	it('keeps speaking through short pauses', () => {
		let state = { speaking: true, silentMs: 0 };
		state = advancePlaybackHold(state, 0.001, 200);
		expect(state.speaking).toBe(true);
		state = advancePlaybackHold(state, 0.001, 200);
		expect(state.speaking).toBe(true);
		expect(state.silentMs).toBe(400);
	});

	it('returns to silence after the hold window', () => {
		const state = advancePlaybackHold(
			{ speaking: true, silentMs: PLAYBACK_HOLD_MS - 10 },
			0.001,
			20
		);
		expect(state).toEqual({ speaking: false, silentMs: 0 });
	});
});

describe('smoothPlaybackLevel', () => {
	it('rises faster than it falls', () => {
		const up = smoothPlaybackLevel(0.2, 0.8);
		const down = smoothPlaybackLevel(0.8, 0.2);
		expect(up - 0.2).toBeGreaterThan(0.8 - down);
	});
});

describe('playbackOrbitEnergy', () => {
	it('stays in a narrow band so the orb does not strobe', () => {
		expect(playbackOrbitEnergy(0)).toBeCloseTo(0.22);
		expect(playbackOrbitEnergy(1)).toBeCloseTo(0.34);
		expect(playbackOrbitEnergy(0.4)).toBeLessThan(0.3);
	});
});

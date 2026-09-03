import { describe, expect, it } from 'bun:test';
import { createVadState, tickVad, VAD_SILENCE_MS, VAD_SPEECH_MS, VAD_THRESHOLD } from './vad';

const base = {
	paused: false,
	flushing: false,
	state: createVadState()
};

describe('tickVad', () => {
	it('ignores energy below threshold when no speech has started', () => {
		const result = tickVad({
			...base,
			energy: VAD_THRESHOLD - 0.001,
			now: 1000
		});
		expect(result.flush).toBe(false);
		expect(result.state).toEqual(createVadState());
	});

	it('arms speech on loud energy', () => {
		const result = tickVad({
			...base,
			energy: VAD_THRESHOLD,
			now: 500
		});
		expect(result.flush).toBe(false);
		expect(result.state).toEqual({
			speechStartedAt: 500,
			lastLoudAt: 500
		});
	});

	it('keeps speechStartedAt from the first loud frame', () => {
		const armed = tickVad({
			...base,
			energy: VAD_THRESHOLD,
			now: 100
		});
		const louder = tickVad({
			...base,
			state: armed.state,
			energy: VAD_THRESHOLD * 2,
			now: 250
		});
		expect(louder.state.speechStartedAt).toBe(100);
		expect(louder.state.lastLoudAt).toBe(250);
	});

	it('does not flush until spokenFor and silentFor thresholds are met', () => {
		const speechStart = 0;
		const lastLoud = VAD_SPEECH_MS - 1;
		const early = tickVad({
			...base,
			state: { speechStartedAt: speechStart, lastLoudAt: lastLoud },
			energy: 0,
			now: lastLoud + VAD_SILENCE_MS
		});
		expect(early.flush).toBe(false);

		const notSilentEnough = tickVad({
			...base,
			state: { speechStartedAt: speechStart, lastLoudAt: VAD_SPEECH_MS },
			energy: 0,
			now: VAD_SPEECH_MS + VAD_SILENCE_MS - 1
		});
		expect(notSilentEnough.flush).toBe(false);
	});

	it('flushes when spokenFor >= VAD_SPEECH_MS and silentFor >= VAD_SILENCE_MS', () => {
		const speechStart = 10;
		const lastLoud = speechStart + VAD_SPEECH_MS;
		const result = tickVad({
			...base,
			state: { speechStartedAt: speechStart, lastLoudAt: lastLoud },
			energy: 0,
			now: lastLoud + VAD_SILENCE_MS
		});
		expect(result.flush).toBe(true);
		expect(result.state).toEqual(createVadState());
	});

	it('returns unchanged state without flush when paused', () => {
		const state = { speechStartedAt: 1, lastLoudAt: 500 };
		const result = tickVad({
			energy: VAD_THRESHOLD,
			now: 2000,
			paused: true,
			flushing: false,
			state
		});
		expect(result).toEqual({ state, flush: false });
	});

	it('returns unchanged state without flush when flushing', () => {
		const state = { speechStartedAt: 1, lastLoudAt: 500 };
		const result = tickVad({
			energy: 0,
			now: 5000,
			paused: false,
			flushing: true,
			state
		});
		expect(result).toEqual({ state, flush: false });
	});
});

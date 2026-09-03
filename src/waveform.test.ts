import { describe, expect, it } from 'bun:test';
import {
	advanceTape,
	createTapeState,
	IDLE_LEVEL,
	levelOf,
	sampleEnergy,
	TAPE_COLUMN_MS,
	WAVEFORM_BARS
} from './waveform';

describe('sampleEnergy', () => {
	it('returns zero peak and energy for empty samples', () => {
		expect(sampleEnergy(new Float32Array())).toEqual({ peak: 0, energy: 0 });
	});

	it('computes peak and mean absolute energy', () => {
		const result = sampleEnergy(new Float32Array([0.2, -0.5, 0.1]));
		expect(result.peak).toBeCloseTo(0.5, 5);
		expect(result.energy).toBeCloseTo((0.2 + 0.5 + 0.1) / 3, 5);
	});
});

describe('levelOf', () => {
	it('keeps silence near IDLE_LEVEL', () => {
		const state = createTapeState();
		const quiet = levelOf(state, 0);
		expect(quiet.level).toBeCloseTo(IDLE_LEVEL, 5);
		expect(quiet.level).toBeGreaterThanOrEqual(IDLE_LEVEL);
	});

	it('rises for loud speech peaks', () => {
		let state = createTapeState();
		let level = IDLE_LEVEL;
		for (let i = 0; i < 8; i += 1) {
			const next = levelOf(state, 0.8);
			state = next.state;
			level = next.level;
		}
		expect(level).toBeGreaterThan(IDLE_LEVEL + 0.2);
		expect(level).toBeLessThanOrEqual(1);
	});
});

describe('advanceTape', () => {
	it('advances a column every TAPE_COLUMN_MS', () => {
		const state = createTapeState();
		const samples = new Float32Array(32).fill(0.5);
		const first = advanceTape(state, samples, TAPE_COLUMN_MS, 0);
		expect(first.state.tape.length).toBe(WAVEFORM_BARS);
		expect(first.tapeLast).toBe(TAPE_COLUMN_MS);

		const second = advanceTape(first.state, samples, TAPE_COLUMN_MS * 2, first.tapeLast);
		expect(second.state.clock).toBeLessThan(TAPE_COLUMN_MS);
		expect(second.levels.length).toBe(WAVEFORM_BARS + 1);
		expect(second.levels).toEqual(second.state.tape.concat(second.state.column));
	});

	it('caps tape length at WAVEFORM_BARS', () => {
		let state = createTapeState();
		let tapeLast = 0;
		const samples = new Float32Array(16).fill(0.4);
		const steps = WAVEFORM_BARS + 40;
		for (let i = 1; i <= steps; i += 1) {
			const now = i * TAPE_COLUMN_MS;
			const next = advanceTape(state, samples, now, tapeLast);
			state = next.state;
			tapeLast = next.tapeLast;
		}
		expect(state.tape.length).toBe(WAVEFORM_BARS);
		expect(advanceTape(state, samples, tapeLast + TAPE_COLUMN_MS, tapeLast).levels.length).toBe(
			WAVEFORM_BARS + 1
		);
	});

	it('returns levels as tape plus current column', () => {
		const state = createTapeState();
		const result = advanceTape(state, new Float32Array([0.3, -0.2]), TAPE_COLUMN_MS, 0);
		expect(result.levels).toEqual([...result.state.tape, result.state.column]);
	});
});

export const WAVEFORM_BARS = 256;
export const IDLE_LEVEL = 0.06;
export const TAPE_COLUMN_MS = 30;
export const NOISE_MIN = 0.0015;
export const SPAN_MIN = 0.01;
export const PEAK_RISE = 1.15;
export const PEAK_DECAY = 0.985;
export const NOISE_FALL = 0.3;
export const NOISE_RISE = 0.002;

export type TapeState = {
	tape: number[];
	clock: number;
	column: number;
	peakRef: number;
	noise: number;
};

export function sampleEnergy(samples: Float32Array): { peak: number; energy: number } {
	let peak = 0;
	let energy = 0;
	for (let index = 0; index < samples.length; index += 1) {
		const abs = Math.abs(samples[index] ?? 0);
		if (abs > peak) {
			peak = abs;
		}
		energy += abs;
	}
	return { peak, energy: samples.length ? energy / samples.length : 0 };
}

export function idleTape(): number[] {
	return Array.from({ length: WAVEFORM_BARS }, () => IDLE_LEVEL);
}

export function createTapeState(): TapeState {
	return {
		tape: idleTape(),
		clock: 0,
		column: IDLE_LEVEL,
		peakRef: NOISE_MIN,
		noise: NOISE_MIN
	};
}

export function levelOf(state: TapeState, peak: number): { state: TapeState; level: number } {
	let noise = state.noise;
	let peakRef = state.peakRef;
	const settle = peak < noise ? NOISE_FALL : NOISE_RISE;
	noise += (peak - noise) * settle;
	peakRef =
		peak > peakRef
			? Math.min(peak, Math.max(peakRef * PEAK_RISE, NOISE_MIN))
			: Math.max(peak, peakRef * PEAK_DECAY, NOISE_MIN);
	noise = Math.min(Math.max(noise, NOISE_MIN), peakRef * 0.4);
	const gate = noise * 1.8 + 0.0008;
	const span = Math.max(SPAN_MIN, peakRef - gate);
	const loud = Math.max(0, peak - gate) / span;
	const level = Math.min(1, Math.max(IDLE_LEVEL, loud ** 0.7));
	return {
		state: {
			tape: state.tape,
			clock: state.clock,
			column: state.column,
			peakRef,
			noise
		},
		level
	};
}

export function advanceTape(
	state: TapeState,
	samples: Float32Array,
	now: number,
	tapeLast: number
): { state: TapeState; levels: number[]; waveShift: number; energy: number; tapeLast: number } {
	const { peak, energy } = sampleEnergy(samples);
	const leveled = levelOf(state, peak);
	let tape = leveled.state.tape.slice();
	let clock = leveled.state.clock;
	let column = Math.max(leveled.state.column, leveled.level);
	const level = leveled.level;
	const dt = tapeLast === 0 ? TAPE_COLUMN_MS : Math.min(120, now - tapeLast);
	clock += dt;
	while (clock >= TAPE_COLUMN_MS) {
		clock -= TAPE_COLUMN_MS;
		tape.push(column);
		column = level;
		if (tape.length > WAVEFORM_BARS) {
			tape = tape.slice(tape.length - WAVEFORM_BARS);
		}
	}
	return {
		state: {
			tape,
			clock,
			column,
			peakRef: leveled.state.peakRef,
			noise: leveled.state.noise
		},
		levels: tape.concat(column),
		waveShift: clock / TAPE_COLUMN_MS,
		energy,
		tapeLast: now
	};
}

export const VAD_SPEECH_MS = 400;
export const VAD_SILENCE_MS = 1000;
export const VAD_THRESHOLD = 0.015;

export type VadState = {
	speechStartedAt: number;
	lastLoudAt: number;
};

export type VadInput = {
	energy: number;
	now: number;
	paused: boolean;
	flushing: boolean;
	state: VadState;
};

export type VadResult = {
	state: VadState;
	flush: boolean;
};

export function createVadState(): VadState {
	return { speechStartedAt: 0, lastLoudAt: 0 };
}

export function tickVad(input: VadInput): VadResult {
	const { energy, now, paused, flushing, state } = input;
	if (paused || flushing) {
		return { state, flush: false };
	}
	if (energy >= VAD_THRESHOLD) {
		return {
			state: {
				speechStartedAt: state.speechStartedAt === 0 ? now : state.speechStartedAt,
				lastLoudAt: now
			},
			flush: false
		};
	}
	if (state.speechStartedAt === 0) {
		return { state, flush: false };
	}
	const spokenFor = state.lastLoudAt - state.speechStartedAt;
	const silentFor = now - state.lastLoudAt;
	if (spokenFor >= VAD_SPEECH_MS && silentFor >= VAD_SILENCE_MS) {
		return {
			state: createVadState(),
			flush: true
		};
	}
	return { state, flush: false };
}

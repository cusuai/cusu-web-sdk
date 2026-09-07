export const PLAYBACK_HOLD_MS = 1800;
export const PLAYBACK_LOUD_PEAK = 0.028;

export type PlaybackHold = {
	speaking: boolean;
	silentMs: number;
};

export function advancePlaybackHold(
	state: PlaybackHold,
	peak: number,
	dtMs: number,
	holdMs = PLAYBACK_HOLD_MS
): PlaybackHold {
	const loud = peak >= PLAYBACK_LOUD_PEAK;
	if (loud) {
		return { speaking: true, silentMs: 0 };
	}
	const silentMs = state.speaking ? state.silentMs + Math.max(0, dtMs) : 0;
	if (state.speaking && silentMs < holdMs) {
		return { speaking: true, silentMs };
	}
	return { speaking: false, silentMs: 0 };
}

export function smoothPlaybackLevel(
	current: number,
	target: number,
	attack = 0.1,
	release = 0.04
): number {
	const rate = target > current ? attack : release;
	return current + (target - current) * rate;
}

export function playbackOrbitEnergy(level: number): number {
	return Math.min(0.34, 0.22 + Math.max(0, level) * 0.12);
}

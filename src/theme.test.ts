import { afterEach, describe, expect, it } from 'bun:test';
import { applyWidgetTheme, parseWidgetTheme } from './theme';

type MediaListener = (event: { matches: boolean }) => void;

function mockHost(): HTMLElement {
	const classes = new Set<string>();
	return {
		classList: {
			toggle(name: string, force?: boolean) {
				if (force === undefined) {
					if (classes.has(name)) {
						classes.delete(name);
						return false;
					}
					classes.add(name);
					return true;
				}
				if (force) {
					classes.add(name);
				} else {
					classes.delete(name);
				}
				return force;
			},
			remove(name: string) {
				classes.delete(name);
			},
			contains(name: string) {
				return classes.has(name);
			}
		}
	} as unknown as HTMLElement;
}

function installMatchMedia(opts: { matches: boolean; withAddEventListener?: boolean }): {
	setMatches: (matches: boolean) => void;
	listeners: MediaListener[];
} {
	const listeners: MediaListener[] = [];
	let matches = opts.matches;
	const media: MediaQueryList = {
		get matches() {
			return matches;
		},
		media: '(prefers-color-scheme: dark)',
		onchange: null,
		addEventListener: (_type: string, listener: EventListenerOrEventListenerObject) => {
			if (typeof listener === 'function') {
				listeners.push(listener as MediaListener);
			}
		},
		removeEventListener: (_type: string, listener: EventListenerOrEventListenerObject) => {
			const idx = listeners.indexOf(listener as MediaListener);
			if (idx >= 0) {
				listeners.splice(idx, 1);
			}
		},
		addListener: (listener: MediaListener) => {
			listeners.push(listener);
		},
		removeListener: (listener: MediaListener) => {
			const idx = listeners.indexOf(listener);
			if (idx >= 0) {
				listeners.splice(idx, 1);
			}
		},
		dispatchEvent: () => false
	} as MediaQueryList;

	if (opts.withAddEventListener === false) {
		// Force the legacy addListener path.
		(media as { addEventListener?: unknown }).addEventListener = undefined;
	}

	(globalThis as { window?: Window }).window = {
		matchMedia: () => media
	} as Window;

	return {
		setMatches: (next) => {
			matches = next;
			for (const listener of [...listeners]) {
				listener({ matches: next });
			}
		},
		listeners
	};
}

afterEach(() => {
	delete (globalThis as { window?: Window }).window;
});

describe('parseWidgetTheme', () => {
	it('accepts light, dark, and auto', () => {
		expect(parseWidgetTheme('light')).toBe('light');
		expect(parseWidgetTheme('dark')).toBe('dark');
		expect(parseWidgetTheme('auto')).toBe('auto');
	});

	it('defaults unknown values to auto', () => {
		expect(parseWidgetTheme(undefined)).toBe('auto');
		expect(parseWidgetTheme('neon')).toBe('auto');
	});
});

describe('applyWidgetTheme', () => {
	it('forces light without a dark class', () => {
		const host = mockHost();
		const dispose = applyWidgetTheme(host, 'light');
		expect(host.classList.contains('dark')).toBe(false);
		dispose();
		expect(host.classList.contains('dark')).toBe(false);
	});

	it('forces dark on the host', () => {
		const host = mockHost();
		const dispose = applyWidgetTheme(host, 'dark');
		expect(host.classList.contains('dark')).toBe(true);
		dispose();
		expect(host.classList.contains('dark')).toBe(false);
	});

	it('follows prefers-color-scheme in auto mode', () => {
		const { setMatches, listeners } = installMatchMedia({ matches: true });
		const host = mockHost();
		const dispose = applyWidgetTheme(host, 'auto');
		expect(host.classList.contains('dark')).toBe(true);
		expect(listeners.length).toBe(1);

		setMatches(false);
		expect(host.classList.contains('dark')).toBe(false);

		dispose();
		expect(listeners.length).toBe(0);
		expect(host.classList.contains('dark')).toBe(false);
	});

	it('uses legacy addListener when addEventListener is missing', () => {
		const { setMatches, listeners } = installMatchMedia({
			matches: false,
			withAddEventListener: false
		});
		const host = mockHost();
		const dispose = applyWidgetTheme(host, 'auto');
		expect(host.classList.contains('dark')).toBe(false);

		setMatches(true);
		expect(host.classList.contains('dark')).toBe(true);

		dispose();
		expect(listeners.length).toBe(0);
		expect(host.classList.contains('dark')).toBe(false);
	});

	it('skips media listeners when window is unavailable', () => {
		const host = mockHost();
		const dispose = applyWidgetTheme(host, 'auto');
		expect(host.classList.contains('dark')).toBe(false);
		dispose();
	});
});

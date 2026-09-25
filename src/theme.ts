export type WidgetTheme = 'light' | 'dark' | 'auto';

export function parseWidgetTheme(value: unknown): WidgetTheme {
	if (value === 'light' || value === 'dark' || value === 'auto') {
		return value;
	}
	return 'auto';
}

/**
 * Applies light/dark/auto on the widget shadow host. Returns a disposer for the media listener.
 */
export function applyWidgetTheme(host: HTMLElement, theme: WidgetTheme): () => void {
	const media =
		typeof window !== 'undefined' && typeof window.matchMedia === 'function'
			? window.matchMedia('(prefers-color-scheme: dark)')
			: null;

	const sync = () => {
		const dark = theme === 'dark' || (theme === 'auto' && media?.matches === true);
		host.classList.toggle('dark', dark);
	};

	sync();

	if (theme !== 'auto' || !media) {
		return () => {
			host.classList.remove('dark');
		};
	}

	const onChange = () => sync();
	if (typeof media.addEventListener === 'function') {
		media.addEventListener('change', onChange);
		return () => {
			media.removeEventListener('change', onChange);
			host.classList.remove('dark');
		};
	}
	media.addListener(onChange);
	return () => {
		media.removeListener(onChange);
		host.classList.remove('dark');
	};
}

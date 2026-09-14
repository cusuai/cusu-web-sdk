export type CusuConfig = {
	/** Stable group id (`grp_…`), not a human slug. */
	group: string;
	apiKey: string;
	/** Override API base URL. Defaults to https://api.cusuai.com. */
	apiUrl?: string;
	/** Fallback when boot does not return a group language the widget can render. */
	locale?:
		| 'en'
		| 'bg'
		| 'cs'
		| 'sk'
		| 'es'
		| 'de'
		| 'et'
		| 'fr'
		| 'pl'
		| 'hu'
		| 'it'
		| 'lt'
		| 'lv'
		| 'nl'
		| 'no'
		| 'pt'
		| 'da'
		| 'sl'
		| 'hr'
		| 'ro'
		| 'sv'
		| 'fi';
	/** Floating launcher button; default true. Panel still opens via Cusu.open(). */
	showLauncher?: boolean;
};

export const DEFAULT_API_URL = 'https://api.cusuai.com';

export function resolveApiUrl(apiUrl?: string): string {
	const trimmed = apiUrl?.trim() ?? '';
	return trimmed || DEFAULT_API_URL;
}

/** Runtime config after defaults are applied. */
export type ResolvedCusuConfig = CusuConfig & { apiUrl: string };

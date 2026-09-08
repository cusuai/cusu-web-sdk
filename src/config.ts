export type CusuConfig = {
	group: string;
	apiUrl: string;
	apiKey: string;
	/** Fallback when boot does not return a group language the widget can render. */
	locale?: 'en' | 'cs' | 'sk' | 'es' | 'de';
	/** Floating launcher button; default true. Panel still opens via Cusu.open(). */
	showLauncher?: boolean;
};

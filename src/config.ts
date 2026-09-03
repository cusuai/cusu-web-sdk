export type CusuConfig = {
	group: string;
	apiUrl: string;
	apiKey: string;
	locale?: 'en' | 'cs';
	/** Floating launcher button; default true. Panel still opens via Cusu.open(). */
	showLauncher?: boolean;
};

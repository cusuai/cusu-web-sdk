import { type Locale, toLocale } from './paraglide/runtime.js';

export type WidgetLocaleInput = {
	groupLanguage?: unknown;
	/** When `auto`, prefer page / override over the group language. */
	replyLocale?: string;
	override?:
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
		| 'sr'
		| 'mk'
		| 'ro'
		| 'sv'
		| 'fi';
	/** e.g. `document.documentElement.lang` */
	pageLanguage?: string;
};

function primaryLanguageTag(value: unknown): string | undefined {
	if (typeof value !== 'string') {
		return undefined;
	}
	const trimmed = value.trim();
	if (!trimmed) {
		return undefined;
	}
	return trimmed.split(/[-_]/)[0] || undefined;
}

export function resolveWidgetLocale(
	groupLanguageOrInput: unknown,
	override?: WidgetLocaleInput['override']
): Locale | undefined {
	if (
		groupLanguageOrInput &&
		typeof groupLanguageOrInput === 'object' &&
		('groupLanguage' in groupLanguageOrInput ||
			'replyLocale' in groupLanguageOrInput ||
			'override' in groupLanguageOrInput ||
			'pageLanguage' in groupLanguageOrInput)
	) {
		const input = groupLanguageOrInput as WidgetLocaleInput;
		const group = toLocale(primaryLanguageTag(input.groupLanguage) ?? input.groupLanguage);
		const page = toLocale(primaryLanguageTag(input.pageLanguage) ?? input.pageLanguage);
		const fallback = toLocale(input.override);
		if (input.replyLocale === 'auto') {
			return page ?? fallback ?? group;
		}
		return group ?? fallback;
	}
	return (
		toLocale(primaryLanguageTag(groupLanguageOrInput) ?? groupLanguageOrInput) ?? toLocale(override)
	);
}

export function detectPageLanguage(
	doc: { documentElement: { lang: string } } | null | undefined = typeof document !== 'undefined'
		? document
		: undefined
): string | undefined {
	return primaryLanguageTag(doc?.documentElement?.lang);
}

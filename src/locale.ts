import { type Locale, toLocale } from './paraglide/runtime.js';

export function resolveWidgetLocale(
	groupLanguage: unknown,
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
		| 'ro'
		| 'sv'
		| 'fi'
): Locale | undefined {
	return toLocale(groupLanguage) ?? toLocale(override);
}

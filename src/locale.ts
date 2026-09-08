import { type Locale, toLocale } from './paraglide/runtime.js';

export function resolveWidgetLocale(
	groupLanguage: unknown,
	override?: 'en' | 'cs' | 'sk' | 'es' | 'de' | 'fr' | 'pl' | 'hu' | 'it' | 'nl' | 'pt' | 'da' | 'sl' | 'hr' | 'ro' | 'sv' | 'fi'
): Locale | undefined {
	return toLocale(groupLanguage) ?? toLocale(override);
}

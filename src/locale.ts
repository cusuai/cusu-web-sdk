import { type Locale, toLocale } from './paraglide/runtime.js';

export function resolveWidgetLocale(
	groupLanguage: unknown,
	override?: 'en' | 'cs' | 'sk'
): Locale | undefined {
	return toLocale(groupLanguage) ?? toLocale(override);
}

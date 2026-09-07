import { toLocale, type Locale } from './paraglide/runtime.js';

export function resolveWidgetLocale(
	groupLanguage: unknown,
	override?: 'en' | 'cs'
): Locale | undefined {
	return toLocale(groupLanguage) ?? toLocale(override);
}

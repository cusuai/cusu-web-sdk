import { describe, expect, it } from 'bun:test';
import { resolveWidgetLocale } from './locale';

describe('resolveWidgetLocale', () => {
	it('prefers the group language from boot', () => {
		expect(resolveWidgetLocale('cs', 'en')).toBe('cs');
		expect(resolveWidgetLocale('en', 'cs')).toBe('en');
		expect(resolveWidgetLocale('sk', 'en')).toBe('sk');
		expect(resolveWidgetLocale('es', 'en')).toBe('es');
		expect(resolveWidgetLocale('de', 'en')).toBe('de');
	});

	it('falls back to initialize locale when boot has no widget language', () => {
		expect(resolveWidgetLocale(undefined, 'cs')).toBe('cs');
		expect(resolveWidgetLocale('', 'en')).toBe('en');
		expect(resolveWidgetLocale(undefined, 'sk')).toBe('sk');
		expect(resolveWidgetLocale(undefined, 'es')).toBe('es');
		expect(resolveWidgetLocale(undefined, 'de')).toBe('de');
	});
});

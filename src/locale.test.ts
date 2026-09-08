import { describe, expect, it } from 'bun:test';
import { resolveWidgetLocale } from './locale';

describe('resolveWidgetLocale', () => {
	it('prefers the group language from boot', () => {
		expect(resolveWidgetLocale('cs', 'en')).toBe('cs');
		expect(resolveWidgetLocale('en', 'cs')).toBe('en');
		expect(resolveWidgetLocale('sk', 'en')).toBe('sk');
		expect(resolveWidgetLocale('es', 'en')).toBe('es');
		expect(resolveWidgetLocale('de', 'en')).toBe('de');
		expect(resolveWidgetLocale('fr', 'en')).toBe('fr');
		expect(resolveWidgetLocale('pl', 'en')).toBe('pl');
		expect(resolveWidgetLocale('hu', 'en')).toBe('hu');
		expect(resolveWidgetLocale('it', 'en')).toBe('it');
		expect(resolveWidgetLocale('nl', 'en')).toBe('nl');
		expect(resolveWidgetLocale('pt', 'en')).toBe('pt');
		expect(resolveWidgetLocale('da', 'en')).toBe('da');
		expect(resolveWidgetLocale('sl', 'en')).toBe('sl');
		expect(resolveWidgetLocale('hr', 'en')).toBe('hr');
		expect(resolveWidgetLocale('ro', 'en')).toBe('ro');
		expect(resolveWidgetLocale('sv', 'en')).toBe('sv');
		expect(resolveWidgetLocale('fi', 'en')).toBe('fi');
	});

	it('falls back to initialize locale when boot has no widget language', () => {
		expect(resolveWidgetLocale(undefined, 'cs')).toBe('cs');
		expect(resolveWidgetLocale('', 'en')).toBe('en');
		expect(resolveWidgetLocale(undefined, 'sk')).toBe('sk');
		expect(resolveWidgetLocale(undefined, 'es')).toBe('es');
		expect(resolveWidgetLocale(undefined, 'de')).toBe('de');
		expect(resolveWidgetLocale(undefined, 'fr')).toBe('fr');
		expect(resolveWidgetLocale(undefined, 'pl')).toBe('pl');
		expect(resolveWidgetLocale(undefined, 'hu')).toBe('hu');
		expect(resolveWidgetLocale(undefined, 'it')).toBe('it');
		expect(resolveWidgetLocale(undefined, 'nl')).toBe('nl');
		expect(resolveWidgetLocale(undefined, 'pt')).toBe('pt');
		expect(resolveWidgetLocale(undefined, 'da')).toBe('da');
		expect(resolveWidgetLocale(undefined, 'sl')).toBe('sl');
		expect(resolveWidgetLocale(undefined, 'hr')).toBe('hr');
		expect(resolveWidgetLocale(undefined, 'ro')).toBe('ro');
		expect(resolveWidgetLocale(undefined, 'sv')).toBe('sv');
		expect(resolveWidgetLocale(undefined, 'fi')).toBe('fi');
	});
});

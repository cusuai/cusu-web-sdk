import { describe, expect, it } from 'bun:test';
import { resolveWidgetLocale } from './locale';

describe('resolveWidgetLocale', () => {
	it('prefers the group language from boot', () => {
		expect(resolveWidgetLocale('cs', 'en')).toBe('cs');
		expect(resolveWidgetLocale('en', 'cs')).toBe('en');
		expect(resolveWidgetLocale('bg', 'en')).toBe('bg');
		expect(resolveWidgetLocale('sk', 'en')).toBe('sk');
		expect(resolveWidgetLocale('es', 'en')).toBe('es');
		expect(resolveWidgetLocale('de', 'en')).toBe('de');
		expect(resolveWidgetLocale('et', 'en')).toBe('et');
		expect(resolveWidgetLocale('fr', 'en')).toBe('fr');
		expect(resolveWidgetLocale('pl', 'en')).toBe('pl');
		expect(resolveWidgetLocale('hu', 'en')).toBe('hu');
		expect(resolveWidgetLocale('it', 'en')).toBe('it');
		expect(resolveWidgetLocale('lt', 'en')).toBe('lt');
		expect(resolveWidgetLocale('lv', 'en')).toBe('lv');
		expect(resolveWidgetLocale('nl', 'en')).toBe('nl');
		expect(resolveWidgetLocale('no', 'en')).toBe('no');
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
		expect(resolveWidgetLocale(undefined, 'bg')).toBe('bg');
		expect(resolveWidgetLocale(undefined, 'sk')).toBe('sk');
		expect(resolveWidgetLocale(undefined, 'es')).toBe('es');
		expect(resolveWidgetLocale(undefined, 'de')).toBe('de');
		expect(resolveWidgetLocale(undefined, 'et')).toBe('et');
		expect(resolveWidgetLocale(undefined, 'fr')).toBe('fr');
		expect(resolveWidgetLocale(undefined, 'pl')).toBe('pl');
		expect(resolveWidgetLocale(undefined, 'hu')).toBe('hu');
		expect(resolveWidgetLocale(undefined, 'it')).toBe('it');
		expect(resolveWidgetLocale(undefined, 'lt')).toBe('lt');
		expect(resolveWidgetLocale(undefined, 'lv')).toBe('lv');
		expect(resolveWidgetLocale(undefined, 'nl')).toBe('nl');
		expect(resolveWidgetLocale(undefined, 'no')).toBe('no');
		expect(resolveWidgetLocale(undefined, 'pt')).toBe('pt');
		expect(resolveWidgetLocale(undefined, 'da')).toBe('da');
		expect(resolveWidgetLocale(undefined, 'sl')).toBe('sl');
		expect(resolveWidgetLocale(undefined, 'hr')).toBe('hr');
		expect(resolveWidgetLocale(undefined, 'ro')).toBe('ro');
		expect(resolveWidgetLocale(undefined, 'sv')).toBe('sv');
		expect(resolveWidgetLocale(undefined, 'fi')).toBe('fi');
	});
});

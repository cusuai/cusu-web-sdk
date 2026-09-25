import { describe, expect, it } from 'bun:test';
import { detectPageLanguage, resolveWidgetLocale } from './locale';

describe('resolveWidgetLocale', () => {
	it('prefers the group language from boot in group mode', () => {
		expect(resolveWidgetLocale('cs', 'en')).toBe('cs');
		expect(resolveWidgetLocale({ groupLanguage: 'cs', override: 'en' })).toBe('cs');
		expect(resolveWidgetLocale({ groupLanguage: 'en', override: 'cs' })).toBe('en');
	});

	it('falls back to initialize locale when boot has no widget language', () => {
		expect(resolveWidgetLocale(undefined, 'cs')).toBe('cs');
		expect(resolveWidgetLocale('', 'en')).toBe('en');
		expect(resolveWidgetLocale({ groupLanguage: undefined, override: 'bg' })).toBe('bg');
		expect(resolveWidgetLocale({ groupLanguage: undefined, override: 'sr' })).toBe('sr');
		expect(resolveWidgetLocale({ groupLanguage: undefined, override: 'mk' })).toBe('mk');
	});

	it('in auto mode prefers page language, then override, then group', () => {
		expect(
			resolveWidgetLocale({
				groupLanguage: 'cs',
				replyLocale: 'auto',
				pageLanguage: 'en',
				override: 'de'
			})
		).toBe('en');
		expect(
			resolveWidgetLocale({
				groupLanguage: 'cs',
				replyLocale: 'auto',
				pageLanguage: 'en-US',
				override: 'de'
			})
		).toBe('en');
		expect(
			resolveWidgetLocale({
				groupLanguage: 'cs',
				replyLocale: 'auto',
				override: 'de'
			})
		).toBe('de');
		expect(
			resolveWidgetLocale({
				groupLanguage: 'cs',
				replyLocale: 'auto'
			})
		).toBe('cs');
	});

	it('in group mode ignores page language', () => {
		expect(
			resolveWidgetLocale({
				groupLanguage: 'cs',
				replyLocale: 'group',
				pageLanguage: 'en'
			})
		).toBe('cs');
	});

	it('uses Serbian and Macedonian group languages', () => {
		expect(resolveWidgetLocale({ groupLanguage: 'sr-RS' })).toBe('sr');
		expect(resolveWidgetLocale({ groupLanguage: 'mk-MK' })).toBe('mk');
	});
});

describe('detectPageLanguage', () => {
	it('reads the primary subtag from html lang', () => {
		expect(
			detectPageLanguage({
				documentElement: { lang: 'en-GB' }
			})
		).toBe('en');
		expect(
			detectPageLanguage({
				documentElement: { lang: '  ' }
			})
		).toBeUndefined();
	});
});

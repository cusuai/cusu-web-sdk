import { describe, expect, it } from 'bun:test';
import { resolveWidgetLocale } from './locale';

describe('resolveWidgetLocale', () => {
	it('prefers the group language from boot', () => {
		expect(resolveWidgetLocale('cs', 'en')).toBe('cs');
		expect(resolveWidgetLocale('en', 'cs')).toBe('en');
	});

	it('falls back to initialize locale when boot has no widget language', () => {
		expect(resolveWidgetLocale(undefined, 'cs')).toBe('cs');
		expect(resolveWidgetLocale('', 'en')).toBe('en');
		expect(resolveWidgetLocale('sk')).toBeUndefined();
	});
});

import { describe, expect, it } from 'bun:test';
import { DEFAULT_API_URL, resolveApiUrl } from './config';

describe('resolveApiUrl', () => {
	it('defaults to the hosted Cusu API', () => {
		expect(resolveApiUrl()).toBe(DEFAULT_API_URL);
		expect(resolveApiUrl('')).toBe(DEFAULT_API_URL);
		expect(resolveApiUrl('   ')).toBe(DEFAULT_API_URL);
	});

	it('keeps an explicit override for local or staging hosts', () => {
		expect(resolveApiUrl('http://localhost:3000')).toBe('http://localhost:3000');
		expect(resolveApiUrl(' https://api.staging.cusuai.com/ ')).toBe(
			'https://api.staging.cusuai.com/'
		);
	});
});

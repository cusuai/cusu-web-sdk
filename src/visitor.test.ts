import { afterEach, describe, expect, it } from 'bun:test';
import { ensureVisitorId, resetVisitorId } from './visitor';

class CookieJar {
	private readonly values = new Map<string, string>();

	get cookie(): string {
		return [...this.values.entries()].map(([name, value]) => `${name}=${value}`).join('; ');
	}

	set cookie(raw: string) {
		const [pair, ...attrs] = raw.split(';');
		const eq = pair.indexOf('=');
		const name = (eq === -1 ? pair : pair.slice(0, eq)).trim();
		const value = (eq === -1 ? '' : pair.slice(eq + 1)).trim();
		const maxAge = attrs
			.map((attr) => attr.trim())
			.find((attr) => attr.toLowerCase().startsWith('max-age='));
		if (maxAge && Number(maxAge.slice('max-age='.length)) <= 0) {
			this.values.delete(name);
			return;
		}
		this.values.set(name, value);
	}
}

const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');

function useCookies(): CookieJar {
	const jar = new CookieJar();
	Object.defineProperty(globalThis, 'document', {
		configurable: true,
		value: {
			get cookie() {
				return jar.cookie;
			},
			set cookie(value: string) {
				jar.cookie = value;
			}
		}
	});
	return jar;
}

afterEach(() => {
	if (originalDocument) {
		Object.defineProperty(globalThis, 'document', originalDocument);
	} else {
		Reflect.deleteProperty(globalThis, 'document');
	}
});

describe('visitor id cookie', () => {
	it('creates a visitor id once and reuses it', () => {
		useCookies();
		const first = ensureVisitorId();
		expect(first).toMatch(/^[0-9a-f-]{36}$/i);
		expect(ensureVisitorId()).toBe(first);
	});

	it('issues a new visitor id on reset', () => {
		useCookies();
		const previous = ensureVisitorId();
		const next = resetVisitorId();
		expect(next).not.toBe(previous);
		expect(ensureVisitorId()).toBe(next);
	});

	it('returns empty without a document', () => {
		Reflect.deleteProperty(globalThis, 'document');
		expect(ensureVisitorId()).toBe('');
		expect(resetVisitorId()).toBe('');
	});
});

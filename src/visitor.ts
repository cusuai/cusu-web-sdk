const COOKIE = 'cusu_vid';
const MAX_AGE_SEC = 60 * 60 * 24 * 400;

export function ensureVisitorId(): string {
	if (typeof document === 'undefined') {
		return '';
	}
	const existing = readCookie(COOKIE);
	if (existing) {
		return existing;
	}
	const id = crypto.randomUUID();
	writeCookie(COOKIE, id);
	return id;
}

function readCookie(name: string): string | null {
	const prefix = `${name}=`;
	for (const part of document.cookie.split(';')) {
		const item = part.trim();
		if (item.startsWith(prefix)) {
			const value = item.slice(prefix.length);
			try {
				return decodeURIComponent(value);
			} catch {
				return value;
			}
		}
	}
	return null;
}

function writeCookie(name: string, value: string): void {
	// Cookie Store API is not available in all embed contexts.
	// biome-ignore lint/suspicious/noDocumentCookie: intentional first-party visitor cookie
	document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${MAX_AGE_SEC}; Path=/; SameSite=Lax`;
}

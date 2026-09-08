import { afterEach, describe, expect, it } from 'bun:test';
import {
	type ConversationSummary,
	formatRowWhen,
	formatWhen,
	groupHistory,
	HISTORY_LIMIT,
	historyKey,
	isConversationSummary,
	lastMessagePreview,
	loadCurrentId,
	loadHistory,
	parseHistory,
	persistCurrentId,
	persistHistory,
	recencyId,
	startOfDay,
	storageKey,
	upsertHistory
} from './history';

class MemoryStorage {
	readonly values = new Map<string, string>();
	throwOn?: 'get' | 'set' | 'remove';

	getItem(key: string): string | null {
		if (this.throwOn === 'get') throw new Error('get failed');
		return this.values.get(key) ?? null;
	}

	setItem(key: string, value: string): void {
		if (this.throwOn === 'set') throw new Error('set failed');
		this.values.set(key, value);
	}

	removeItem(key: string): void {
		if (this.throwOn === 'remove') throw new Error('remove failed');
		this.values.delete(key);
	}
}

const originalLocalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
const originalSessionStorage = Object.getOwnPropertyDescriptor(globalThis, 'sessionStorage');

function useStorage() {
	const local = new MemoryStorage();
	const session = new MemoryStorage();
	Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: local });
	Object.defineProperty(globalThis, 'sessionStorage', { configurable: true, value: session });
	return { local, session };
}

function restoreStorage(name: 'localStorage' | 'sessionStorage', descriptor?: PropertyDescriptor) {
	if (descriptor) {
		Object.defineProperty(globalThis, name, descriptor);
	} else {
		Reflect.deleteProperty(globalThis, name);
	}
}

afterEach(() => {
	restoreStorage('localStorage', originalLocalStorage);
	restoreStorage('sessionStorage', originalSessionStorage);
});

const summary = (
	id: string,
	updatedAt = '2026-09-08T08:00:00.000Z',
	status: ConversationSummary['status'] = 'waiting_customer'
): ConversationSummary => ({ id, preview: `Preview ${id}`, updatedAt, status });

describe('history keys and parsing', () => {
	it('builds group-specific storage keys', () => {
		expect(storageKey('support')).toBe('cusu:support:thread');
		expect(historyKey('support')).toBe('cusu:support:thread-history');
	});

	it('recognizes valid summaries, including every legacy status', () => {
		const statuses: ConversationSummary['status'][] = [
			'waiting_customer',
			'waiting_us',
			'ai_replying',
			'resolved',
			'no_response',
			'inappropriate',
			'ai',
			'waiting',
			'human',
			'needs_operator'
		];
		for (const status of statuses) {
			expect(isConversationSummary(summary(status, undefined, status))).toBe(true);
		}
	});

	it('rejects malformed summaries and filters them while parsing', () => {
		const valid = summary('valid');
		const invalid = [
			null,
			'text',
			{},
			{ ...valid, id: 1 },
			{ ...valid, preview: 1 },
			{ ...valid, updatedAt: 1 },
			{ ...valid, status: 'unknown' }
		];
		for (const value of invalid) {
			expect(isConversationSummary(value)).toBe(false);
		}
		expect(parseHistory([valid, ...invalid])).toEqual([valid]);
		expect(parseHistory({ item: valid })).toEqual([]);
	});
});

describe('history summaries', () => {
	it('finds the last non-empty message and strips simple markdown', () => {
		expect(
			lastMessagePreview([{ text: 'first' }, { text: '  **Bold** and `code` \n here  ' }])
		).toBe('Bold and code here');
		expect(lastMessagePreview([{ text: 'kept' }, { text: '   ' }])).toBe('kept');
		expect(lastMessagePreview([])).toBe('');
	});

	it('truncates previews longer than 80 characters', () => {
		const text = 'x'.repeat(81);
		expect(lastMessagePreview([{ text }])).toBe(`${'x'.repeat(80)}…`);
	});

	it('replaces duplicate ids and sorts newest first', () => {
		const old = summary('same', '2026-01-01T00:00:00.000Z');
		const middle = summary('middle', '2026-02-01T00:00:00.000Z');
		const replacement = { ...summary('same', '2026-03-01T00:00:00.000Z'), preview: 'new' };
		expect(upsertHistory([old, middle], replacement)).toEqual([replacement, middle]);
	});
});

describe('storage persistence', () => {
	it('loads the current id from local storage, then session storage', () => {
		const { local, session } = useStorage();
		session.setItem(storageKey('g'), 'session-id');
		expect(loadCurrentId('g')).toBe('session-id');
		local.setItem(storageKey('g'), 'local-id');
		expect(loadCurrentId('g')).toBe('local-id');
	});

	it('persists and clears the current id in both stores', () => {
		const { local, session } = useStorage();
		persistCurrentId('g', 'thread-id');
		expect(local.getItem(storageKey('g'))).toBe('thread-id');
		expect(session.getItem(storageKey('g'))).toBe('thread-id');
		persistCurrentId('g', null);
		expect(local.getItem(storageKey('g'))).toBeNull();
		expect(session.getItem(storageKey('g'))).toBeNull();
	});

	it('loads valid persisted history and handles missing or malformed data', () => {
		const { local } = useStorage();
		expect(loadHistory('g')).toEqual([]);
		local.setItem(historyKey('g'), JSON.stringify([summary('valid'), { bad: true }]));
		expect(loadHistory('g')).toEqual([summary('valid')]);
		local.setItem(historyKey('g'), '{');
		expect(loadHistory('g')).toEqual([]);
	});

	it('limits persisted history to HISTORY_LIMIT entries', () => {
		const { local } = useStorage();
		const items = Array.from({ length: HISTORY_LIMIT + 2 }, (_, index) => summary(String(index)));
		persistHistory('g', items);
		expect(JSON.parse(local.getItem(historyKey('g')) ?? '[]')).toEqual(
			items.slice(0, HISTORY_LIMIT)
		);
	});

	it('ignores storage access failures', () => {
		const { local, session } = useStorage();
		local.throwOn = 'get';
		expect(loadCurrentId('g')).toBeNull();
		expect(loadHistory('g')).toEqual([]);
		local.throwOn = 'set';
		expect(() => persistCurrentId('g', 'id')).not.toThrow();
		expect(() => persistHistory('g', [summary('id')])).not.toThrow();
		local.throwOn = 'remove';
		expect(() => persistCurrentId('g', null)).not.toThrow();
		session.throwOn = 'set';
		expect(() => persistCurrentId('g', 'id')).not.toThrow();
	});
});

describe('recency and date formatting', () => {
	it('starts at local midnight and assigns every recency bucket', () => {
		const now = new Date(2026, 8, 10, 12);
		expect(startOfDay(now)).toEqual(new Date(2026, 8, 10));
		expect(recencyId(new Date(2026, 8, 10, 1).toISOString(), now)).toBe('today');
		expect(recencyId(new Date(2026, 8, 9, 1).toISOString(), now)).toBe('yesterday');
		expect(recencyId(new Date(2026, 8, 7, 1).toISOString(), now)).toBe('week');
		expect(recencyId(new Date(2026, 7, 1).toISOString(), now)).toBe('older');
		expect(recencyId('invalid', now)).toBe('older');
	});

	it('formats valid dates and preserves invalid strings', () => {
		const iso = '2026-09-08T08:30:00.000Z';
		expect(formatWhen(iso, 'en-US')).not.toBe(iso);
		expect(formatWhen('invalid', 'en-US')).toBe('invalid');
		expect(formatRowWhen(iso, 'today', 'en-US')).not.toBe(iso);
		expect(formatRowWhen(iso, 'yesterday', 'en-US')).not.toBe(iso);
		expect(formatRowWhen(iso, 'week', 'en-US')).not.toBe(iso);
		expect(formatRowWhen('invalid', 'older', 'en-US')).toBe('invalid');
	});

	it('groups non-empty recency buckets in display order', () => {
		const now = new Date();
		const today = summary('today', now.toISOString());
		const old = summary('old', new Date(now.getFullYear() - 1, 0, 1).toISOString());
		expect(groupHistory([old, today])).toEqual([
			{ id: 'today', items: [today] },
			{ id: 'older', items: [old] }
		]);
		expect(groupHistory([])).toEqual([]);
	});
});

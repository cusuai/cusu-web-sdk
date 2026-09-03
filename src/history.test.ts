import { describe, expect, it } from 'bun:test';
import {
	type ConversationSummary,
	groupHistory,
	isConversationSummary,
	lastMessagePreview,
	loadHistory,
	parseHistory,
	recencyId,
	upsertHistory
} from './history';

const summary = (overrides: Partial<ConversationSummary> = {}): ConversationSummary => ({
	id: 't1',
	preview: 'hello',
	updatedAt: '2026-09-03T12:00:00.000Z',
	status: 'ai',
	...overrides
});

describe('isConversationSummary', () => {
	it('accepts valid summaries', () => {
		expect(isConversationSummary(summary())).toBe(true);
		expect(isConversationSummary(summary({ status: 'waiting' }))).toBe(true);
		expect(isConversationSummary(summary({ status: 'human' }))).toBe(true);
		expect(isConversationSummary(summary({ status: 'resolved' }))).toBe(true);
		expect(isConversationSummary(summary({ status: 'needs_operator' }))).toBe(true);
	});

	it('rejects invalid shapes', () => {
		expect(isConversationSummary(null)).toBe(false);
		expect(isConversationSummary('x')).toBe(false);
		expect(isConversationSummary({ ...summary(), status: 'unknown' })).toBe(false);
		expect(isConversationSummary({ id: 1, preview: 'a', updatedAt: 'b', status: 'ai' })).toBe(
			false
		);
	});
});

describe('parseHistory', () => {
	it('returns empty for non-arrays', () => {
		expect(parseHistory(null)).toEqual([]);
		expect(parseHistory({})).toEqual([]);
	});

	it('filters invalid entries', () => {
		expect(
			parseHistory([summary(), { id: 'bad' }, summary({ id: 't2', status: 'human' })])
		).toEqual([summary(), summary({ id: 't2', status: 'human' })]);
	});
});

describe('loadHistory', () => {
	it('returns empty for bad JSON in localStorage', () => {
		const original = globalThis.localStorage;
		const store = new Map<string, string>();
		Object.defineProperty(globalThis, 'localStorage', {
			configurable: true,
			value: {
				getItem: (key: string) => store.get(key) ?? null,
				setItem: (key: string, value: string) => {
					store.set(key, value);
				},
				removeItem: (key: string) => {
					store.delete(key);
				}
			}
		});
		try {
			store.set('cusu:acme:thread-history', '{not-json');
			expect(loadHistory('acme')).toEqual([]);
			store.set('cusu:acme:thread-history', JSON.stringify([{ id: 'only-id' }]));
			expect(loadHistory('acme')).toEqual([]);
			store.set('cusu:acme:thread-history', JSON.stringify([summary({ id: 'ok' })]));
			expect(loadHistory('acme')).toEqual([summary({ id: 'ok' })]);
		} finally {
			Object.defineProperty(globalThis, 'localStorage', {
				configurable: true,
				value: original
			});
		}
	});
});

describe('lastMessagePreview', () => {
	it('strips markdown and collapses whitespace', () => {
		expect(lastMessagePreview([{ text: '**Bold** and `code`  with\nspaces' }])).toBe(
			'Bold and code with spaces'
		);
	});

	it('truncates long text with an ellipsis', () => {
		const long = 'a'.repeat(90);
		expect(lastMessagePreview([{ text: long }])).toBe(`${'a'.repeat(80)}…`);
	});

	it('skips empty messages and walks backwards', () => {
		expect(lastMessagePreview([{ text: 'first' }, { text: '   ' }, { text: '**last**' }])).toBe(
			'last'
		);
		expect(lastMessagePreview([{ text: '' }, { text: '   ' }])).toBe('');
	});
});

describe('upsertHistory', () => {
	it('inserts, replaces by id, and sorts by updatedAt desc', () => {
		const older = summary({ id: 'a', updatedAt: '2026-01-01T00:00:00.000Z' });
		const newer = summary({ id: 'b', updatedAt: '2026-02-01T00:00:00.000Z' });
		const updated = summary({
			id: 'a',
			preview: 'updated',
			updatedAt: '2026-03-01T00:00:00.000Z'
		});
		expect(upsertHistory([older, newer], updated)).toEqual([updated, newer]);
	});
});

describe('recencyId', () => {
	const now = new Date('2026-09-03T15:00:00');

	it('classifies today, yesterday, week, and older', () => {
		expect(recencyId('2026-09-03T08:00:00', now)).toBe('today');
		expect(recencyId('2026-09-02T12:00:00', now)).toBe('yesterday');
		expect(recencyId('2026-09-01T12:00:00', now)).toBe('week');
		expect(recencyId('2026-08-01T12:00:00', now)).toBe('older');
	});

	it('returns older for invalid dates', () => {
		expect(recencyId('not-a-date', now)).toBe('older');
	});
});

describe('groupHistory', () => {
	it('buckets items by recency and omits empty groups', () => {
		const fixedNow = new Date('2026-09-03T15:00:00');
		const RealDate = Date;
		class FakeDate extends RealDate {
			constructor(...args: ConstructorParameters<typeof Date>) {
				if (args.length === 0) {
					super(fixedNow.getTime());
					return;
				}
				super(...args);
			}
			static override now() {
				return fixedNow.getTime();
			}
		}
		globalThis.Date = FakeDate as DateConstructor;
		try {
			const today = summary({ id: 'today', updatedAt: '2026-09-03T10:00:00' });
			const older = summary({ id: 'old', updatedAt: '2026-07-01T10:00:00' });
			expect(groupHistory([today, older])).toEqual([
				{ id: 'today', items: [today] },
				{ id: 'older', items: [older] }
			]);
		} finally {
			globalThis.Date = RealDate;
		}
	});
});

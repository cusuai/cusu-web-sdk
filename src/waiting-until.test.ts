import { describe, expect, it } from 'bun:test';
import { formatWaitingWhen } from './waiting-until';

describe('formatWaitingWhen', () => {
	it('formats Czech and English next-open copy', () => {
		const at = '2026-01-05T08:00:00.000Z';
		expect(formatWaitingWhen(at, 'Europe/Prague', 'cs')).toBe('v pondělí od 9:00');
		expect(formatWaitingWhen(at, 'Europe/Prague', 'en')).toBe('Monday 9:00');
	});
});

import { describe, expect, it } from 'bun:test';
import { isVisibleWidgetRole, threadToMessages } from './messages';
import type { ThreadMessage } from './types';

describe('isVisibleWidgetRole', () => {
	it('accepts customer, agent, and operator', () => {
		expect(isVisibleWidgetRole('customer')).toBe(true);
		expect(isVisibleWidgetRole('agent')).toBe(true);
		expect(isVisibleWidgetRole('operator')).toBe(true);
	});

	it('rejects other roles', () => {
		expect(isVisibleWidgetRole('system')).toBe(false);
		expect(isVisibleWidgetRole('')).toBe(false);
		expect(isVisibleWidgetRole('Customer')).toBe(false);
	});
});

describe('threadToMessages', () => {
	it('maps visible thread messages to widget messages', () => {
		const messages: ThreadMessage[] = [
			{
				id: '1',
				at: '2026-01-01T00:00:00.000Z',
				role: 'customer',
				text: 'hi',
				tools: []
			},
			{
				id: '2',
				at: '2026-01-01T00:00:01.000Z',
				role: 'agent',
				text: 'hello',
				tools: ['search']
			},
			{
				id: '3',
				at: '2026-01-01T00:00:02.000Z',
				role: 'operator',
				text: 'on it',
				tools: []
			}
		];
		expect(threadToMessages(messages)).toEqual([
			{
				id: '1',
				at: '2026-01-01T00:00:00.000Z',
				role: 'customer',
				text: 'hi',
				streaming: false
			},
			{
				id: '2',
				at: '2026-01-01T00:00:01.000Z',
				role: 'agent',
				text: 'hello',
				streaming: false
			},
			{
				id: '3',
				at: '2026-01-01T00:00:02.000Z',
				role: 'operator',
				text: 'on it',
				streaming: false
			}
		]);
	});

	it('drops messages with non-visible roles', () => {
		const messages = [
			{
				id: '1',
				at: 't',
				role: 'system' as ThreadMessage['role'],
				text: 'hidden',
				tools: []
			},
			{
				id: '2',
				at: 't',
				role: 'customer',
				text: 'visible',
				tools: []
			}
		];
		expect(threadToMessages(messages)).toEqual([
			{
				id: '2',
				at: 't',
				role: 'customer',
				text: 'visible',
				streaming: false
			}
		]);
	});

	it('returns an empty list for empty input', () => {
		expect(threadToMessages([])).toEqual([]);
	});
});

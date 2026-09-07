import { describe, expect, it } from 'bun:test';
import { isClosedStatus, isTransferredStatus } from './types';

describe('isClosedStatus', () => {
	it('is true for the three closed reasons', () => {
		expect(isClosedStatus('resolved')).toBe(true);
		expect(isClosedStatus('no_response')).toBe(true);
		expect(isClosedStatus('inappropriate')).toBe(true);
		expect(isClosedStatus('waiting_us')).toBe(false);
		expect(isClosedStatus('waiting_customer')).toBe(false);
		expect(isClosedStatus('ai_replying')).toBe(false);
		expect(isClosedStatus('ai')).toBe(false);
		expect(isClosedStatus('waiting')).toBe(false);
		expect(isClosedStatus('human')).toBe(false);
		expect(isClosedStatus('needs_operator')).toBe(false);
		expect(isClosedStatus('other')).toBe(false);
	});
});

describe('isTransferredStatus', () => {
	it('uses assignee when present', () => {
		expect(isTransferredStatus('waiting_us', { type: 'none' })).toBe(true);
		expect(isTransferredStatus('waiting_customer', { type: 'user' })).toBe(true);
		expect(isTransferredStatus('waiting_us', { type: 'ai' })).toBe(false);
		expect(isTransferredStatus('ai_replying', { type: 'ai' })).toBe(false);
		expect(isTransferredStatus('resolved', { type: 'none' })).toBe(false);
	});

	it('falls back to legacy transfer statuses without assignee', () => {
		expect(isTransferredStatus('waiting')).toBe(true);
		expect(isTransferredStatus('human')).toBe(true);
		expect(isTransferredStatus('needs_operator')).toBe(true);
		expect(isTransferredStatus('ai')).toBe(false);
		expect(isTransferredStatus('waiting_us')).toBe(false);
		expect(isTransferredStatus('resolved')).toBe(false);
		expect(isTransferredStatus('other')).toBe(false);
	});
});

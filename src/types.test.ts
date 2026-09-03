import { describe, expect, it } from 'bun:test';
import { isClosedStatus, isTransferredStatus } from './types';

describe('isClosedStatus', () => {
	it('is true only for resolved', () => {
		expect(isClosedStatus('resolved')).toBe(true);
		expect(isClosedStatus('ai')).toBe(false);
		expect(isClosedStatus('waiting')).toBe(false);
		expect(isClosedStatus('human')).toBe(false);
		expect(isClosedStatus('needs_operator')).toBe(false);
		expect(isClosedStatus('other')).toBe(false);
	});
});

describe('isTransferredStatus', () => {
	it('is true for waiting, human, and needs_operator', () => {
		expect(isTransferredStatus('waiting')).toBe(true);
		expect(isTransferredStatus('human')).toBe(true);
		expect(isTransferredStatus('needs_operator')).toBe(true);
		expect(isTransferredStatus('ai')).toBe(false);
		expect(isTransferredStatus('resolved')).toBe(false);
		expect(isTransferredStatus('other')).toBe(false);
	});
});

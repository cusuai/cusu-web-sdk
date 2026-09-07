import { describe, expect, it } from 'bun:test';
import cs from '../messages/cs.json';
import en from '../messages/en.json';

const RATING_KEYS = [
	'rating_prompt',
	'rating_thanks',
	'aria_rating_star',
	'aria_rating_up',
	'aria_rating_down',
	'aria_rating_sad',
	'aria_rating_ok',
	'aria_rating_happy'
] as const;

describe('widget rating copy', () => {
	it('has English and Czech keys', () => {
		for (const key of RATING_KEYS) {
			expect(en[key]).toBeTruthy();
			expect(cs[key]).toBeTruthy();
		}
	});
});

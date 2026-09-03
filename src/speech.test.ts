import { describe, expect, it } from 'bun:test';
import { splitSpeakable } from './speech';

describe('splitSpeakable', () => {
	it('keeps mid-sentence text in the buffer', () => {
		expect(splitSpeakable('Hello there', false)).toEqual({
			spoken: [],
			rest: 'Hello there'
		});
	});

	it('force-flushes leftover text without a sentence break', () => {
		expect(splitSpeakable('Hello there', true)).toEqual({
			spoken: ['Hello there'],
			rest: ''
		});
	});

	it('splits on punctuation and trailing quotes', () => {
		expect(splitSpeakable('Really?" Next', false)).toEqual({
			spoken: ['Really?"'],
			rest: 'Next'
		});
		expect(splitSpeakable("Done!' More", false)).toEqual({
			spoken: ["Done!'"],
			rest: 'More'
		});
		expect(splitSpeakable('Ok…) Continue', false)).toEqual({
			spoken: ['Ok…)'],
			rest: 'Continue'
		});
	});

	it('splits on newlines', () => {
		expect(splitSpeakable('Line one\nLine two', false)).toEqual({
			spoken: ['Line one'],
			rest: 'Line two'
		});
		// Consecutive newlines match as one break; leftover without a break stays in rest.
		expect(splitSpeakable('A\n\nB', false)).toEqual({
			spoken: ['A'],
			rest: 'B'
		});
		expect(splitSpeakable('A\nB\n', false)).toEqual({
			spoken: ['A', 'B'],
			rest: ''
		});
	});

	it('handles empty and whitespace-only buffers', () => {
		expect(splitSpeakable('', false)).toEqual({ spoken: [], rest: '' });
		expect(splitSpeakable('', true)).toEqual({ spoken: [], rest: '' });
		expect(splitSpeakable('   ', true)).toEqual({ spoken: [], rest: '' });
		expect(splitSpeakable('\n\n', false)).toEqual({ spoken: [], rest: '' });
	});

	it('normalizes whitespace inside spoken chunks', () => {
		expect(splitSpeakable('Hello   world.\nNext', false)).toEqual({
			spoken: ['Hello world.'],
			rest: 'Next'
		});
	});

	it('can emit multiple sentences then leave a partial rest', () => {
		expect(splitSpeakable('One. Two! Three', false)).toEqual({
			spoken: ['One.', 'Two!'],
			rest: 'Three'
		});
	});
});

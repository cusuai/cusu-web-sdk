import { describe, expect, it } from 'bun:test';
import { activityFromEvent, functionCallsFromEvent, transcriptFromEvent } from './realtime-call';

describe('functionCallsFromEvent', () => {
	it('reads a completed function-call arguments event', () => {
		expect(
			functionCallsFromEvent({
				type: 'response.function_call_arguments.done',
				call_id: 'call_1',
				name: 'search_pages',
				arguments: '{"query":"doprava"}'
			})
		).toEqual([
			{
				callId: 'call_1',
				name: 'search_pages',
				arguments: '{"query":"doprava"}'
			}
		]);
	});

	it('reads function calls from response.done', () => {
		expect(
			functionCallsFromEvent({
				type: 'response.done',
				response: {
					output: [
						{
							type: 'function_call',
							call_id: 'call_2',
							name: 'read_page',
							arguments: '{"url":"https://acme.test"}'
						}
					]
				}
			})
		).toEqual([
			{
				callId: 'call_2',
				name: 'read_page',
				arguments: '{"url":"https://acme.test"}'
			}
		]);
	});
});

describe('transcriptFromEvent', () => {
	it('maps input transcription completion to the customer', () => {
		expect(
			transcriptFromEvent({
				type: 'conversation.item.input_audio_transcription.completed',
				transcript: 'kde je balík?'
			})
		).toEqual({
			role: 'customer',
			text: 'kde je balík?',
			done: true
		});
	});

	it('maps output audio transcript deltas to the agent', () => {
		expect(
			transcriptFromEvent({
				type: 'response.output_audio_transcript.delta',
				delta: 'Koukám'
			})
		).toEqual({
			role: 'agent',
			text: 'Koukám',
			done: false
		});
		expect(
			transcriptFromEvent({
				type: 'response.output_audio_transcript.done',
				transcript: 'Koukám na to.'
			})
		).toEqual({
			role: 'agent',
			text: 'Koukám na to.',
			done: true
		});
	});
});

describe('activityFromEvent', () => {
	it('starts agent speaking on audio, not on response.created', () => {
		expect(activityFromEvent({ type: 'response.created' })).toBeNull();
		expect(activityFromEvent({ type: 'response.output_audio.delta' })).toBe('agent-start');
		expect(activityFromEvent({ type: 'output_audio_buffer.started' })).toBe('agent-start');
	});

	it('keeps agent speaking through buffer pauses and only ends on response.done', () => {
		expect(activityFromEvent({ type: 'output_audio_buffer.stopped' })).toBeNull();
		expect(activityFromEvent({ type: 'response.done' })).toBe('agent-end');
	});

	it('does not end the agent turn when response.done still has a function call', () => {
		expect(
			activityFromEvent({
				type: 'response.done',
				response: {
					output: [
						{
							type: 'function_call',
							call_id: 'call_3',
							name: 'transfer_to_operator',
							arguments: '{}'
						}
					]
				}
			})
		).toBeNull();
	});

	it('maps customer speech start and stop', () => {
		expect(activityFromEvent({ type: 'input_audio_buffer.speech_started' })).toBe('user-start');
		expect(activityFromEvent({ type: 'input_audio_buffer.speech_stopped' })).toBe('user-end');
	});
});

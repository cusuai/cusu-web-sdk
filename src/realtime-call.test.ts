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
	it('starts agent speaking on audio, not on transcripts or response.created', () => {
		expect(activityFromEvent({ type: 'response.created' })).toBeNull();
		expect(activityFromEvent({ type: 'response.output_audio_transcript.delta' })).toBeNull();
		expect(activityFromEvent({ type: 'response.output_audio.delta' })).toBe('agent-start');
		expect(activityFromEvent({ type: 'output_audio_buffer.started' })).toBe('agent-start');
	});

	it('ends agent speaking when the output buffer stops, and on a finished response', () => {
		expect(activityFromEvent({ type: 'output_audio_buffer.stopped' })).toBe('agent-end');
		expect(activityFromEvent({ type: 'response.done' })).toBe('agent-end');
	});

	it('marks thinking when the model starts a tool call', () => {
		expect(
			activityFromEvent({
				type: 'response.function_call_arguments.done',
				call_id: 'call_3',
				name: 'search_pages'
			})
		).toBe('thinking');
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
		).toBe('thinking');
	});

	it('maps customer speech start and stop', () => {
		expect(activityFromEvent({ type: 'input_audio_buffer.speech_started' })).toBe('user-start');
		expect(activityFromEvent({ type: 'input_audio_buffer.speech_stopped' })).toBe('user-end');
	});
});

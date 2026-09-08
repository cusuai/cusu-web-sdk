import { describe, expect, it } from 'bun:test';
import cs from '../messages/cs.json';
import de from '../messages/de.json';
import en from '../messages/en.json';
import es from '../messages/es.json';
import sk from '../messages/sk.json';
import {
	isVisibleWidgetRole,
	keepAttachmentPreviews,
	mergeAgentAttachments,
	previewUrlsByAttachment,
	type ThreadAttachment,
	threadToMessages,
	type WidgetMessage
} from './messages';
import type { ThreadMessage } from './types';

const attachment = (
	id: string,
	previewUrl?: string,
	kind: ThreadAttachment['kind'] = 'image'
): ThreadAttachment => ({
	id,
	filename: `${id}.${kind === 'image' ? 'png' : 'pdf'}`,
	contentType: kind === 'image' ? 'image/png' : 'application/pdf',
	byteSize: 10,
	kind,
	source: 'upload',
	...(previewUrl ? { previewUrl } : {})
});

const message = (id: string, role: WidgetMessage['role'] = 'customer'): WidgetMessage => ({
	id,
	at: '2026-09-08T08:00:00.000Z',
	role,
	text: `message ${id}`,
	streaming: false
});

describe('isVisibleWidgetRole', () => {
	it('accepts customer, agent, and operator only', () => {
		expect(isVisibleWidgetRole('customer')).toBe(true);
		expect(isVisibleWidgetRole('agent')).toBe(true);
		expect(isVisibleWidgetRole('operator')).toBe(true);
		expect(isVisibleWidgetRole('system')).toBe(false);
	});
});

describe('attachment previews', () => {
	it('indexes only attachments with preview URLs', () => {
		const previews = previewUrlsByAttachment([
			{},
			{ attachments: [attachment('one', 'blob:one'), attachment('two')] },
			{ attachments: [attachment('one', 'blob:new')] }
		]);
		expect([...previews]).toEqual([['one', 'blob:new']]);
	});

	it('restores known previews while preserving unknown attachments', () => {
		const original = {
			...message('m'),
			attachments: [attachment('one'), attachment('two', 'blob:existing')]
		};
		const restored = keepAttachmentPreviews(
			original,
			new Map([
				['one', 'blob:restored'],
				['missing', 'blob:missing']
			])
		);
		expect(restored).not.toBe(original);
		expect(restored.attachments?.[0]?.previewUrl).toBe('blob:restored');
		expect(restored.attachments?.[1]).toBe(original.attachments[1]);
	});

	it('returns the original message when there is nothing to restore', () => {
		const original = message('m');
		expect(keepAttachmentPreviews(original, new Map([['one', 'blob:one']]))).toBe(original);
		const withAttachment = { ...original, attachments: [attachment('one')] };
		expect(keepAttachmentPreviews(withAttachment, new Map())).toBe(withAttachment);
	});
});

describe('mergeAgentAttachments', () => {
	it('returns the original messages for empty incoming attachments', () => {
		const messages = [message('customer')];
		expect(mergeAgentAttachments(messages, [], 'now')).toBe(messages);
	});

	it('merges into preferId and ignores duplicate attachment ids', () => {
		const preferred = {
			...message('preferred', 'operator'),
			attachments: [attachment('existing')]
		};
		const latestAgent = message('latest', 'agent');
		const messages = [preferred, latestAgent];
		const merged = mergeAgentAttachments(
			messages,
			[attachment('existing'), attachment('new')],
			'now',
			{ preferId: 'preferred' }
		);
		expect(merged[0]?.attachments?.map(({ id }) => id)).toEqual(['existing', 'new']);
		expect(merged[1]).toBe(latestAgent);
	});

	it('falls back to the last agent bubble and preserves input for all duplicates', () => {
		const firstAgent = message('first', 'agent');
		const lastAgent = { ...message('last', 'agent'), attachments: [attachment('same')] };
		const messages = [firstAgent, message('customer'), lastAgent];
		const merged = mergeAgentAttachments(messages, [attachment('new')], 'now', {
			preferId: 'missing'
		});
		expect(merged[2]?.attachments?.map(({ id }) => id)).toEqual(['same', 'new']);
		expect(mergeAgentAttachments(messages, [attachment('same')], 'now')).toBe(messages);
	});

	it('appends a new agent bubble when no agent exists', () => {
		const existing = [message('customer')];
		const incoming = [attachment('new')];
		expect(
			mergeAgentAttachments(existing, incoming, '2026-09-08T09:00:00.000Z', {
				newId: () => 'generated'
			})
		).toEqual([
			...existing,
			{
				id: 'generated',
				at: '2026-09-08T09:00:00.000Z',
				role: 'agent',
				text: '',
				streaming: false,
				attachments: incoming
			}
		]);
	});
});

describe('threadToMessages', () => {
	it('maps visible messages, omits empty attachments, and filters invisible roles', () => {
		const input = [
			{
				id: 'customer',
				at: '2026-09-08T08:00:00.000Z',
				role: 'customer',
				text: 'hello',
				tools: [],
				attachments: [attachment('image')]
			},
			{
				id: 'agent',
				at: '2026-09-08T08:01:00.000Z',
				role: 'agent',
				text: 'reply',
				tools: [],
				attachments: []
			},
			{
				id: 'hidden',
				at: '2026-09-08T08:02:00.000Z',
				role: 'system',
				text: 'hidden',
				tools: []
			}
		] as unknown as ThreadMessage[];

		expect(threadToMessages(input)).toEqual([
			{
				id: 'customer',
				at: '2026-09-08T08:00:00.000Z',
				role: 'customer',
				text: 'hello',
				streaming: false,
				attachments: [attachment('image')]
			},
			{
				id: 'agent',
				at: '2026-09-08T08:01:00.000Z',
				role: 'agent',
				text: 'reply',
				streaming: false
			}
		]);
	});
});

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
	it('has English, Czech, Slovak, Spanish, and German keys', () => {
		for (const key of RATING_KEYS) {
			expect(en[key]).toBeTruthy();
			expect(cs[key]).toBeTruthy();
			expect(sk[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
			expect(de[key]).toBeTruthy();
		}
	});
});

describe('widget locale catalogs', () => {
	it('keeps Czech, Slovak, Spanish, and German complete against English', () => {
		expect(Object.keys(cs).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(sk).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(de).sort()).toEqual(Object.keys(en).sort());
	});
});

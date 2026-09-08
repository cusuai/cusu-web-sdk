import { describe, expect, it } from 'bun:test';
import cs from '../messages/cs.json';
import da from '../messages/da.json';
import de from '../messages/de.json';
import en from '../messages/en.json';
import es from '../messages/es.json';
import fi from '../messages/fi.json';
import fr from '../messages/fr.json';
import hr from '../messages/hr.json';
import hu from '../messages/hu.json';
import italian from '../messages/it.json';
import nl from '../messages/nl.json';
import pl from '../messages/pl.json';
import pt from '../messages/pt.json';
import ro from '../messages/ro.json';
import sk from '../messages/sk.json';
import sl from '../messages/sl.json';
import sv from '../messages/sv.json';
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

	it('keeps link attachments and their url', () => {
		const link: ThreadAttachment = {
			id: 'link1',
			filename: 'Blue hoodie',
			contentType: 'text/uri-list',
			byteSize: 0,
			kind: 'link',
			source: 'integration',
			url: 'https://shop.test/products/blue-hoodie',
			imageUrl: 'https://cdn.shop.test/hoodie.jpg',
			description: 'Organic cotton hoodie'
		};
		expect(
			threadToMessages([
				{
					id: 'agent',
					at: '2026-09-08T08:01:00.000Z',
					role: 'agent',
					text: 'here',
					tools: [],
					attachments: [link]
				}
			] as ThreadMessage[])
		).toEqual([
			{
				id: 'agent',
				at: '2026-09-08T08:01:00.000Z',
				role: 'agent',
				text: 'here',
				streaming: false,
				attachments: [link]
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

const LINK_KEYS = ['file_kind_link', 'aria_open_link'] as const;

const HANDOFF_KEYS = ['conversation_waiting_operator', 'operator_connected'] as const;

describe('widget rating copy', () => {
	it('has all supported locale keys', () => {
		for (const key of RATING_KEYS) {
			expect(en[key]).toBeTruthy();
			expect(cs[key]).toBeTruthy();
			expect(sk[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
			expect(de[key]).toBeTruthy();
			expect(fr[key]).toBeTruthy();
			expect(pl[key]).toBeTruthy();
			expect(hu[key]).toBeTruthy();
			expect(italian[key]).toBeTruthy();
			expect(nl[key]).toBeTruthy();
			expect(pt[key]).toBeTruthy();
			expect(da[key]).toBeTruthy();
			expect(sl[key]).toBeTruthy();
			expect(hr[key]).toBeTruthy();
			expect(ro[key]).toBeTruthy();
			expect(sv[key]).toBeTruthy();
			expect(fi[key]).toBeTruthy();
		}
	});
});

describe('widget link copy', () => {
	it('has all supported locale keys', () => {
		for (const key of LINK_KEYS) {
			expect(en[key]).toBeTruthy();
			expect(cs[key]).toBeTruthy();
			expect(sk[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
			expect(de[key]).toBeTruthy();
			expect(fr[key]).toBeTruthy();
			expect(pl[key]).toBeTruthy();
			expect(hu[key]).toBeTruthy();
			expect(italian[key]).toBeTruthy();
			expect(nl[key]).toBeTruthy();
			expect(pt[key]).toBeTruthy();
			expect(da[key]).toBeTruthy();
			expect(sl[key]).toBeTruthy();
			expect(hr[key]).toBeTruthy();
			expect(ro[key]).toBeTruthy();
			expect(sv[key]).toBeTruthy();
			expect(fi[key]).toBeTruthy();
		}
		expect(en.file_kind_link).toBe('Link');
		expect(cs.file_kind_link).toBe('Odkaz');
		expect(sk.file_kind_link).toBe('Odkaz');
		expect(es.file_kind_link).toBe('Enlace');
		expect(de.file_kind_link).toBe('Link');
		expect(fr.file_kind_link).toBe('Lien');
		expect(pl.file_kind_link).toBe('Link');
		expect(hu.file_kind_link).toBe('Hivatkozás');
		expect(italian.file_kind_link).toBe('Link');
		expect(nl.file_kind_link).toBe('Link');
		expect(pt.file_kind_link).toBe('Ligação');
		expect(da.file_kind_link).toBe('Link');
		expect(sl.file_kind_link).toBe('Povezava');
		expect(hr.file_kind_link).toBe('Poveznica');
		expect(ro.file_kind_link).toBe('Link');
		expect(sv.file_kind_link).toBe('Länk');
		expect(fi.file_kind_link).toBe('Linkki');
	});
});

describe('widget operator waiting copy', () => {
	it('has all supported locale keys', () => {
		for (const key of HANDOFF_KEYS) {
			expect(en[key]).toBeTruthy();
			expect(cs[key]).toBeTruthy();
			expect(sk[key]).toBeTruthy();
			expect(es[key]).toBeTruthy();
			expect(de[key]).toBeTruthy();
			expect(fr[key]).toBeTruthy();
			expect(pl[key]).toBeTruthy();
			expect(hu[key]).toBeTruthy();
			expect(italian[key]).toBeTruthy();
			expect(nl[key]).toBeTruthy();
			expect(pt[key]).toBeTruthy();
			expect(da[key]).toBeTruthy();
			expect(sl[key]).toBeTruthy();
			expect(hr[key]).toBeTruthy();
			expect(ro[key]).toBeTruthy();
			expect(sv[key]).toBeTruthy();
			expect(fi[key]).toBeTruthy();
		}
		expect(cs.conversation_waiting_operator).toBe(
			'Momentálně není připojený žádný operátor. Odpověď dostanete, jakmile se někdo připojí.'
		);
		expect(cs.operator_connected).toBe('Operátor se připojil.');
	});
});

describe('widget brand copy', () => {
	it('has all supported locale keys', () => {
		expect(en.brand_name).toBe('cusu.ai');
		expect(cs.brand_name).toBe('cusu.ai');
		expect(sk.brand_name).toBe('cusu.ai');
		expect(es.brand_name).toBe('cusu.ai');
		expect(de.brand_name).toBe('cusu.ai');
		expect(fr.brand_name).toBe('cusu.ai');
		expect(pl.brand_name).toBe('cusu.ai');
		expect(hu.brand_name).toBe('cusu.ai');
		expect(italian.brand_name).toBe('cusu.ai');
		expect(nl.brand_name).toBe('cusu.ai');
		expect(pt.brand_name).toBe('cusu.ai');
		expect(da.brand_name).toBe('cusu.ai');
		expect(sl.brand_name).toBe('cusu.ai');
		expect(hr.brand_name).toBe('cusu.ai');
		expect(ro.brand_name).toBe('cusu.ai');
		expect(sv.brand_name).toBe('cusu.ai');
		expect(fi.brand_name).toBe('cusu.ai');
		expect(en.aria_brand_home).toBe('from cusu.ai');
		expect(cs.aria_brand_home).toBe('od cusu.ai');
		expect(sk.aria_brand_home).toBe('od cusu.ai');
		expect(es.aria_brand_home).toBe('de cusu.ai');
		expect(de.aria_brand_home).toBe('von cusu.ai');
		expect(fr.aria_brand_home).toBe('par cusu.ai');
		expect(pl.aria_brand_home).toBe('od cusu.ai');
		expect(hu.aria_brand_home).toBe('a cusu.ai-tól');
		expect(italian.aria_brand_home).toBe('di cusu.ai');
		expect(nl.aria_brand_home).toBe('van cusu.ai');
		expect(pt.aria_brand_home).toBe('da cusu.ai');
		expect(da.aria_brand_home).toBe('fra cusu.ai');
		expect(sl.aria_brand_home).toBe('od cusu.ai');
		expect(hr.aria_brand_home).toBe('od cusu.ai');
		expect(ro.aria_brand_home).toBe('de la cusu.ai');
		expect(sv.aria_brand_home).toBe('från cusu.ai');
		expect(fi.aria_brand_home).toBe('palvelun tarjoaa cusu.ai');
	});
});

describe('widget locale catalogs', () => {
	it('keeps every supported catalog complete against English', () => {
		expect(Object.keys(cs).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(sk).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(de).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(pl).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(hu).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(italian).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(nl).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(pt).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(da).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(sl).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(hr).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(ro).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(sv).sort()).toEqual(Object.keys(en).sort());
		expect(Object.keys(fi).sort()).toEqual(Object.keys(en).sort());
	});
});

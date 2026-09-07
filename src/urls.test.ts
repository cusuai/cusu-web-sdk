import { describe, expect, it } from 'bun:test';
import {
	apiBase,
	chatAttachmentUploadUrl,
	chatAttachmentUrl,
	identifyUrl,
	realtimeSessionUrl,
	shopUrl,
	toWsUrl,
	transcribeUrl,
	ttsUrl
} from './urls';

describe('apiBase', () => {
	it('strips a single trailing slash', () => {
		expect(apiBase('https://api.example.com/')).toBe('https://api.example.com');
	});

	it('leaves urls without a trailing slash unchanged', () => {
		expect(apiBase('https://api.example.com')).toBe('https://api.example.com');
	});
});

describe('toWsUrl', () => {
	it('converts http to ws and includes group/key query params', () => {
		const url = toWsUrl('http://localhost:3000/', 'acme', 'secret', null, 'visitor-1');
		expect(url.startsWith('ws://localhost:3000/ws/chat?')).toBe(true);
		const params = new URL(url).searchParams;
		expect(params.get('group')).toBe('acme');
		expect(params.get('key')).toBe('secret');
		expect(params.get('visitor')).toBe('visitor-1');
		expect(params.has('thread')).toBe(false);
	});

	it('converts https to wss and includes thread when present', () => {
		const url = toWsUrl('https://api.example.com', 'group-a', 'key-1', 'thread-9', '');
		expect(url.startsWith('wss://api.example.com/ws/chat?')).toBe(true);
		const params = new URL(url).searchParams;
		expect(params.get('group')).toBe('group-a');
		expect(params.get('key')).toBe('key-1');
		expect(params.get('thread')).toBe('thread-9');
		expect(params.has('visitor')).toBe(false);
	});
});

describe('endpoint helpers', () => {
	it('builds shopUrl with encoded group', () => {
		expect(shopUrl('https://api.example.com/', 'acme/co')).toBe(
			'https://api.example.com/shop/acme%2Fco'
		);
	});

	it('builds identifyUrl under shop', () => {
		expect(identifyUrl('https://api.example.com', 'acme')).toBe(
			'https://api.example.com/shop/acme/identify'
		);
	});

	it('builds transcribeUrl', () => {
		expect(transcribeUrl('https://api.example.com/')).toBe('https://api.example.com/transcribe');
	});

	it('builds ttsUrl', () => {
		expect(ttsUrl('https://api.example.com')).toBe('https://api.example.com/tts');
	});

	it('builds realtimeSessionUrl under shop', () => {
		expect(realtimeSessionUrl('https://api.example.com', 'acme')).toBe(
			'https://api.example.com/shop/acme/realtime-session'
		);
	});

	it('builds chat attachment urls', () => {
		expect(chatAttachmentUploadUrl('https://api.example.com/')).toBe(
			'https://api.example.com/v1/chat/attachments'
		);
		const url = chatAttachmentUrl('https://api.example.com', 'att_1', 'acme', 'key-1', 'vid_1');
		expect(url.startsWith('https://api.example.com/v1/chat/attachments/att_1?')).toBe(true);
		const params = new URL(url).searchParams;
		expect(params.get('group')).toBe('acme');
		expect(params.get('key')).toBe('key-1');
		expect(params.get('visitor')).toBe('vid_1');
	});
});

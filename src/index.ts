import { mount, unmount } from 'svelte';
import ChatWidget from './ChatWidget.svelte';
import { GroupChat } from './chat.svelte';
import type { CusuConfig } from './config';
import { setLocale } from './paraglide/runtime.js';
import { identifyUrl, shopUrl } from './urls';
import { ensureVisitorId } from './visitor';
import widgetCss from './widget.css?inline';

export type { CusuConfig } from './config';

export type CustomerGender = 'male' | 'female' | 'other';

export type IdentifyTraits = {
	name?: string;
	email?: string;
	phone?: string;
	gender?: CustomerGender;
	[key: string]: string | undefined;
};

const HOST_ID = 'cusu-widget-root';

type Runtime = {
	chat: GroupChat;
	app: object;
	host: HTMLElement;
};

type IdentifyCall = { id: string; traits?: IdentifyTraits };

let runtime: Runtime | null = null;
let bootId = 0;
let activeConfig: CusuConfig | null = null;
let queuedIdentify: IdentifyCall[] = [];

export type CusuError = {
	code: string;
	message: string;
};

export type CusuErrorHandler = (error: CusuError) => void;

const CREDITS_EXHAUSTED = 'credits_exhausted';

let errorHandler: CusuErrorHandler | null = null;

function onError(handler: CusuErrorHandler | null): void {
	errorHandler = handler;
}

function reportError(error: CusuError): void {
	errorHandler?.(error);
}

function initialize(config: CusuConfig): void {
	const id = ++bootId;
	activeConfig = null;
	teardown();
	void boot(config, id);
}

function open(): void {
	runtime?.chat.openPanel();
}

function close(): void {
	runtime?.chat.closePanel();
}

function isOpened(): boolean {
	return runtime?.chat.open ?? false;
}

function showLauncher(): void {
	runtime?.chat.setShowLauncher(true);
}

function hideLauncher(): void {
	runtime?.chat.setShowLauncher(false);
}

function destroy(): void {
	bootId += 1;
	activeConfig = null;
	teardown();
}

function identify(id: string, traits?: IdentifyTraits): void {
	const externalId = id.trim();
	if (!externalId) {
		console.error('Cusu: identify id is required');
		return;
	}
	const call = { id: externalId, traits };
	if (!activeConfig) {
		queuedIdentify.push(call);
		return;
	}
	void postIdentify(activeConfig, call);
}

async function boot(config: CusuConfig, id: number): Promise<void> {
	if (typeof document === 'undefined') {
		return;
	}
	const group = config.group.trim();
	if (!group) {
		console.error('Cusu: group is required');
		return;
	}
	if (!config.apiUrl.trim()) {
		console.error('Cusu: apiUrl is required');
		return;
	}
	const apiKey = config.apiKey.trim();
	if (!apiKey) {
		console.error('Cusu: apiKey is required');
		return;
	}
	try {
		const response = await fetch(shopUrl(config.apiUrl, group), {
			headers: { authorization: `Bearer ${apiKey}` }
		});
		if (id !== bootId) {
			return;
		}
		if (!response.ok) {
			const body = (await response.json().catch(() => ({}))) as {
				code?: string;
				message?: string;
			};
			if (response.status === 402 || body.code === CREDITS_EXHAUSTED) {
				const error = {
					code: CREDITS_EXHAUSTED,
					message: 'Cusu: widget is hidden because credits ran out. Top up in Cusu billing.'
				};
				console.error(error.message);
				reportError(error);
				return;
			}
			const message =
				response.status === 401 ? 'Cusu: invalid API key' : `Cusu: group "${group}" was not found`;
			console.error(message);
			reportError({
				code: response.status === 401 ? 'unauthorized' : 'not_found',
				message
			});
			return;
		}
	} catch (error) {
		if (id !== bootId) {
			return;
		}
		console.error('Cusu: failed to initialize', error);
		return;
	}
	if (id !== bootId) {
		return;
	}
	const ready = { ...config, group, apiKey };
	activeConfig = ready;
	if (ready.locale === 'en' || ready.locale === 'cs') {
		setLocale(ready.locale, { reload: false });
	}
	mountWidget(ready);
	flushIdentify(ready);
}

function mountWidget(config: CusuConfig): void {
	teardown();
	const host = document.createElement('div');
	host.id = HOST_ID;
	host.style.zIndex = '2147483646';
	const shadow = host.attachShadow({ mode: 'open' });
	const style = document.createElement('style');
	style.textContent = widgetCss;
	shadow.append(style);
	const target = document.createElement('div');
	shadow.append(target);
	document.body.append(host);
	const chat = new GroupChat(config, ensureVisitorId());
	const app = mount(ChatWidget, {
		target,
		props: { chat }
	});
	runtime = { chat, app, host };
}

function teardown(): void {
	if (!runtime) {
		return;
	}
	runtime.chat.disconnect();
	void unmount(runtime.app, { outro: false });
	runtime.host.remove();
	runtime = null;
}

function flushIdentify(config: CusuConfig): void {
	const queued = queuedIdentify;
	queuedIdentify = [];
	for (const call of queued) {
		void postIdentify(config, call);
	}
}

async function postIdentify(config: CusuConfig, call: IdentifyCall): Promise<void> {
	const visitorId = ensureVisitorId();
	if (!visitorId) {
		return;
	}
	const { name, email, phone, gender, ...rest } = call.traits ?? {};
	const traits: Record<string, string> = {};
	for (const [key, value] of Object.entries(rest)) {
		if (typeof value === 'string' && value.trim()) {
			traits[key] = value.trim();
		}
	}
	const genderValue =
		gender === 'male' || gender === 'female' || gender === 'other' ? gender : undefined;
	try {
		const response = await fetch(identifyUrl(config.apiUrl, config.group), {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				authorization: `Bearer ${config.apiKey}`
			},
			body: JSON.stringify({
				visitorId,
				externalId: call.id,
				...(name?.trim() ? { name: name.trim() } : {}),
				...(email?.trim() ? { email: email.trim() } : {}),
				...(phone?.trim() ? { phone: phone.trim() } : {}),
				...(genderValue ? { gender: genderValue } : {}),
				...(Object.keys(traits).length > 0 ? { traits } : {})
			})
		});
		if (!response.ok) {
			console.error('Cusu: identify failed', response.status);
		}
	} catch (error) {
		console.error('Cusu: identify failed', error);
	}
}

const Cusu = {
	initialize,
	identify,
	open,
	close,
	isOpened,
	showLauncher,
	hideLauncher,
	destroy,
	onError
};

export default Cusu;

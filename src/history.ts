import type { ThreadStatus } from './types';

export const HISTORY_LIMIT = 40;

export type ConversationSummary = {
	id: string;
	preview: string;
	updatedAt: string;
	status: ThreadStatus;
	assignee?: { type: 'none' | 'ai' | 'user' };
};

export type RecencyId = 'today' | 'yesterday' | 'week' | 'older';

export function storageKey(group: string): string {
	return `cusu:${group}:thread`;
}

export function historyKey(group: string): string {
	return `cusu:${group}:thread-history`;
}

function isHistoryStatus(value: unknown): value is ThreadStatus {
	return (
		value === 'waiting_customer' ||
		value === 'waiting_us' ||
		value === 'ai_replying' ||
		value === 'resolved' ||
		value === 'no_response' ||
		value === 'inappropriate' ||
		value === 'ai' ||
		value === 'waiting' ||
		value === 'human' ||
		value === 'needs_operator'
	);
}

export function isConversationSummary(value: unknown): value is ConversationSummary {
	if (!value || typeof value !== 'object') {
		return false;
	}
	const item = value as Record<string, unknown>;
	return (
		typeof item.id === 'string' &&
		typeof item.preview === 'string' &&
		typeof item.updatedAt === 'string' &&
		isHistoryStatus(item.status)
	);
}

export function parseHistory(raw: unknown): ConversationSummary[] {
	if (!Array.isArray(raw)) {
		return [];
	}
	return raw.filter(isConversationSummary);
}

export function lastMessagePreview(messages: { text: string }[]): string {
	for (let index = messages.length - 1; index >= 0; index -= 1) {
		const text = messages[index]?.text
			.replace(/\*\*(.+?)\*\*/g, '$1')
			.replace(/`([^`]+)`/g, '$1')
			.replace(/\s+/g, ' ')
			.trim();
		if (text) {
			return text.length > 80 ? `${text.slice(0, 80)}…` : text;
		}
	}
	return '';
}

export function upsertHistory(
	items: ConversationSummary[],
	next: ConversationSummary
): ConversationSummary[] {
	const rest = items.filter((existing) => existing.id !== next.id);
	return [next, ...rest].sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
}

export function loadCurrentId(group: string): string | null {
	try {
		const key = storageKey(group);
		return localStorage.getItem(key) ?? sessionStorage.getItem(key);
	} catch {
		return null;
	}
}

export function persistCurrentId(group: string, id: string | null): void {
	try {
		const key = storageKey(group);
		if (id) {
			localStorage.setItem(key, id);
			sessionStorage.setItem(key, id);
			return;
		}
		localStorage.removeItem(key);
		sessionStorage.removeItem(key);
	} catch {
		// ignore storage failures
	}
}

export function loadHistory(group: string): ConversationSummary[] {
	try {
		const raw = localStorage.getItem(historyKey(group));
		if (!raw) {
			return [];
		}
		return parseHistory(JSON.parse(raw) as unknown);
	} catch {
		return [];
	}
}

export function persistHistory(group: string, items: ConversationSummary[]): void {
	try {
		localStorage.setItem(historyKey(group), JSON.stringify(items.slice(0, HISTORY_LIMIT)));
	} catch {
		// ignore storage failures
	}
}

export function startOfDay(date: Date): Date {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function recencyId(iso: string, now: Date): RecencyId {
	const at = new Date(iso).getTime();
	if (Number.isNaN(at)) {
		return 'older';
	}
	const today = startOfDay(now);
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);
	const week = new Date(today);
	week.setDate(week.getDate() - ((today.getDay() + 6) % 7));
	if (at >= today.getTime()) {
		return 'today';
	}
	if (at >= yesterday.getTime()) {
		return 'yesterday';
	}
	if (at >= week.getTime()) {
		return 'week';
	}
	return 'older';
}

export function formatWhen(iso: string, locale: string): string {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) {
		return iso;
	}
	return date.toLocaleString(locale, {
		day: 'numeric',
		month: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
}

export function formatRowWhen(iso: string, recency: RecencyId, locale: string): string {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) {
		return iso;
	}
	if (recency === 'today' || recency === 'yesterday') {
		return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
	}
	return date.toLocaleDateString(locale, { day: 'numeric', month: 'numeric' });
}

export function groupHistory(
	items: ConversationSummary[]
): { id: RecencyId; items: ConversationSummary[] }[] {
	const now = new Date();
	const order: RecencyId[] = ['today', 'yesterday', 'week', 'older'];
	const buckets: Record<RecencyId, ConversationSummary[]> = {
		today: [],
		yesterday: [],
		week: [],
		older: []
	};
	for (const item of items) {
		buckets[recencyId(item.updatedAt, now)].push(item);
	}
	return order.filter((id) => buckets[id].length > 0).map((id) => ({ id, items: buckets[id] }));
}

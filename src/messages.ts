import type { ThreadMessage } from './types';

export type ThreadAttachment = {
	id: string;
	filename: string;
	contentType: string;
	byteSize: number;
	kind: 'image' | 'pdf' | 'link';
	source: 'upload' | 'integration';
	previewUrl?: string;
	url?: string;
	imageUrl?: string;
	description?: string;
};

export type WidgetMessage = {
	id: string;
	at: string;
	role: 'customer' | 'agent' | 'operator';
	text: string;
	streaming: boolean;
	transcribing?: boolean;
	transcribed?: boolean;
	attachments?: ThreadAttachment[];
};

export function isVisibleWidgetRole(role: string): role is WidgetMessage['role'] {
	return role === 'customer' || role === 'agent' || role === 'operator';
}

export function previewUrlsByAttachment(
	messages: Pick<WidgetMessage, 'attachments'>[]
): Map<string, string> {
	const previews = new Map<string, string>();
	for (const message of messages) {
		for (const attachment of message.attachments ?? []) {
			if (attachment.previewUrl) {
				previews.set(attachment.id, attachment.previewUrl);
			}
		}
	}
	return previews;
}

export function keepAttachmentPreviews(
	message: WidgetMessage,
	previews: Map<string, string>
): WidgetMessage {
	if (!message.attachments?.length || previews.size === 0) {
		return message;
	}
	return {
		...message,
		attachments: message.attachments.map((attachment) => {
			const previewUrl = previews.get(attachment.id);
			return previewUrl ? { ...attachment, previewUrl } : attachment;
		})
	};
}

export function mergeAgentAttachments(
	messages: WidgetMessage[],
	incoming: ThreadAttachment[],
	now: string,
	options: { preferId?: string | null; newId?: () => string } = {}
): WidgetMessage[] {
	if (incoming.length === 0) {
		return messages;
	}
	const preferId = options.preferId;
	const preferred =
		preferId && preferId.length > 0 ? messages.findIndex((message) => message.id === preferId) : -1;
	let index = preferred;
	if (index < 0) {
		index = messages.findLastIndex((message) => message.role === 'agent');
	}
	if (index < 0) {
		return [
			...messages,
			{
				id: options.newId?.() ?? crypto.randomUUID(),
				at: now,
				role: 'agent',
				text: '',
				streaming: false,
				attachments: incoming
			}
		];
	}
	const current = messages[index];
	if (!current) {
		return messages;
	}
	const seen = new Set((current.attachments ?? []).map((item) => item.id));
	const added = incoming.filter((item) => !seen.has(item.id));
	if (added.length === 0) {
		return messages;
	}
	return messages.map((message, messageIndex) =>
		messageIndex === index
			? { ...message, attachments: [...(message.attachments ?? []), ...added] }
			: message
	);
}

export function threadToMessages(messages: ThreadMessage[]): WidgetMessage[] {
	return messages.flatMap((message) => {
		if (!isVisibleWidgetRole(message.role)) {
			return [];
		}
		return [
			{
				id: message.id,
				at: message.at,
				role: message.role,
				text: message.text,
				streaming: false,
				...(message.attachments && message.attachments.length > 0
					? { attachments: message.attachments }
					: {})
			}
		];
	});
}

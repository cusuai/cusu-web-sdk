import type { ThreadMessage } from './types';

export type WidgetMessage = {
	id: string;
	at: string;
	role: 'customer' | 'agent' | 'operator';
	text: string;
	streaming: boolean;
	transcribing?: boolean;
	transcribed?: boolean;
};

export function isVisibleWidgetRole(role: string): role is WidgetMessage['role'] {
	return role === 'customer' || role === 'agent' || role === 'operator';
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
				streaming: false
			}
		];
	});
}

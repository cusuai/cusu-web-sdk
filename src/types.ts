export type ThreadStatus = 'ai' | 'waiting' | 'human' | 'resolved' | 'needs_operator';
export type ThreadMessageRole = 'customer' | 'agent' | 'operator';

export function isClosedStatus(status: ThreadStatus | string): boolean {
	return status === 'resolved';
}

export function isTransferredStatus(status: ThreadStatus | string): boolean {
	return status === 'waiting' || status === 'human' || status === 'needs_operator';
}

export type ThreadMessage = {
	id: string;
	at: string;
	role: ThreadMessageRole;
	text: string;
	tools: string[];
};

export type SupportThread = {
	id: string;
	status: ThreadStatus;
	createdAt: string;
	updatedAt: string;
	preview: string;
	messages: ThreadMessage[];
};

export type ChatEvent =
	| { type: 'chat.ready'; thread: SupportThread | null }
	| { type: 'chat.delta'; kind: 'thinking' | 'answer'; text: string }
	| { type: 'chat.ask'; question: string; message?: ThreadMessage }
	| { type: 'chat.done'; text: string; transferred: boolean; thread: SupportThread }
	| { type: 'chat.queued' }
	| { type: 'chat.error'; message: string }
	| { type: 'thread.message'; threadId: string; message: ThreadMessage }
	| { type: 'thread.updated'; thread: { id: string; status: ThreadStatus } };

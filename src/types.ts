export type ThreadStatus =
	| 'waiting_customer'
	| 'waiting_us'
	| 'ai_replying'
	| 'resolved'
	| 'no_response'
	| 'inappropriate'
	| 'ai'
	| 'waiting'
	| 'human'
	| 'needs_operator';

export type ThreadAssigneeType = 'none' | 'ai' | 'user';
export type ThreadAssignee = { type: ThreadAssigneeType; userId?: string };
export type ThreadMessageRole = 'customer' | 'agent' | 'operator';

const OPEN_STATUSES = new Set<string>([
	'waiting_customer',
	'waiting_us',
	'ai_replying',
	'ai',
	'waiting',
	'human',
	'needs_operator'
]);

const CLOSED_STATUSES = new Set<string>(['resolved', 'no_response', 'inappropriate']);

export function isOpenStatus(status: ThreadStatus | string): boolean {
	return OPEN_STATUSES.has(status);
}

export function isClosedStatus(status: ThreadStatus | string): boolean {
	return CLOSED_STATUSES.has(status);
}

export function isTransferredStatus(
	status: ThreadStatus | string,
	assignee?: { type?: string } | null
): boolean {
	if (isClosedStatus(status) || !isOpenStatus(status)) {
		return false;
	}
	if (assignee?.type) {
		return assignee.type !== 'ai';
	}
	return status === 'waiting' || status === 'human' || status === 'needs_operator';
}

export type OperatorHandoffBanner = 'waiting' | 'connected' | 'transferred';

export function operatorHandoffBanner(params: {
	transferred: boolean;
	closed: boolean;
	inboxCovered: boolean;
	awaitedOperator: boolean;
}): OperatorHandoffBanner | null {
	if (!params.transferred || params.closed) {
		return null;
	}
	if (!params.inboxCovered) {
		return 'waiting';
	}
	if (params.awaitedOperator) {
		return 'connected';
	}
	return 'transferred';
}

export type ThreadMessage = {
	id: string;
	at: string;
	role: ThreadMessageRole;
	text: string;
	tools: string[];
	attachments?: Array<{
		id: string;
		filename: string;
		contentType: string;
		byteSize: number;
		kind: 'image' | 'pdf' | 'link';
		source: 'upload' | 'integration';
		url?: string;
		imageUrl?: string;
		description?: string;
	}>;
};

export type SupportThread = {
	id: string;
	status: ThreadStatus;
	assignee?: ThreadAssignee;
	createdAt: string;
	updatedAt: string;
	title?: string;
	preview: string;
	messages: ThreadMessage[];
	rated?: boolean;
};

export type RatingScale = 'stars_5' | 'thumbs' | 'faces_3';

export type ChatEvent =
	| { type: 'ping' }
	| { type: 'chat.ready'; thread: SupportThread | null; inboxCovered?: boolean }
	| { type: 'chat.delta'; kind: 'thinking' | 'answer'; text: string }
	| { type: 'chat.status'; activity: string }
	| { type: 'chat.ask'; question: string; message?: ThreadMessage }
	| {
			type: 'chat.done';
			text: string;
			transferred: boolean;
			inboxCovered?: boolean;
			thread: SupportThread;
	  }
	| { type: 'chat.queued' }
	| { type: 'chat.error'; message: string }
	| { type: 'chat.rated' }
	| {
			type: 'chat.voice.committed';
			role: 'customer' | 'agent';
			thread: SupportThread;
			message?: ThreadMessage;
	  }
	| {
			type: 'chat.voice.tool_result';
			callId: string;
			output: string;
			transferred?: boolean;
			closed?: boolean;
			inboxCovered?: boolean;
			thread?: SupportThread | null;
			attachments?: ThreadMessage['attachments'];
	  }
	| { type: 'thread.message'; threadId: string; message: ThreadMessage }
	| { type: 'inbox.coverage'; covered: boolean }
	| { type: 'inbox.waiting'; message: string }
	| {
			type: 'thread.updated';
			thread: {
				id: string;
				status: ThreadStatus;
				assignee?: ThreadAssignee;
				updatedAt?: string;
				title?: string;
				preview?: string;
			};
	  };

export function apiBase(apiUrl: string): string {
	return apiUrl.replace(/\/$/, '');
}

export function toWsUrl(
	apiUrl: string,
	group: string,
	apiKey: string,
	threadId: string | null,
	visitorId: string
): string {
	const ws = apiBase(apiUrl).replace(/^http/i, 'ws');
	const params = new URLSearchParams({ group, key: apiKey });
	if (threadId) {
		params.set('thread', threadId);
	}
	if (visitorId) {
		params.set('visitor', visitorId);
	}
	return `${ws}/v1/ws/chat?${params}`;
}

export function groupUrl(apiUrl: string, group: string): string {
	return `${apiBase(apiUrl)}/v1/group/${encodeURIComponent(group)}`;
}

export function identifyUrl(apiUrl: string, group: string): string {
	return `${groupUrl(apiUrl, group)}/identify`;
}

export function transcribeUrl(apiUrl: string): string {
	return `${apiBase(apiUrl)}/v1/transcribe`;
}

export function ttsUrl(apiUrl: string): string {
	return `${apiBase(apiUrl)}/v1/tts`;
}

export function realtimeSessionUrl(apiUrl: string, group: string): string {
	return `${groupUrl(apiUrl, group)}/realtime-session`;
}

export function chatAttachmentUploadUrl(apiUrl: string): string {
	return `${apiBase(apiUrl)}/v1/chat/attachments`;
}

export function chatAttachmentUrl(
	apiUrl: string,
	attachmentId: string,
	group: string,
	apiKey: string,
	visitorId: string
): string {
	const params = new URLSearchParams({ group, key: apiKey });
	if (visitorId) {
		params.set('visitor', visitorId);
	}
	return `${apiBase(apiUrl)}/v1/chat/attachments/${encodeURIComponent(attachmentId)}?${params}`;
}

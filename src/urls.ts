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
	const params = new URLSearchParams({ company: group, key: apiKey });
	if (threadId) {
		params.set('thread', threadId);
	}
	if (visitorId) {
		params.set('visitor', visitorId);
	}
	return `${ws}/ws/chat?${params}`;
}

export function shopUrl(apiUrl: string, group: string): string {
	return `${apiBase(apiUrl)}/shop/${encodeURIComponent(group)}`;
}

export function identifyUrl(apiUrl: string, group: string): string {
	return `${shopUrl(apiUrl, group)}/identify`;
}

export function transcribeUrl(apiUrl: string): string {
	return `${apiBase(apiUrl)}/transcribe`;
}

export function ttsUrl(apiUrl: string): string {
	return `${apiBase(apiUrl)}/tts`;
}

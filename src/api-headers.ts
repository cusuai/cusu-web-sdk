import { SDK_VERSION } from './version';

export const SDK_VERSION_HEADER = 'X-Cusu-Sdk-Version';

/** Authorization + SDK version headers for widget API calls. */
export function widgetAuthHeaders(apiKey: string, extra?: HeadersInit): Record<string, string> {
	const headers: Record<string, string> = {
		authorization: `Bearer ${apiKey}`,
		[SDK_VERSION_HEADER]: SDK_VERSION
	};
	if (extra) {
		const entries =
			extra instanceof Headers
				? [...extra.entries()]
				: Array.isArray(extra)
					? extra
					: Object.entries(extra);
		for (const [key, value] of entries) {
			if (value != null && value !== '') {
				headers[key] = String(value);
			}
		}
	}
	return headers;
}

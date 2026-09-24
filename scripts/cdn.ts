/** Zerops object-storage CDN. Custom domains are not attached to the bucket. */
export const WIDGET_CDN_ORIGIN = 'https://storage.cdn.zerops.app';

export const VERSION_CACHE_CONTROL = 'public, max-age=31536000, immutable';
export const LATEST_CACHE_CONTROL = 'public, max-age=300';

const CDN_PUBLISH_ENV = [
	'WIDGET_S3_ENDPOINT',
	'WIDGET_S3_BUCKET',
	'WIDGET_S3_ACCESS_KEY_ID',
	'WIDGET_S3_SECRET_ACCESS_KEY',
	'ZEROPS_API_TOKEN',
	'ZEROPS_WIDGET_SERVICE_ID'
] as const;

export type CdnPublishEnv = {
	endpoint: string;
	region: string;
	bucket: string;
	accessKeyId: string;
	secretAccessKey: string;
	apiUrl: string;
	apiToken: string;
	serviceId: string;
};

export function widgetObjectKey(version: string): string {
	return `widget/${version}/cusu.js`;
}

export function widgetCdnUrl(bucket: string, version: string): string {
	const base = WIDGET_CDN_ORIGIN.replace(/\/$/, '');
	return `${base}/${bucket}/${widgetObjectKey(version)}`;
}

export function readCdnPublishEnv(env: NodeJS.ProcessEnv): CdnPublishEnv {
	const missing = CDN_PUBLISH_ENV.filter((key) => !env[key]?.trim());
	if (missing.length > 0) {
		throw new Error(`Missing CDN publish env: ${missing.join(', ')}`);
	}
	const read = (key: (typeof CDN_PUBLISH_ENV)[number]) => env[key]?.trim() ?? '';
	return {
		endpoint: read('WIDGET_S3_ENDPOINT'),
		region: env.WIDGET_S3_REGION?.trim() || 'us-east-1',
		bucket: read('WIDGET_S3_BUCKET'),
		accessKeyId: read('WIDGET_S3_ACCESS_KEY_ID'),
		secretAccessKey: read('WIDGET_S3_SECRET_ACCESS_KEY'),
		apiUrl: (env.ZEROPS_API_URL?.trim() || 'https://api.app-prg1.zerops.io').replace(/\/$/, ''),
		apiToken: read('ZEROPS_API_TOKEN'),
		serviceId: read('ZEROPS_WIDGET_SERVICE_ID')
	};
}

/**
 * Storage-mode purge patterns. Zerops requires a trailing `*` or `$`.
 * Prefer a directory wildcard — a single-object `$` can return success while
 * the CDN edge keeps serving a HIT for tens of seconds (or longer).
 */
export function objectPurgeUrl(
	apiUrl: string,
	serviceId: string,
	bucket: string,
	version: string
): string {
	const pattern = `${bucket}/widget/${version}/*`;
	return `${apiUrl}/api/rest/public/service-stack/${serviceId}/purge-cdn/${pattern}`;
}

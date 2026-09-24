import { describe, expect, it } from 'bun:test';
import { objectPurgeUrl, readCdnPublishEnv, widgetCdnUrl, widgetObjectKey } from './cdn';

describe('widget CDN paths', () => {
	it('pins a release under widget/<version>/cusu.js', () => {
		expect(widgetObjectKey('0.2.0')).toBe('widget/0.2.0/cusu.js');
		expect(widgetCdnUrl('4gfpg-widgetcdn', '0.2.0')).toBe(
			'https://storage.cdn.zerops.app/4gfpg-widgetcdn/widget/0.2.0/cusu.js'
		);
	});

	it('keeps latest as its own object', () => {
		expect(widgetCdnUrl('bucket', 'latest')).toBe(
			'https://storage.cdn.zerops.app/bucket/widget/latest/cusu.js'
		);
	});

	it('builds a storage-mode purge url for the version prefix', () => {
		expect(objectPurgeUrl('https://api.app-prg1.zerops.io', 'svc', 'bucket', 'latest')).toBe(
			'https://api.app-prg1.zerops.io/api/rest/public/service-stack/svc/purge-cdn/bucket/widget/latest/*'
		);
	});
});

describe('readCdnPublishEnv', () => {
	it('names every missing variable', () => {
		expect(() => readCdnPublishEnv({})).toThrow(
			'WIDGET_S3_ENDPOINT, WIDGET_S3_BUCKET, WIDGET_S3_ACCESS_KEY_ID, WIDGET_S3_SECRET_ACCESS_KEY, ZEROPS_API_TOKEN, ZEROPS_WIDGET_SERVICE_ID'
		);
	});

	it('defaults region and API host', () => {
		const env = readCdnPublishEnv({
			WIDGET_S3_ENDPOINT: ' https://storage-prg1.zerops.io/ ',
			WIDGET_S3_BUCKET: 'bucket',
			WIDGET_S3_ACCESS_KEY_ID: 'key',
			WIDGET_S3_SECRET_ACCESS_KEY: 'secret',
			ZEROPS_API_TOKEN: 'token',
			ZEROPS_WIDGET_SERVICE_ID: 'svc'
		});
		expect(env.endpoint).toBe('https://storage-prg1.zerops.io/');
		expect(env.region).toBe('us-east-1');
		expect(env.apiUrl).toBe('https://api.app-prg1.zerops.io');
	});
});

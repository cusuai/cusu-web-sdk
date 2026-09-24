/**
 * Uploads dist/cusu.iife.js to the public Zerops object-storage bucket.
 *
 * Objects:
 *   widget/<version>/cusu.js  — immutable, safe to pin in Shopify
 *   widget/latest/cusu.js     — overwritten every release
 * Both objects are purged afterwards. Zerops CDN ignores Cache-Control for 30 days.
 *
 * Run from a v* tag in .github/workflows/release.yml. Requires the env listed
 * in readCdnPublishEnv (GitHub Actions secrets).
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import {
	type CdnPublishEnv,
	LATEST_CACHE_CONTROL,
	objectPurgeUrl,
	readCdnPublishEnv,
	VERSION_CACHE_CONTROL,
	widgetCdnUrl,
	widgetObjectKey
} from './cdn';

const root = resolve(import.meta.dir, '..');

function clientFor(env: CdnPublishEnv): S3Client {
	return new S3Client({
		region: env.region,
		endpoint: env.endpoint,
		forcePathStyle: true,
		credentials: {
			accessKeyId: env.accessKeyId,
			secretAccessKey: env.secretAccessKey
		}
	});
}

async function putObject(
	client: S3Client,
	bucket: string,
	key: string,
	body: Buffer,
	cacheControl: string
) {
	await client.send(
		new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Body: body,
			ContentType: 'application/javascript',
			CacheControl: cacheControl
		})
	);
}

async function purgeObject(env: CdnPublishEnv, version: string) {
	const response = await fetch(objectPurgeUrl(env.apiUrl, env.serviceId, env.bucket, version), {
		method: 'PUT',
		headers: { authorization: `Bearer ${env.apiToken}` }
	});
	if (!response.ok) {
		const detail = (await response.text()).slice(0, 300);
		throw new Error(`CDN purge failed (${response.status}): ${detail}`);
	}
}

export async function publishWidgetCdn(env: CdnPublishEnv, version: string, body: Buffer) {
	const client = clientFor(env);
	await putObject(client, env.bucket, widgetObjectKey(version), body, VERSION_CACHE_CONTROL);
	await putObject(client, env.bucket, widgetObjectKey('latest'), body, LATEST_CACHE_CONTROL);
	// Zerops CDN caches the first response, including a 404, for 30 days.
	await purgeObject(env, version);
	await purgeObject(env, 'latest');
	return {
		versionUrl: widgetCdnUrl(env.bucket, version),
		latestUrl: widgetCdnUrl(env.bucket, 'latest')
	};
}

async function main() {
	const env = readCdnPublishEnv(process.env);
	const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8')) as {
		version: string;
	};
	const file = process.env.WIDGET_FILE?.trim() || resolve(root, 'dist/cusu.iife.js');
	const body = readFileSync(file);
	const urls = await publishWidgetCdn(env, pkg.version, body);
	console.log(urls.versionUrl);
	console.log(urls.latestUrl);
}

if (import.meta.main) {
	main().catch((error: unknown) => {
		console.error(error instanceof Error ? error.message : error);
		process.exit(1);
	});
}

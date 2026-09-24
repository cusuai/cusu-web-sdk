# Script-tag CDN

Shopify, Shoptet, and any page without a bundler load one file. The release tag uploads it to Zerops object storage `widgetcdn` (project `cusu-live`). That bucket is not the private `storage` bucket used for customer attachments.

Public base: `https://storage.cdn.zerops.app/4gfpg-widgetcdn`

| Object | URL suffix | Who should use it |
|--------|------------|-------------------|
| `widget/0.3.0/cusu.js` | `/widget/<version>/cusu.js` | Storefronts. The bytes never change. |
| `widget/latest/cusu.js` | `/widget/latest/cusu.js` | Trying a build. Not for a live theme. |

```html
<script src="https://storage.cdn.zerops.app/4gfpg-widgetcdn/widget/0.3.0/cusu.js"></script>
<script>
  Cusu.initialize({
    group: 'grp_…',
    apiKey: 'pk_…'
  });
</script>
```

On Shopify paste that before `</body>` in `theme.liquid`. Add the shop origin to the public key's allowed origins. Checkout does not run this script.

The file is the IIFE build (`dist/cusu.iife.js`) with a global `Cusu`. `<script src>` does not need CORS.

## Cache

Zerops CDN keeps an object for 30 days and ignores `Cache-Control`. Browsers still honor it.

- Versioned object: `Cache-Control: public, max-age=31536000, immutable`
- `latest`: `Cache-Control: public, max-age=300`

The release job purges both objects after upload. A missed file (including a cached 404) would otherwise stay on the CDN for 30 days. Browsers that pinned `widget/<version>/cusu.js` keep that URL forever; the purge only drops the edge copy so the next fetch sees the bytes just uploaded.

## Bucket

Import [`zerops/widgetcdn.import.yml`](../zerops/widgetcdn.import.yml) into the existing Zerops project:

```bash
zcli project service-import zerops/widgetcdn.import.yml -P <project-id>
```

Policy is `public-objects-read` (anonymous `GetObject`, no list, no write). Quota is 1 GB. After the service is active, enable CDN once:

```bash
PUT /api/rest/public/service-stack/<service-id>/cdn
```

On `cusu-live` this is already done. Service hostname `widgetcdn`, bucket `4gfpg-widgetcdn`.

## Release

[`.github/workflows/release.yml`](../.github/workflows/release.yml) runs `bun scripts/publish-cdn.ts` on a `v*` tag, then `npm publish`. The script writes both objects and purges `latest`.

GitHub Actions secrets:

| Secret | Zerops value |
|--------|----------------|
| `WIDGET_S3_ENDPOINT` | service `apiUrl` (`https://storage-prg1.zerops.io`) |
| `WIDGET_S3_BUCKET` | `bucketName` |
| `WIDGET_S3_ACCESS_KEY_ID` | `accessKeyId` |
| `WIDGET_S3_SECRET_ACCESS_KEY` | `secretAccessKey` |
| `ZEROPS_WIDGET_SERVICE_ID` | `serviceId` |
| `ZEROPS_API_TOKEN` | token that can `PUT …/service-stack/{id}/purge-cdn/…` |

Region defaults to `us-east-1`. API host defaults to `https://api.app-prg1.zerops.io`. Do not commit the keys.

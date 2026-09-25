# @cusuai/web-sdk

[![CI](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cusuai/cusu-web-sdk/main/docs/badges/coverage.json)](./docs/testing.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Framework-agnostic **customer chat + voice widget** for [Cusu](https://cusuai.com). Call `initialize` once; the messenger mounts into a Shadow DOM host on your page (no iframe CDN). Works with Svelte, React, Vue, or a plain `<script>` tag.

```bash
npm install @cusuai/web-sdk
# or: bun add @cusuai/web-sdk / pnpm add @cusuai/web-sdk / yarn add @cusuai/web-sdk
```

---

## What you get

- Floating launcher + chat panel (text, attachments, ratings)
- Optional **Realtime voice** calls (WebRTC; server-minted session)
- Dictation via `/v1/transcribe` (Bearer public key)
- `identify` for logged-in customers (optional HMAC signature from your backend)
- Locales: English (`en`), Bulgarian (`bg`), Czech (`cs`), Slovak (`sk`), Spanish (`es`), German (`de`), Estonian (`et`), French (`fr`), Polish (`pl`), Hungarian (`hu`), Italian (`it`), Lithuanian (`lt`), Latvian (`lv`), Dutch (`nl`), Norwegian Bokmål (`no`), Portuguese (`pt`), Danish (`da`), Slovenian (`sl`), Croatian (`hr`), Serbian (`sr`), Macedonian (`mk`), Romanian (`ro`), Swedish (`sv`), and Finnish (`fi`); chrome follows group language from boot, or page/`config.locale` when reply locale is `auto`
- Published builds: **ES module** (`dist/index.js`) + **IIFE** script tag on the Zerops CDN (`widget/<version>/cusu.js`, global `Cusu`)

---

## Before you start

You need a running Cusu service and a **group** configured for the widget:

| Item | Where | Example |
|------|--------|---------|
| Group id | Dashboard / install docs | `grp_…` |
| Public API key | Widget settings (`pk_…`) | Browser-safe; restrict with **allowed origins** |
| Identify secret (optional) | Group settings (`isk_…`) | **Server only** — never ship to the browser |

The SDK talks to the public group surface (`GET/POST /v1/group/…`, `WS /v1/ws/chat`). Wire details: [docs/protocol.md](./docs/protocol.md).

---

## Quick start

```js
import Cusu from '@cusuai/web-sdk';

Cusu.onError((error) => {
  console.warn('[cusu]', error.code, error.message);
});

Cusu.initialize({
  group: 'grp_…',
  apiKey: 'pk_…',
  // locale: 'en',       // optional; used when reply locale is auto (or as fallback if boot has no language)
  // showLauncher: true  // default; set false for a headless launcher
});

// Optional: attach a logged-in customer (see Identify below)
Cusu.identify('user_123', {
  name: 'Jane Doe',
  email: 'jane@shop.test',
  gender: 'female'
});

Cusu.open();
```

**Order that matters**

1. Prefer registering `onError` before `initialize`.
2. Always `initialize` first — the widget boots asynchronously.
3. `identify` may be called before boot finishes; calls are queued and flushed when ready.
4. Call `reset()` on host logout so the next visitor (or the next logged-in customer) does not inherit conversations.
5. Call `destroy()` when tearing down a SPA route that should fully remove the widget.

---

## Install options

### ES module (recommended)

```js
import Cusu from '@cusuai/web-sdk';
```

Types ship with the package (`dist/index.d.ts`).

### Script tag (Shopify, Shoptet, plain HTML)

No package manager. Paste this before `</body>` in the theme (`theme.liquid` on Shopify). Pin the version — `latest` can stay cached for up to 30 days.

```html
<script src="https://storage.cdn.zerops.app/4gfpg-widgetcdn/widget/0.2.0/cusu.js"></script>
<script>
  Cusu.initialize({
    group: 'grp_…',
    apiKey: 'pk_…'
  });
</script>
```

The script exposes a global `Cusu` with the same API as the default export. The shop origin must be on the public key's allowed origins. Layout, cache, and how a release publishes the file: [docs/widget-cdn.md](./docs/widget-cdn.md).

---

## Configuration

`Cusu.initialize(config)` accepts:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `group` | `string` | yes | Stable group id (`grp_…`) from your Cusu install |
| `apiKey` | `string` | yes | Public API key (`pk_…`) |
| `apiUrl` | `string` | no | API base URL. Defaults to `https://api.cusuai.com` |
| `locale` | `'en' \| 'bg' \| 'cs' \| 'sk' \| 'es' \| 'de' \| 'et' \| 'fr' \| 'pl' \| 'hu' \| 'it' \| 'lt' \| 'lv' \| 'nl' \| 'no' \| 'pt' \| 'da' \| 'sl' \| 'hr' \| 'sr' \| 'mk' \| 'ro' \| 'sv' \| 'fi'` | no | Preferred UI locale when boot `reply_locale` is `auto`; otherwise fallback if boot language is missing/unsupported |
| `showLauncher` | `boolean` | no | Floating FAB; default `true` |

Calling `initialize` again tears down the previous instance and boots a new one.

---

## Public API

| Method | Description |
|--------|-------------|
| `initialize(config)` | Mount the widget (async boot) |
| `identify(id, traits?)` | Link the visitor to your customer id + traits |
| `open()` / `close()` | Open or close the panel |
| `isOpened()` | `boolean` — panel open state |
| `showLauncher()` / `hideLauncher()` | Toggle the floating button at runtime |
| `reset()` | New anonymous visitor: rotate `cusu_vid`, clear local history, reboot if initialized |
| `destroy()` | Unmount and clear runtime state |
| `onError(handler \| null)` | Subscribe to recoverable SDK errors (or clear) |

### Headless launcher

Hide the FAB and open from your own CTA:

```js
Cusu.initialize({
  group: 'grp_…',
  apiKey: 'pk_…',
  showLauncher: false
});

document.querySelector('#help')?.addEventListener('click', () => Cusu.open());
```

### Errors

```js
Cusu.onError((error) => {
  // error.code — e.g. credits_exhausted
  // error.message — human-readable detail
});
```

---

## Identify (logged-in customers)

```ts
type IdentifyTraits = {
  name?: string;
  email?: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  signedAt?: number;   // unix ms — from your backend when signing
  signature?: string;  // hex HMAC-SHA256 — from your backend
  [key: string]: string | number | undefined; // extra traits (not signed)
};
```

```js
Cusu.identify('user_123', {
  name: 'Jane Doe',
  email: 'jane@shop.test',
  gender: 'female'
  // + signedAt, signature when the group requires them
});
```

### Signed identify (recommended in production)

When the group has an identify secret (`isk_…`), unsigned `identify` is **rejected**. Sign on your **backend** only — use [`@cusuai/node`](https://github.com/cusuai/cusu-node-sdk) `identifySign` (do not put `isk_…` in the browser).

```bash
npm install @cusuai/node
```

```ts
import { identifySign } from '@cusuai/node';

// POST /api/cusu-identify — body: { visitorId } from the browser (cusu_vid cookie).
// Take externalId + traits from your authenticated session / DB.
app.post('/api/cusu-identify', (req, res) => {
  const visitorId = String(req.body.visitorId ?? '').trim();
  res.json(
    identifySign({
      isk: process.env.CUSU_IDENTIFY_SECRET!,
      visitorId,
      externalId: req.user.id,
      traits: {
        name: req.user.name,
        email: req.user.email,
        gender: req.user.gender
      }
    })
  );
});
```

Browser:

```js
const visitorId = document.cookie
  .split('; ')
  .find((row) => row.startsWith('cusu_vid='))
  ?.split('=')[1];

const identity = await fetch('/api/cusu-identify', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  credentials: 'same-origin',
  body: JSON.stringify({ visitorId })
}).then((r) => r.json());

Cusu.identify(identity.externalId, identity);
```

On **logout**, call `reset()` before the next `identify`. `destroy()` + `initialize()` is not enough: the same `cusu_vid` cookie and local conversation list would keep the previous customer's threads. After `identify`, the SDK replaces local history with that customer's threads from the server.

```js
Cusu.reset();
```

Package docs: [cusuai/cusu-node-sdk](https://github.com/cusuai/cusu-node-sdk). Full protocol notes: [docs/protocol.md](./docs/protocol.md). Integrator security checklist: [SECURITY.md](./SECURITY.md).

---

## Framework notes

The SDK is a singleton that mounts into `document`. Use it from any framework the same way — in an effect / `onMount` / `useEffect`, not during SSR.

```js
// React (client component / useEffect)
useEffect(() => {
  Cusu.initialize({ group, apiKey });
  return () => Cusu.destroy();
}, [group, apiKey]);
```

```js
// Svelte
onMount(() => {
  Cusu.initialize({ group, apiKey });
  return () => Cusu.destroy();
});
```

Do not call `initialize` during server render. Guard with `typeof document !== 'undefined'` if your bundler still evaluates the module on the server.

---

## Voice & browser requirements

- **Chat** needs a modern browser with WebSocket + `fetch`.
- **Voice calls** need microphone permission and WebRTC (Realtime path only).
- Prefer **HTTPS** (and **WSS**) in production; public keys should use **allowed origins**.
- Visitor id lives in cookie `cusu_vid` (`SameSite=Lax`, readable by JS).

---

## Development (this repository)

Requires [Bun](https://bun.sh) 1.1+.

```bash
git clone https://github.com/cusuai/cusu-web-sdk.git
cd cusu-web-sdk
bun install

bun run dev                 # watch build → dist/
bun run test                # unit tests
bun run test:coverage       # text table + coverage/lcov.info
bun run test:coverage:check # pure-module ≥ 90% floors
bun run lint                # Biome
bun run check               # svelte-check
bun run build               # production ES + IIFE
bun run audit               # dependency advisories (moderate+)
bun run ci                  # full local gate (same as CI except Gitleaks)
```

Optional secret scan locally:

```bash
brew install gitleaks
gitleaks detect --source . --verbose
```

### Docs for contributors & auditors

| Doc | Topic |
|-----|--------|
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Setup, PR checklist, i18n |
| [docs/testing.md](./docs/testing.md) | Unit tests & coverage policy |
| [docs/security-ci.md](./docs/security-ci.md) | Audit, Gitleaks, CI artifacts |
| [docs/protocol.md](./docs/protocol.md) | Backend wire protocol |
| [SECURITY.md](./SECURITY.md) | Reporting & integrator hardening |
| [CHANGELOG.md](./CHANGELOG.md) | Release notes |

---

## License

[MIT](./LICENSE) © Cusu

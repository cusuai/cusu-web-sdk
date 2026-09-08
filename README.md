# @cusuai/web-sdk

[![CI](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cusuai/cusu-web-sdk/main/docs/badges/coverage.json)](./docs/testing.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Framework-agnostic **customer chat + voice widget** for [Cusu](https://cusu.ai). Call `initialize` once; the messenger mounts into a Shadow DOM host on your page (no iframe CDN). Works with Svelte, React, Vue, or a plain `<script>` tag.

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
- Locales: English (`en`) and Czech (`cs`); chrome follows the group language from boot
- Published builds: **ES module** (`dist/index.js`) + **IIFE** (`dist/cusu.iife.js`, global `Cusu`)

---

## Before you start

You need a running Cusu service and a **group** configured for the widget:

| Item | Where | Example |
|------|--------|---------|
| Group slug | Dashboard / install docs | `acme-support` |
| Service base URL | Your API host | `https://api.example.com` |
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
  group: 'acme-support',
  apiUrl: 'https://api.example.com',
  apiKey: 'pk_…',
  // locale: 'en',       // optional fallback if boot has no renderable language
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
4. Call `destroy()` when tearing down a SPA route that should fully remove the widget.

---

## Install options

### ES module (recommended)

```js
import Cusu from '@cusuai/web-sdk';
```

Types ship with the package (`dist/index.d.ts`).

### Script tag (IIFE)

After install (or from your CDN of the published `dist/`):

```html
<script src="https://cdn.example.com/cusu.iife.js"></script>
<script>
  Cusu.initialize({
    group: 'acme-support',
    apiUrl: 'https://api.example.com',
    apiKey: 'pk_…'
  });
</script>
```

The IIFE build exposes a global `Cusu` with the same API as the default export.

---

## Configuration

`Cusu.initialize(config)` accepts:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `group` | `string` | yes | Group slug from your Cusu install |
| `apiUrl` | `string` | yes | Cusu service base URL (HTTPS in production) |
| `apiKey` | `string` | yes | Public API key (`pk_…`) |
| `locale` | `'en' \| 'cs' \| 'sk' \| 'es' \| 'de'` | no | Fallback UI locale when boot language is missing/unsupported |
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
| `destroy()` | Unmount and clear runtime state |
| `onError(handler \| null)` | Subscribe to recoverable SDK errors (or clear) |

### Headless launcher

Hide the FAB and open from your own CTA:

```js
Cusu.initialize({
  group: 'acme-support',
  apiUrl: 'https://api.example.com',
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

When the group has an identify secret (`isk_…`), unsigned `identify` is **rejected**. Sign on your **backend** only.

1. Read (or set) the first-party cookie `cusu_vid` — that value is the `visitorId`.
2. Build the canonical string (empty optional fields are empty segments):

```text
v1\n{visitorId}\n{externalId}\n{signedAt}\n{name}\n{email}\n{phone}\n{gender}
```

3. `signature = hex(HMAC-SHA256(secret, canonical))` with `signedAt = Date.now()` (skew window ±5 minutes).
4. Return traits + `signedAt` + `signature` to the browser; pass them into `Cusu.identify`.

**Node.js example** (Express / any backend):

```js
import { createHmac } from 'node:crypto';

function signIdentify(secret, { visitorId, externalId, signedAt, name, email, phone, gender }) {
  const canonical = [
    'v1',
    visitorId,
    externalId,
    String(signedAt),
    name ?? '',
    email ?? '',
    phone ?? '',
    gender ?? ''
  ].join('\n');
  return createHmac('sha256', secret).update(canonical, 'utf8').digest('hex');
}

// POST /api/cusu-identify
app.post('/api/cusu-identify', (req, res) => {
  const externalId = String(req.body.externalId ?? '').trim();
  const traits = req.body.traits ?? {};
  const visitorId = req.cookies.cusu_vid ?? crypto.randomUUID();
  res.cookie('cusu_vid', visitorId, { path: '/', maxAge: 400 * 24 * 60 * 60 * 1000, sameSite: 'lax' });

  const signedAt = Date.now();
  const signature = signIdentify(process.env.CUSU_IDENTIFY_SECRET, {
    visitorId,
    externalId,
    signedAt,
    name: traits.name,
    email: traits.email,
    phone: traits.phone,
    gender: traits.gender
  });

  res.json({ ...traits, signedAt, signature });
});
```

Browser:

```js
const identity = await fetch('/api/cusu-identify', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  credentials: 'same-origin',
  body: JSON.stringify({
    externalId: 'user_123',
    traits: { name: 'Jane Doe', email: 'jane@shop.test', gender: 'female' }
  })
}).then((r) => r.json());

Cusu.identify('user_123', identity);
```

Full protocol notes: [docs/protocol.md](./docs/protocol.md). Integrator security checklist: [SECURITY.md](./SECURITY.md).

---

## Framework notes

The SDK is a singleton that mounts into `document`. Use it from any framework the same way — in an effect / `onMount` / `useEffect`, not during SSR.

```js
// React (client component / useEffect)
useEffect(() => {
  Cusu.initialize({ group, apiUrl, apiKey });
  return () => Cusu.destroy();
}, [group, apiUrl, apiKey]);
```

```js
// Svelte
onMount(() => {
  Cusu.initialize({ group, apiUrl, apiKey });
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

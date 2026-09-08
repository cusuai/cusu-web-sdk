# @cusuai/web-sdk

[![CI](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/cusuai/cusu-web-sdk/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Framework-agnostic customer chat widget for [Cusu](https://github.com/cusuai). Call `initialize` once, then `open` / `close`. Works in Svelte, React, Vue, or a plain script tag. The messenger UI is bundled and mounted into a Shadow DOM host (not an iframe CDN).

## Install

```bash
npm install @cusuai/web-sdk
# or: bun add @cusuai/web-sdk
```

IIFE build (script tag): use `dist/cusu.iife.js` after install / publish (global `Cusu`).

## Usage

```js
import Cusu from '@cusuai/web-sdk';

Cusu.initialize({
  group: 'acme-support',
  apiUrl: 'https://api.example.com',
  apiKey: 'pk_…',
  locale: 'en', // optional fallback; chrome follows the group language from boot
  showLauncher: true // optional; default true
});

const identity = await fetch('/api/cusu-identify', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    externalId: 'user_123',
    traits: { name: 'Jane Doe', email: 'jane@shop.test', gender: 'female' }
  })
}).then((response) => response.json());

Cusu.identify('user_123', identity);

Cusu.open();
Cusu.close();
Cusu.isOpened();
Cusu.destroy();
```

When an identify secret is configured, generate `signedAt` and `signature` on
your backend, using the `cusu_vid` cookie as `visitorId`. Never expose the
`isk_…` secret in browser code. The signature is the hex HMAC-SHA256 of
`v1\n{visitorId}\n{externalId}\n{signedAt}\n{name}\n{email}\n{phone}\n{gender}`;
`traits` are not signed.

### Headless launcher

Hide the floating button and open the panel from your own CTA:

```js
Cusu.initialize({
  group: 'acme-support',
  apiUrl: 'https://api.example.com',
  apiKey: 'pk_…',
  showLauncher: false
});

document.querySelector('#help')?.addEventListener('click', () => Cusu.open());
```

You can also toggle the launcher at runtime with `Cusu.showLauncher()` / `Cusu.hideLauncher()`.

### Errors

```js
Cusu.onError((error) => {
  console.warn(error.code, error.message);
});
```

## Config

| Field | Type | Description |
|-------|------|-------------|
| `group` | `string` | Group slug from your Cusu install docs |
| `apiUrl` | `string` | Cusu service base URL |
| `apiKey` | `string` | Public API key (`pk_…`) |
| `locale` | `'en' \| 'cs'` | UI locale (optional) |
| `showLauncher` | `boolean` | Floating FAB (default `true`) |

## Development

```bash
bun install
bun run dev                 # watch build → dist/
bun run test
bun run test:coverage       # text + coverage/lcov.info
bun run test:coverage:check # pure-module ≥90% floors
bun run audit               # bun audit (moderate+)
bun run lint
bun run check
bun run build
bun run ci                  # full local gate (includes audit)
```

- Coverage policy: [docs/testing.md](./docs/testing.md)
- CI scanners (audit, Gitleaks, coverage artifacts): [docs/security-ci.md](./docs/security-ci.md)
- Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Security reporting & integrator notes: [SECURITY.md](./SECURITY.md)

## License

MIT

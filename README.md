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

Cusu.identify('user_123', {
  name: 'Jane Doe',
  email: 'jane@shop.test',
  gender: 'female'
});

Cusu.open();
Cusu.close();
Cusu.isOpened();
Cusu.destroy();
```

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
bun run dev      # watch build → dist/
bun run test
bun run test:coverage
bun run lint
bun run check
bun run build
bun run ci
```

See [docs/testing.md](./docs/testing.md) for coverage policy and [CONTRIBUTING.md](./CONTRIBUTING.md) for PR expectations.

## License

MIT

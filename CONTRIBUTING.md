# Contributing

Thanks for helping with `@cusuai/web-sdk`.

## Setup

- [Bun](https://bun.sh) 1.1+
- `bun install`

## Workflow

1. `bun run dev` — rebuild `dist/` on change
2. Make changes in `src/`
3. `bun run test` — unit tests (`bun:test`)
4. `bun run lint` — Biome
5. `bun run check` — `svelte-check`
6. `bun run build` — production ES + IIFE

Or run everything: `bun run ci`.

## i18n (Paraglide)

- Edit `messages/en.json` and `messages/cs.json`
- Vite plugin recompiles `src/paraglide/` on build; you can also run:
  `bunx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide`
- Commit generated `src/paraglide/` output
- Call strings via `import * as m from './paraglide/messages.js'`

## Tests

- Colocate `*.test.ts` next to pure modules
- Prefer testing extracted helpers (`waveform`, `speech`, `vad`, `urls`, `history`, …)
- Do not add Svelte component harnesses unless agreed
- See [docs/testing.md](./docs/testing.md)

## PR checklist

- [ ] `bun run ci` passes
- [ ] New user-facing strings have `en` + `cs` messages
- [ ] Public API / wire changes documented in README or `docs/protocol.md`
- [ ] CHANGELOG updated for user-visible changes

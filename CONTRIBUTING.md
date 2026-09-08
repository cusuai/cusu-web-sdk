# Contributing

Thanks for helping with `@cusuai/web-sdk`.

## Setup

- [Bun](https://bun.sh) 1.1+
- `bun install`

## Workflow

1. `bun run dev` — rebuild `dist/` on change
2. Make changes in `src/`
3. `bun run test` — unit tests (`bun:test`)
4. `bun run test:coverage && bun run test:coverage:check` — before opening a PR that touches logic
5. `bun run lint` — Biome
6. `bun run check` — `svelte-check`
7. `bun run build` — production ES + IIFE
8. `bun run audit` — dependency advisories (same gate as CI)

Or run everything local CI runs (including the same audit gate): `bun run ci`.

Secret scanning in GitHub Actions uses the **Gitleaks CLI** (no org license).
Optional locally:

```bash
brew install gitleaks
gitleaks detect --source . --verbose --redact
```

## i18n (Paraglide)

- Edit `messages/en.json` and `messages/cs.json`
- Vite plugin recompiles `src/paraglide/` on build; you can also run:
  `bunx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide`
- Commit generated `src/paraglide/` output
- Call strings via `import * as m from './paraglide/messages.js'`

## Tests & coverage

- Colocate `*.test.ts` next to pure modules
- Prefer testing extracted helpers (`waveform`, `speech`, `vad`, `urls`, `history`, …)
- Do not add Svelte component harnesses unless agreed
- Pure modules must stay **≥ 90%** line/function coverage; see [docs/testing.md](./docs/testing.md)
- CI uploads `coverage/lcov.info` as an artifact — see [docs/security-ci.md](./docs/security-ci.md)

## PR checklist

- [ ] `bun run ci` passes locally
- [ ] New user-facing strings have `en` + `cs` messages
- [ ] Public API / wire changes documented in README or `docs/protocol.md`
- [ ] CHANGELOG updated for user-visible changes
- [ ] No secrets in the diff (Gitleaks will fail the PR if you slip)

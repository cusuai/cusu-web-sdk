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

## Releasing

First publish (package does not exist on npm yet) is local:

```bash
npm login
bun run ci
npm publish
```

That creates `@cusuai/web-sdk`. Then on npmjs.com open the package **Access** page and add a GitHub Actions trusted publisher:

- Organization: `cusuai`
- Repository: `cusu-web-sdk`
- Workflow filename: `release.yml`
- Environment: leave empty
- Allowed actions: `npm publish`

Later versions: bump `package.json` + CHANGELOG, merge to `main`, tag `vX.Y.Z` (must match `package.json`), push the tag. [`.github/workflows/release.yml`](./.github/workflows/release.yml) uploads the script bundle, then publishes via OIDC. Do not store an `NPM_TOKEN`.

The tag pipeline needs these GitHub Actions secrets (see [docs/widget-cdn.md](./docs/widget-cdn.md)):

- `WIDGET_S3_ENDPOINT`
- `WIDGET_S3_BUCKET`
- `WIDGET_S3_ACCESS_KEY_ID`
- `WIDGET_S3_SECRET_ACCESS_KEY`
- `ZEROPS_API_TOKEN`
- `ZEROPS_WIDGET_SERVICE_ID`

The upload runs before `npm publish`. If it fails, fix the secret and re-run the workflow; the version is not on npm yet.

## PR checklist

- [ ] `bun run ci` passes locally
- [ ] New user-facing strings have `en` + `cs` messages
- [ ] Public API / wire changes documented in README or `docs/protocol.md`
- [ ] CHANGELOG updated for user-visible changes
- [ ] No secrets in the diff (Gitleaks will fail the PR if you slip)

# Security & CI (open source)

This repository publishes `@cusuai/web-sdk` as open source. CI is meant to be
**readable evidence** that we run dependency review, secret scanning, and
unit-test coverage on every change — useful both for contributors and for
security / compliance reviews (for example SOC 2 Security TSC readiness).

## What runs on every push / PR

Workflow: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

| Job / step | Tool | What it proves |
|------------|------|----------------|
| Install | `bun install --frozen-lockfile` | Reproducible deps from `bun.lock` |
| Lint | Biome (`bun run lint`) | Format + static lint |
| Types | `svelte-check` (`bun run check`) | TypeScript / Svelte soundness |
| Unit tests + coverage | `bun run test:coverage` | Behavior + coverage floors |
| Pure-module floors | `bun run test:coverage:check` | ≥ 90% lines/fns on listed helpers |
| Build | `vite build` | ES + IIFE bundles still produce |
| Dependency audit | `bun audit --audit-level=moderate` | Known CVEs in the lockfile |
| Secret scan | [Gitleaks](https://github.com/gitleaks/gitleaks) | No accidental secrets in the tree / history of the checkout |

All of the above must pass for `main` and for pull requests.

## Dependency audit

```bash
bun audit --audit-level=moderate
```

- Uses Bun’s built-in advisory database against `bun.lock`.
- CI fails on **moderate** and above.
- To ignore a false positive temporarily: `bun audit --ignore=<CVE-ID>` (document the reason in the PR).

We do **not** vendor a separate npm-audit JSON report; the CI log is the artifact.

## Secret scanning

CI installs the official [Gitleaks CLI](https://github.com/gitleaks/gitleaks)
(pinned release) and runs:

```bash
gitleaks detect --source . --verbose --redact
```

Checkout uses `fetch-depth: 0`, so the scan covers **git history**, not only the
working tree. Config: [`.gitleaks.toml`](../.gitleaks.toml).

We intentionally do **not** use `gitleaks/gitleaks-action@v2+`. That wrapper
requires a `GITLEAKS_LICENSE` secret for organization repositories (free/paid
key from gitleaks.io). The CLI itself remains usable without a license and is
a better fit for a public open-source repo.

Locally (optional):

```bash
# brew install gitleaks
gitleaks detect --source . --verbose --redact
```

Allowlists only cover **intentional** demo placeholders (for example `pk_…` /
`isk_…` shapes in docs), never real credentials.

If Gitleaks fails:

1. Rotate the exposed credential immediately.
2. Remove it from git history if it was committed.
3. Prefer environment variables / dashboard-issued secrets — never commit `isk_…`
   identify secrets or private keys.

See also [SECURITY.md](../SECURITY.md).

## Coverage (visible in CI)

```bash
bun run test:coverage        # text table + coverage/lcov.info
bun run test:coverage:check  # enforce pure-module floors from lcov
```

Configuration: [`bunfig.toml`](../bunfig.toml)

- Reporters: **text** (CI log) + **lcov** (`coverage/lcov.info` artifact).
- Ignored paths: generated Paraglide, Svelte UI, and orchestration shells (`chat.svelte.ts`, Realtime WebRTC helper, public `index.ts`, …) — see [testing.md](./testing.md).
- Bun per-file floor on remaining (mostly pure) files: **≥ 90%** lines and functions.
- Extra explicit table via `scripts/check-coverage.ts` for the published pure-module list (same 90% floor).

CI uploads the `coverage/` directory as a workflow artifact named `coverage-lcov`
(retention 14 days) so reviewers can download `lcov.info` without re-running tests.

Policy detail and “what we do not unit-test”: [testing.md](./testing.md).

## Badges

The README CI badge points at this workflow. Coverage is not hosted on a third-party
SaaS by default (keeps the OSS surface simple); the text summary + lcov artifact
are the source of truth in Actions.

## Related scripts

| Script | Purpose |
|--------|---------|
| `bun run ci` | lint → check → coverage → pure floors → build |
| `bun run audit` | dependency advisories |
| `bun run test:coverage` | unit tests with coverage reporters |
| `bun run test:coverage:check` | pure-module policy gate |

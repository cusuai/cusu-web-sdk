# Testing

## Runner

```bash
bun test src                 # fast local loop (no coverage)
bun run test:coverage        # text summary + coverage/lcov.info
bun run test:coverage:check  # pure-module floors from lcov
bun run ci                   # full gate (lint, types, coverage, build, audit)
```

Uses [bun:test](https://bun.sh/docs/cli/test). Suites are colocalized as `src/*.test.ts`.

Configuration: [`bunfig.toml`](../bunfig.toml). Scanners around the same CI job: [security-ci.md](./security-ci.md).

## What we unit-test

| Area | Floor | Enforced by |
|------|-------|-------------|
| Pure modules (`waveform`, `speech`, `vad`, `urls`, `history`, `types`, `messages`, `call-status`, `playback-meter`) | **≥ 90%** lines **and** functions | `bunfig.toml` `coverageThreshold` on remaining files **and** `scripts/check-coverage.ts` |

### Intentionally excluded from coverage instrumentation

These are listed in `coveragePathIgnorePatterns` so per-file thresholds stay meaningful:

- `src/paraglide/**` — generated i18n
- `**/*.svelte` — widget UI (no component harness yet)
- `src/chat.svelte.ts`, `src/realtime-call.ts`, `src/index.ts` — WebSocket / WebRTC / public bootstrap orchestration
- `src/visitor.ts`, `src/locale.ts`, `src/markdown.ts`, `src/config.ts` — thin browser/bootstrap helpers

## What we do not unit-test (yet)

- Svelte components (`ChatWidget`, `Waveform`, `Orbit`, …)
- Real `MediaRecorder` / `AudioContext` / mic permissions
- Live WebSocket / OpenAI Realtime against a server

## How coverage shows up in CI

1. `bun run test:coverage` prints a **text table** in the Actions log.
2. The same run writes **`coverage/lcov.info`**.
3. Bun fails the step if any *instrumented* file is under 90% (after ignores).
4. `bun run test:coverage:check` prints an explicit pure-module table and fails on regression.
5. The `coverage/` folder is uploaded as the **`coverage-lcov`** artifact (14-day retention).

```bash
bun run test:coverage && bun run test:coverage:check
```

## Stability

CI runs lint, types, coverage, build, `bun audit`, and Gitleaks on every PR and on `main`. Do not weaken floors without updating this doc and calling it out in the PR.

# Testing

## Runner

```bash
bun test src
bun run test:coverage
```

Uses [bun:test](https://bun.sh/docs/cli/test). Suites are colocalized as `src/*.test.ts`.

## What we unit-test

| Area | Target | Notes |
|------|--------|-------|
| Pure modules (`waveform`, `speech`, `vad`, `urls`, `history`, `types`, `messages`, `call-status`) | **≥ 90%** line coverage | Critical algorithms |
| Overall `src/` | **≥ 45%** | UI, Web Audio, MediaRecorder, WebSocket orchestration intentionally light |

## What we do not unit-test (yet)

- Svelte components (`ChatWidget`, `Waveform`, `Orbit`, …)
- Real `MediaRecorder` / `AudioContext` / mic permissions
- Live WebSocket against a server

## Stability

CI runs `bun run ci` (lint + check + coverage + build) on every PR. Failures block merge.

Coverage is reported by `bun test --coverage`. Pure-module coverage should not regress below the targets above when changing tape/VAD/protocol helpers.

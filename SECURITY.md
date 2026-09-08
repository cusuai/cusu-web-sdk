# Security

## Reporting

Please report security issues privately to the maintainers (GitHub Security Advisories on [cusuai/cusu-web-sdk](https://github.com/cusuai/cusu-web-sdk) preferred). Do not open public issues for undisclosed vulnerabilities.

## Automated checks (this repository)

Every push and pull request runs:

- **Dependency audit** — `bun audit --audit-level=moderate`
- **Secret scan** — Gitleaks on the checkout
- **Unit tests + coverage floors** — including pure-module ≥ 90% gates

Details for contributors and auditors: [docs/security-ci.md](./docs/security-ci.md).

## Notes for integrators

- Public API keys (`pk_…`) are intended for browser use. Treat them as publishable but rotate if abused.
- Restrict each key with **allowed origins** in the Cusu dashboard when you know your site origin(s).
- Sign `identify` on your **backend** with the group identify secret (`isk_…`). Never put that secret in the browser. When a secret is configured, unsigned identify is rejected.
- Customer **voice calls** use OpenAI Realtime only (`POST /v1/group/:group/realtime-session` + WebRTC). Dictation uses `POST /v1/transcribe` with the same Bearer `pk_`. Do not call `/v1/tts` from the widget.
- After minting a Realtime session, the SDK forwards the one-time `grant` over the chat WebSocket (`chat.voice.ready`) before voice commits/tools are accepted.
- The chat WebSocket authenticates with `key` as a query parameter (`/v1/ws/chat?group=&key=`). Prefer HTTPS/WSS. Thread access is bound to the visitor id.
- The service enforces Redis-backed rate limits and create quotas across instances; Redis is required in production.
- Visitor id is stored in a first-party cookie `cusu_vid` (readable by JS, `SameSite=Lax`). Call `reset()` on host logout so a later customer cannot reopen the previous visitor's threads.
- Do not commit real API keys, identify secrets, or customer data into this repository.

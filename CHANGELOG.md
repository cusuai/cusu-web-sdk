# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-09-14

### Added
- `reset()` — new anonymous visitor on host logout (rotates `cusu_vid`, clears local thread history, reboots)
- `identify` returns the customer's widget thread history and the SDK hydrates the conversation list
- `identify` first-class trait `gender?: 'male' | 'female' | 'other'`
- Signed identify fields `signedAt` / `signature` (HMAC from your backend)
- Realtime voice grant forwarding (`chat.voice.ready`)
- Bearer `pk_` on dictation `/v1/transcribe`
- Optional `apiUrl` override; defaults to `https://api.cusuai.com`
- Widget locales: `bg`, `et`, `lt`, `lv`, `no`
- Offline waiting copy uses `next_open_at` + group timezone when the inbox is uncovered
- Public npm package (`publishConfig.access: public`) and GitHub Actions release on `v*` tags (OIDC trusted publishing)
- CI dependency audit (`bun audit`), Gitleaks CLI secret scan (no Action license), LCOV coverage artifact + pure-module floors
- README coverage badge (`docs/badges/coverage.json` + shields.io endpoint) and Actions job summary
- Docs: [docs/security-ci.md](./docs/security-ci.md)

### Changed
- Docs treat `config.group` as the stable group id (`grp_…`), not a human slug
- README rewritten for open-source launch (quick start, API, signed identify, frameworks, contrib)
- Widget scrollbars are hidden (scroll still works)
- Customer voice calls are Realtime-only (no legacy VAD/TTS call fallback)
- Widget and voice endpoints are versioned (`/v1/group/…`, `/v1/ws/chat`, `/v1/transcribe`)

## [0.1.0] - 2026-09-03

### Added
- Public API: `initialize`, `identify`, `open`, `close`, `isOpened`, `destroy`, `onError`
- `showLauncher` config plus `showLauncher()` / `hideLauncher()`
- Paraglide i18n (`en` base, `cs`)
- Unit tests for pure modules + coverage script
- Biome lint/format, GitHub Actions CI
- Protocol and testing docs

### Changed
- Config field `company` renamed to `group` (slug); wire paths still use `/shop` and `company`
- Internal orchestrator renamed `ShopChat` → `GroupChat`

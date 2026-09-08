# Backend protocol

The SDK talks to a Cusu service. Public config uses **`group`** (slug). On the wire, several fields/paths still say **`company`** — they take the same slug.

## Map

| SDK | Wire (current) |
|-----|----------------|
| `config.group` | Path `:company` / body `company` / query `company` / optional query `group` |
| Gate | `GET /shop/:company` + `Authorization: Bearer {apiKey}` (+ optional `Origin`) |
| Identify | `POST /shop/:company/identify` body: `visitorId`, `externalId`, `name?`, `email?`, `phone?`, `gender?`, `traits?`, `signedAt?`, `signature?` |
| Realtime mint | `POST /shop/:company/realtime-session` → `{ client_secret, model, grant, … }` |
| Chat | `WS /ws/chat?company={slug}&key={apiKey}&thread?&visitor?` |
| Voice ready | WS `{ type: "chat.voice.ready", grant }` (one-time; enables voice commit/tool) |
| STT (dictation) | `POST /transcribe` FormData: `file`, `company`, … + `Authorization: Bearer {apiKey}` or platform JWT |
| TTS | `POST /tts` — **platform / session auth**; widget voice calls do not use this |

## Identify signature

When the group has an identify secret, `signedAt` (unix ms) and `signature` (hex HMAC-SHA256) are required. Canonical string:

```text
v1\n{visitorId}\n{externalId}\n{signedAt}\n{name}\n{email}\n{phone}\n{gender}
```

Empty optional fields are empty segments. Skew window is ±5 minutes. Sign on your server; never ship `isk_…` to the browser.

## Abuse controls (service)

- Redis-backed rate limits and thread-create quotas (shared across replicas).
- Public key `allowedOrigins`: empty = unrestricted; non-empty = exact `Origin` match.
- Chat thread boot rejects visitor mismatch when the thread already has a `visitorId`.
- Voice `chat.voice.commit` / `chat.voice.tool` require an activated Realtime grant.

Language for STT/TTS and widget chrome follows the group language. `GET /shop/:company` returns `language`, `rating_scale`, and `voice_realtime`.

After a ticket is `resolved`, the widget sends `chat.rate` `{ value }`. The server replies `chat.rated`, or `chat.error` if invalid.

## Platform note

Authenticated platform APIs use `/v1/groups/:id` (`grp_…`). The **widget** public surface remains `/shop/…` until the service renames it.

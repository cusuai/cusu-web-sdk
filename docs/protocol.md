# Backend protocol

The SDK talks to a Cusu service. Public config uses **`group`** (slug). Some request bodies still say **`company`** — they take the same slug.

## Map

| SDK | Wire |
|-----|------|
| `config.group` | Path `:group` / body `company` / query `group` (legacy query `company` still accepted) |
| Gate | `GET /v1/group/:group` + `Authorization: Bearer {apiKey}` (+ optional `Origin`) |
| Identify | `POST /v1/group/:group/identify` body: `visitorId`, `externalId`, … → `{ customer, threads }` (this group's history for the identified customer) |
| Realtime mint | `POST /v1/group/:group/realtime-session` → `{ client_secret, model, grant, … }` |
| Chat | `WS /v1/ws/chat?group={slug}&key={apiKey}&thread?&visitor?` |
| Voice ready | WS `{ type: "chat.voice.ready", grant }` (one-time; enables voice commit/tool) |
| STT (dictation) | `POST /v1/transcribe` FormData: `file`, `company`, … + `Authorization: Bearer {apiKey}` or platform JWT |
| TTS | `POST /v1/tts` — **platform / session auth**; widget voice calls do not use this |

## Identify signature

When the group has an identify secret, `signedAt` (unix ms) and `signature` (hex HMAC-SHA256) are required. Canonical string:

```text
v1\n{visitorId}\n{externalId}\n{signedAt}\n{name}\n{email}\n{phone}\n{gender}
```

Empty optional fields are empty segments. Skew window is ±5 minutes. Sign on your server; never ship `isk_…` to the browser.

## Abuse controls (service)

- Redis-backed rate limits and thread-create quotas (shared across replicas).
- Public key `allowedOrigins`: empty = unrestricted; non-empty = exact `Origin` match.
- Chat thread boot rejects visitor mismatch when the thread already has a `visitorId`, unless the visitor is identified as that thread's customer.
- `Cusu.reset()` mints a new `visitorId` (cookie `cusu_vid`) and drops local thread history. `destroy()` does not. `identify` then returns the customer's threads so login can restore them.
- Voice `chat.voice.commit` / `chat.voice.tool` require an activated Realtime grant.

Language for STT/TTS and widget chrome follows the group language. `GET /v1/group/:group` returns `language`, `rating_scale`, and `voice_realtime`.

After a ticket is `resolved`, the widget sends `chat.rate` `{ value }`. The server replies `chat.rated`, or `chat.error` if invalid.

## Platform note

Authenticated platform APIs use `/v1/groups/:id` (`grp_…`). The widget public surface is `/v1/group/:group` (slug or id).

# Backend protocol

The SDK talks to a Cusu service. Public config uses **`group`** (slug). On the wire, several fields/paths still say **`company`** — they take the same slug.

## Map

| SDK | Wire (current) |
|-----|----------------|
| `config.group` | Path `:company` / body `company` / query `company` |
| Gate | `GET /shop/:company` + `Authorization: Bearer {apiKey}` |
| Identify | `POST /shop/:company/identify` body: `visitorId`, `externalId?`, `name?`, `email?`, `phone?`, `gender?` (`male` \| `female` \| `other`), `traits?` |
| Chat | `WS /ws/chat?company={slug}&key={apiKey}&thread?&visitor?` |
| STT | `POST /transcribe` FormData: `file`, `company`, … |
| TTS | `POST /tts` JSON: `text`, `company`, … |

Language for STT/TTS and widget chrome follows the group language. `GET /shop/:company` returns `language` and `rating_scale` (`stars_5` \| `thumbs` \| `faces_3`); optional `locale` on `initialize` is a fallback when boot has no supported locale.

After a ticket is `resolved`, the widget sends `chat.rate` `{ value }` (1–5 stars, `0`/`1` thumbs, or 1–3 faces). The server replies `chat.rated`, or `chat.error` if the thread is not resolved, already rated, or the value is invalid. Other close reasons keep the closed banner only.

## Platform note

Authenticated platform APIs are migrating (`/v1/groups/:id` with `grp_…` ids vs `/companies/:slug/…`). The **widget** public surface remains `/shop/…` until the service renames it. This SDK will follow the service; do not invent `/groups/:slug` for the widget (collides with `/v1/groups/:id`).

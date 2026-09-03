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

Language for STT/TTS is resolved server-side from the group record when `company` is sent; UI `locale` only affects widget chrome.

## Platform note

Authenticated platform APIs are migrating (`/v1/groups/:id` with `grp_…` ids vs `/companies/:slug/…`). The **widget** public surface remains `/shop/…` until the service renames it. This SDK will follow the service; do not invent `/groups/:slug` for the widget (collides with `/v1/groups/:id`).

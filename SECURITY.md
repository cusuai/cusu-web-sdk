# Security

## Reporting

Please report security issues privately to the maintainers (GitHub Security Advisories on [cusuai/cusu-web-sdk](https://github.com/cusuai/cusu-web-sdk) preferred). Do not open public issues for undisclosed vulnerabilities.

## Notes for integrators

- Public API keys (`pk_…`) are intended for browser use. Treat them as publishable but rotate if abused.
- The chat WebSocket currently authenticates with `key` as a query parameter (`/ws/chat?company=&key=`). Prefer HTTPS/WSS and short-lived or scoped keys.
- Visitor id is stored in a first-party cookie `cusu_vid` (readable by JS, `SameSite=Lax`).
- Do not commit real API keys or customer data into this repository.

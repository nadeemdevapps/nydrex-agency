# Nydrex audit — 7 October 2026

The existing five-page website was continued against `NYDREX_BUILD_BRIEF.md` and the supplied visual references.

## Fixed

- Added the missing `custom-software` slug so service links, section navigation and its illustration resolve correctly.
- Fixed desktop service-menu pointer boundaries, click/keyboard opening, Escape handling, focus restoration and closing after navigation.
- Added a description, scrolling and explicit navigation closing to the mobile dialog.
- Strengthened enquiry validation for international phone digits, bounded input lengths and valid service/budget choices.
- Connected required fields and validation errors with accessible attributes; moved focus to the brief review heading.
- Preserved the brief when editing; added clipboard success/failure feedback and clear wording about sending in WhatsApp.
- Replaced overlapping absolute-positioned automation nodes with a responsive connected flow.
- Removed inert buttons from the decorative interface composition; named switches and weekday controls and exposed selected/disabled states.
- Self-hosted Outfit and IBM Plex Mono with their licenses; added reusable small-text/radius tokens and complete reduced-motion handling.
- Added a social description through the existing platform identity file.
- Fixed 404 page titles and descriptions and added `noindex` while preserving HTTP 404 status.
- Hardened crawler origin handling for proxy headers and removed an unsupported hard-coded sitemap modification date.
- Made startup work from its script directory and detach the server reliably.
- Removed generated Vercel output from version control, preserving the locally built files.
- Isolated generic platform identity tests from the website's actual assets; preserved the platform implementation and original tests.

## Verification

| Check                                                | Result                                                                                                                            |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Production build                                     | Passed                                                                                                                            |
| TypeScript                                           | Passed                                                                                                                            |
| Test suite                                           | 258 passed, 0 failed                                                                                                              |
| ESLint for audited logic and test runners            | Passed                                                                                                                            |
| Brand check                                          | Passed, 0 warnings                                                                                                                |
| Five pages in development, desktop and mobile        | Visible content, no horizontal overflow, clean console                                                                            |
| Five pages from production build, desktop and mobile | Passed; no divergence from development baselines                                                                                  |
| Visual screenshot review                             | All five pages reviewed on both viewport sizes                                                                                    |
| Desktop menu and service anchor                      | Pointer movement, keyboard, Escape and section navigation verified                                                                |
| Mobile menu                                          | Focus trapping, Escape, closing and navigation verified                                                                           |
| Enquiry form                                         | Required errors, rejected invalid phone, valid brief, WhatsApp URL and edit preservation verified                                 |
| Clipboard flow                                       | Unavailable clipboard feedback verified                                                                                           |
| FAQs and interface controls                          | Accordion, repeat switch, day selection and keyboard slider verified                                                              |
| Founder contacts                                     | All three names, display numbers and WhatsApp destinations match the brief                                                        |
| SEO and crawler routes                               | Unique metadata, valid Organization/WebSite JSON-LD, home-only FAQ JSON-LD, crawler responses and social image injection verified |
| Custom 404                                           | Correct status, content, title and noindex verified                                                                               |

Browser screenshots and smoke verdicts are generated QA artifacts and are not committed. Browser QA used the `agent-browser` CLI and the repository smoke helper with a separately installed Chromium binary because this environment lacks the system libraries required by the default Playwright binary.

## Delivery behavior

The project brief is sent by the visitor in WhatsApp. There is no email delivery service, account system or database. The Work page intentionally shows Coming Soon. Public hosting and a public domain have not been configured by this audit.

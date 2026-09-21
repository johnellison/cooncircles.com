# Coaching Companion preview

Routes:

- `/coaching-companion`: proposed offer, three monthly allowances, illustrative WhatsApp conversations, comparison, theory, future session bundles and FAQs.
- `/coaching-companion/invitation`: generic first-month invitation (250 replies for 300 TND), without automatic renewal. This is public demonstration content, not a private client portal or authenticated offer.

All payment controls are local demonstrations. There is no Stripe connection, request submission, bank account disclosure, storage of form data, purchase or activation. The USD/EUR amounts in `src/lib/components/companion/offers.ts` are illustrative, not live currency quotes. Both routes are marked noindex; that is not access control.

Before taking payments, confirm prices/allowances, currency/tax/refund terms, seller relationship, permitted payer banking route, actual service availability, consent, retention and access policies. Replace demonstration flows with server-controlled prices, authenticated offer entitlements and signed, idempotent payment webhook handling. A browser success URL must never grant access. Keep private client history out of this website.

Live session bundles are future options only. There is no bookable date or session prepayment in this preview. The existing site's booking link remains on other routes; companion navigation instead leads to the plans.

## Validation

Run `npm ci`, `npm run check` and `npm run build`. The PR workflow executes those checks on Node 22. Browser review should cover both routes, desktop/mobile navigation, the two conversation examples, card/transfer and currency states, modal keyboard dismissal/focus return, and expandable FAQs/bundles.

Restored existing type-check compatibility alongside the page: missing development type packages and element-reference type, a boolean mount flag, and link buttons using the component's supported `href` API. No runtime dependency added for the new page.

Deployment scope: branch preview only. Production release is a separate decision.

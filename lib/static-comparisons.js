/**
 * The /compare routes that are React pages rather than rows in the posts table.
 *
 * Every list of comparisons on this site is built from a Postgres query, so
 * these two were invisible everywhere: the home catalogue, /llms.txt and the
 * ItemList schema all silently skipped them. They are declared here once and
 * read by each of those, so a third consumer cannot fall out of sync again.
 *
 * `updated_at` is the date the page's figures were last read from source — the
 * same value the page itself prints — not the date the file was edited.
 */
import { VERIFIED_ON, VERIFIED_ON_ERP } from './platforms.js'

export const STATIC_COMPARISONS = [
  {
    slug: 'erp-ai-platforms-2026',
    title: 'ERP AI in 2026: how Oracle, SAP, Infor, Epicor, NetSuite and Microsoft actually charge for it',
    type: 'roundup',
    pair: '6 ERP vendors · 5 pricing models',
    updated_at: VERIFIED_ON_ERP,
    summary:
      'Oracle bundles AI Agent Studio at no additional cost. Infor charges one flat fee for unlimited use. Epicor bills Prism Business Communications against outcomes. NetSuite publishes no consolidated statement, and SAP publishes no price at all. Margin protection is unpublished by every ERP vendor in the table.',
  },
  {
    slug: 'best-ai-sales-platforms-manufacturing-2026',
    title: 'Best AI Sales Platforms for Manufacturing (2026)',
    type: 'roundup',
    pair: '6 platforms · 9 criteria',
    updated_at: VERIFIED_ON,
    summary:
      'SAP Joule wins inside S/4HANA because it runs in the ERP rather than connecting to it. Salezx is the only platform publishing seat-independent pricing and a 48-hour go-live. Dynamics 365 Sales Enterprise bundles Copilot at $105/user. Agentforce is strongest on Salesforce data but metered.',
  },
]

/**
 * Shaped like a row from the posts table so the home catalogue can render it
 * through the same card as a real post. The OG route stands in for the
 * thumbnail: these pages have no /images/thumbs entry, and it is a real
 * 1200x630 PNG generated from the same data the page shows.
 */
export function staticComparisonCards() {
  return STATIC_COMPARISONS.map((c) => ({
    ...c,
    updated_at: new Date(`${c.updated_at}T00:00:00Z`),
    image: `/compare/${c.slug}/opengraph-image`,
  }))
}

// One place for the strings that appear in more than one page.

export const SITE_NAME = 'playthetech'

export const SITE_DESCRIPTION =
  'Side-by-side AI comparisons of enterprise sales agents and B2B software tools. Verified pricing, limits, and architecture from vendor documentation.'

// Change this to the address you actually read.
export const CONTACT_EMAIL = 'editor@playthetech.com'

/**
 * The one canonical origin. Every canonical tag, OG url, sitemap entry, RSS
 * guid, llms.txt link and JSON-LD @id is built from this, so the www/apex
 * choice is made here once and nowhere else.
 */
export const CANONICAL_ORIGIN = 'https://www.playthetech.com'

/**
 * Absolute origin, no trailing slash.
 *
 * Production always resolves to CANONICAL_ORIGIN. `VERCEL_PROJECT_PRODUCTION_URL`
 * is deliberately not consulted: it holds the *.vercel.app alias, and letting it
 * win would emit vercel.app canonicals from the production build — the duplicate
 * host next.config.mjs redirects away. Previews self-canonicalise to their own
 * VERCEL_URL so a preview never points Google at production.
 */
export function siteUrl() {
  const raw =
    process.env.SITE_URL ||
    (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production' && process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : null) ||
    CANONICAL_ORIGIN
  // A stale SITE_URL set to the apex would silently split ranking signals in
  // two, so normalise it back to www rather than trusting the environment.
  return raw.replace(/\/+$/, '').replace(/^https?:\/\/playthetech\.com/i, CANONICAL_ORIGIN)
}

export function absolute(path = '/') {
  return `${siteUrl()}${path.startsWith('/') ? path : `/${path}`}`
}

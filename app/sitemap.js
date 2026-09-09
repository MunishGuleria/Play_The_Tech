import { query, POSTS } from '../lib/db.js'
import { siteUrl } from '../lib/site.js'
import { getAllIndustries } from '../lib/industries.js'
import { getAllPlatforms, platformVerifiedOn, VERIFIED_ON, VERIFIED_ON_ERP } from '../lib/platforms.js'

// Static routes under /compare — they take precedence over the DB-driven [slug],
// so they never appear in the posts query and have to be listed explicitly.
const MANUFACTURING_BENCHMARK = 'best-ai-sales-platforms-manufacturing-2026'
const ERP_ROUNDUP = 'erp-ai-platforms-2026'

export const revalidate = 3600

// Published posts, industry hubs, and the home page. /admin, /api, and /request stay out.
export default async function sitemap() {
  const base = siteUrl()
  let posts = []
  try {
    posts = await query(
      `SELECT slug, updated_at FROM ${POSTS} WHERE published = TRUE ORDER BY updated_at DESC`,
    )
  } catch (err) {
    console.error('sitemap query failed:', err.message)
  }

  const newest = posts[0]?.updated_at || new Date()
  const industries = getAllIndustries()
  const platforms = getAllPlatforms()
  const platformsVerified = new Date(`${VERIFIED_ON}T00:00:00Z`)
  const erpVerified = new Date(`${VERIFIED_ON_ERP}T00:00:00Z`)

  return [
    { url: `${base}/`, lastModified: new Date(newest), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/industry`, lastModified: new Date(newest), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(newest), changeFrequency: 'weekly', priority: 0.9 },
    ...industries.map((ind) => ({
      url: `${base}/industry/${ind.slug}`,
      lastModified: new Date(newest),
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    {
      url: `${base}/compare/${MANUFACTURING_BENCHMARK}`,
      lastModified: platformsVerified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/compare/${ERP_ROUNDUP}`,
      lastModified: erpVerified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/platform`,
      // The index lists every profile, so it is as fresh as the newest pass.
      lastModified: erpVerified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...platforms.map((p) => ({
      url: `${base}/platform/${p.slug}`,
      lastModified: new Date(`${platformVerifiedOn(p)}T00:00:00Z`),
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/compare/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: 'weekly',
      priority: p.slug === 'best-ai-sales-agents-2026' ? 1.0 : 0.85,
    })),
  ]
}

import {
  getAllPlatforms,
  getBenchmarkPlatforms,
  getErpPlatforms,
  CRITERIA,
  NOT_PUBLISHED,
} from '../../lib/platforms.js'
import { SITE_NAME, absolute } from '../../lib/site.js'

const TITLE = 'AI Sales Platform Profiles (2026)'
const DESCRIPTION =
  'Verified vendor profiles of AI sales and ERP platforms: Salezx, Agentforce, Dynamics 365, SAP Joule, ServiceNow, UiPath, Oracle Fusion, Infor, Epicor and NetSuite.'

// Two research passes, two roundups. Grouping them keeps the directory honest
// about which comparison each profile was written for.
const GROUPS = [
  {
    key: 'sales',
    heading: 'AI sales and CRM platforms',
    blurb: 'Benchmarked head to head in the',
    href: '/compare/best-ai-sales-platforms-manufacturing-2026',
    linkText: 'manufacturing and complex B2B comparison',
    get: getBenchmarkPlatforms,
  },
  {
    key: 'erp',
    heading: 'ERP-native AI',
    blurb: 'AI that runs inside the ERP rather than connecting to it. Compared in the',
    href: '/compare/erp-ai-platforms-2026',
    linkText: 'ERP AI roundup',
    get: getErpPlatforms,
  },
]

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absolute('/platform') },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absolute('/platform'),
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      { url: absolute('/opengraph-image'), width: 1200, height: 630, alt: TITLE, type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [absolute('/opengraph-image')],
  },
}

export default function PlatformIndexPage() {
  const platforms = getAllPlatforms()

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: TITLE,
    itemListElement: platforms.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absolute(`/platform/${p.slug}`),
      name: p.name,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
      { '@type': 'ListItem', position: 2, name: 'Platform Profiles', item: absolute('/platform') },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="post-header-band">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <span aria-current="page">Platforms</span>
          </nav>
          <p className="eyebrow">Vendor-Documented Platform Profiles</p>
          <h1>{TITLE}</h1>
          <p className="lead">
            One page per platform, built only from what the vendor publishes about itself. Pricing tiers,
            named integrations, implementation time and governance &mdash; with &ldquo;{NOT_PUBLISHED}&rdquo;
            wherever the vendor has not written it down. Each profile carries the date its figures were
            read from source.
          </p>
        </div>
      </div>

      <div className="shell industry-hub-shell">
        {GROUPS.map((g) => {
          const group = g.get()
          if (!group.length) return null
          return (
            <section key={g.key} className="industry-section" data-reveal>
              <h2>{g.heading}</h2>
              <p className="lead">
                {g.blurb} <a href={g.href}>{g.linkText}</a>.
              </p>
              <div className="industry-hub-grid">
                {group.map((p) => {
                  const published = CRITERIA.filter((c) => p.criteria[c.key]?.value !== NOT_PUBLISHED).length
                  const entry = p.pricing.tiers.find((t) => t.price !== NOT_PUBLISHED)
                  return (
                    <a key={p.slug} className="industry-hub-card" href={`/platform/${p.slug}`} data-reveal>
                      <div className="industry-card-top">
                        <span className="industry-top-badge">{p.vendor}</span>
                      </div>
                      {/* h3, not h2 — the group heading above is the h2 now. */}
                      <h3 className="industry-card-title">{p.name}</h3>
                      <p className="industry-card-desc">{p.oneLine}</p>
                      <div className="industry-card-meta">
                        <span>
                          {entry ? entry.price : NOT_PUBLISHED} &middot; {published}/{CRITERIA.length} criteria published
                        </span>
                        <span className="industry-arrow">Read the profile &rarr;</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

import {
  getErpPlatforms,
  getPlatform,
  CRITERIA,
  VERIFIED_ON_ERP,
  NOT_PUBLISHED,
} from '../../../lib/platforms.js'
import { SITE_NAME, absolute } from '../../../lib/site.js'
import { longDate, splitAnswer } from '../../../lib/format.js'
import {
  graph,
  organizationNode,
  websiteNode,
  webPageNode,
  articleNode,
  breadcrumbNode,
  softwareNode,
  faqNode,
  itemListNode,
  AUTHOR_REF,
} from '../../../lib/schema.js'
import PostActions from '../../../components/PostActions.js'

// A static segment under /compare, so it takes precedence over the DB-driven
// [slug] route. Nothing here touches Postgres — it prerenders at build time.
const SLUG = 'erp-ai-platforms-2026'
const URL = absolute(`/compare/${SLUG}`)

const TITLE =
  'ERP AI in 2026: how Oracle, SAP, Infor, Epicor, NetSuite and Microsoft actually charge for it'
const META_TITLE = 'ERP AI Pricing & Platforms Compared (2026)'
const META_DESCRIPTION =
  'Six ERP vendors, five completely different pricing models for AI — bundled, flat-fee, outcomes-based, metered and unpublished. Compared from vendor sources.'

const SUMMARY =
  'Every ERP vendor now ships AI agents. Almost nobody compares how they charge for them — and the answer differs more than the features do. Oracle bundles it free, Infor charges one flat fee for unlimited use, Epicor bills against outcomes, NetSuite will not say, and SAP publishes no price at all.'

// The five ERP-side commercial models, plus the two existing profiles that
// complete the set. Slugs resolve to profiles on this site; SAP and Microsoft
// were verified in the earlier pass and are linked rather than re-stated.
const PRICING_MODELS = [
  {
    vendor: 'Oracle Fusion',
    slug: 'oracle-fusion-ai-agents',
    model: 'Bundled, free',
    states:
      'AI Agent Studio "available at no additional cost", included with the ERP, HCM, SCM and CX subscription.',
  },
  {
    vendor: 'Infor',
    slug: 'infor-velocity-suite',
    model: 'Flat fee, unlimited use',
    states: 'Velocity Suite is "one flat fee, no matter where you\'re starting from".',
  },
  {
    vendor: 'Epicor',
    slug: 'epicor-prism',
    model: 'Outcomes-based (on one agent)',
    states:
      'Prism Business Communications billed as "the industry\'s first ERP AI agent with outcomes-based pricing".',
  },
  {
    vendor: 'NetSuite',
    slug: 'netsuite-next',
    model: 'Unclear — bundled or metered',
    states:
      'No consolidated published statement; partner sources report both inclusion and AI Unit metering.',
  },
  {
    vendor: 'SAP Joule',
    slug: 'sap-joule',
    model: NOT_PUBLISHED,
    states: 'No list price in the capabilities guide; entitlement handled via activation.',
  },
  {
    vendor: 'Microsoft Dynamics 365 Copilot',
    slug: 'microsoft-dynamics-365-copilot',
    model: 'Per user',
    states: '$105 per user per month at the Sales Enterprise tier, with Copilot bundled into the seat.',
  },
]

// Architecture matrix. Written out rather than derived, because these columns
// are about what each vendor publishes structurally, not about the nine criteria.
const ARCHITECTURE = [
  {
    vendor: 'Oracle Fusion',
    slug: 'oracle-fusion-ai-agents',
    insideErp: 'Yes',
    builder: 'AI Agent Studio',
    marketplace: 'Yes, validated',
    mcp: NOT_PUBLISHED,
    crossVendor: NOT_PUBLISHED,
  },
  {
    vendor: 'Infor',
    slug: 'infor-velocity-suite',
    insideErp: 'Yes',
    builder: 'Agent Factory',
    marketplace: NOT_PUBLISHED,
    mcp: NOT_PUBLISHED,
    crossVendor: 'Yes, stated',
  },
  {
    vendor: 'Epicor',
    slug: 'epicor-prism',
    insideErp: 'Yes',
    builder: 'Prism Agent Foundry',
    marketplace: NOT_PUBLISHED,
    mcp: NOT_PUBLISHED,
    crossVendor: NOT_PUBLISHED,
  },
  {
    vendor: 'NetSuite',
    slug: 'netsuite-next',
    insideErp: 'Yes',
    builder: 'SuiteAgents',
    marketplace: 'SuiteCloud Developer Network',
    mcp: 'Yes, AI Connector',
    crossVendor: NOT_PUBLISHED,
  },
  {
    vendor: 'SAP Joule',
    slug: 'sap-joule',
    insideErp: 'Yes',
    builder: NOT_PUBLISHED,
    marketplace: NOT_PUBLISHED,
    mcp: NOT_PUBLISHED,
    crossVendor: NOT_PUBLISHED,
  },
]

// The five platforms carried into the nine-criteria matrix: the four new ERP
// profiles plus SAP Joule, which was verified in the earlier pass.
const MATRIX_SLUGS = [
  'oracle-fusion-ai-agents',
  'infor-velocity-suite',
  'epicor-prism',
  'netsuite-next',
  'sap-joule',
]

const VERDICT = [
  {
    who: 'Choose Oracle Fusion AI if',
    slug: 'oracle-fusion-ai-agents',
    detail:
      'you are a large enterprise already on Fusion. The bundling is genuinely generous and the published agent detail is the best in the category. Nothing here justifies migrating to Oracle.',
  },
  {
    who: 'Choose Infor Velocity Suite if',
    slug: 'infor-velocity-suite',
    detail:
      'you are a mid-market manufacturer or distributor on CloudSuite who wants predictable cost and industry-shaped agents rather than horizontal finance automation. The flat fee is the standout.',
  },
  {
    who: 'Choose Epicor Prism if',
    slug: 'epicor-prism',
    detail:
      'you run Kinetic or Prophet 21, especially in aftermarket parts distribution where Epicor’s data position is unmatched. Also the only option touching EDI and CPQ. Get the outcome definition in writing.',
  },
  {
    who: 'Choose NetSuite Next if',
    slug: 'netsuite-next',
    detail:
      'you are mid-market on NetSuite, or you want ERP data reachable from an external AI assistant. Wait for GA in your region before building a plan.',
  },
  {
    who: 'Choose SAP Joule if',
    slug: 'sap-joule',
    detail:
      'your sellers work inside S/4HANA. Unbeatable inside SAP, invisible outside it — see the full profile for the published capability list.',
  },
]

const ASK = [
  'Is the AI included in my current subscription, metered, or a separate SKU — in writing, by named feature?',
  'If metered, what is the unit, what is my allotment, and what happens when it runs out?',
  'If outcomes-based, who defines the outcome, who measures it, and is there a cap?',
  'Which named capabilities are generally available in my region and edition today, versus in preview?',
  'Can the agents reach my third-party CRM, or only your own?',
  'Does anything you publish address margin? (Expect no.)',
]

const FAQ = [
  {
    q: 'Which ERP vendor gives you AI for free?',
    a: 'Oracle. Oracle states AI Agent Studio for Fusion Applications is "available at no additional cost", and its own Fusion Insider blog states it is "included with your Oracle Fusion Cloud ERP, HCM, SCM, and CX subscription at no additional cost". The caveat is that Oracle publishes no price for the underlying Fusion subscription, so "no additional cost" only becomes meaningful once you have priced the base. Infor is the nearest alternative structurally: one flat fee for unlimited use, with implementation included — but Infor publishes no figure either.',
  },
  {
    q: 'What does outcomes-based ERP AI pricing actually mean?',
    a: 'Epicor calls Prism Business Communications "the industry’s first ERP AI agent with outcomes-based pricing", meaning you are billed against results rather than seats or consumption. Epicor does not publish the outcome definition, and that definition is the entire contract. Before signing, establish what counts as a billable outcome, who measures it, what happens when an agent acts and the outcome does not follow, and whether there is a floor or a cap. An unpublished outcome definition is not transparency, it is a different kind of opacity.',
  },
  {
    q: 'Is NetSuite Next included in my existing NetSuite licence?',
    a: 'Oracle does not publish an answer clean enough to rely on. Trade and partner coverage widely reports that core AI features come with existing licences at no extra cost, and separately that some advanced modules are licensed separately or metered against AI Units. Those two claims are not reconcilable from public sources. It is a contract question, not a research question: ask Oracle in writing which named features are included in your current licence, which are metered, what the unit is, and what happens when the meter runs out.',
  },
  {
    q: 'Can any ERP AI agent reach a third-party CRM like Salesforce?',
    a: 'Not as published. Every vendor in this comparison reaches its own CRM and no one else’s: Oracle to Oracle CX, NetSuite to NetSuite CRM records, SAP to SAP business objects. Infor and Epicor name no CRM at all. NetSuite’s AI Connector Service is the closest thing to an exception — it publishes a Model Context Protocol route letting external AI clients authenticate into NetSuite and call a constrained set of tools — but that is outside AI reaching in, not the ERP agent reaching out. If your ERP is SAP and your CRM is Salesforce, no vendor here publishes an AI that spans both.',
  },
  {
    q: 'Which ERP AI publishes anything about protecting margin?',
    a: 'None of them. Margin protection is the only criterion in the nine that is empty across every ERP platform profiled here, despite margin being the single most common reason a manufacturer or distributor loses money on a deal it won. The ERP holds every input needed to do it — cost, contract price, discount history, freight. No vendor publishes doing it. Treat any sales claim to the contrary as something to get in writing.',
  },
  {
    q: 'Is NetSuite Next generally available?',
    a: 'Not fully. Per Oracle’s phased approach and widely reported partner guidance, rollout began in North America with other regions following through 2026–2027, and several agentic capabilities remain in preview or early access. This matters more than any feature comparison: evaluating NetSuite Next today means evaluating something a large share of customers cannot yet fully use. Confirm availability for your region, your edition and your specific features before it enters a business case.',
  },
]

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: URL,
    siteName: SITE_NAME,
    type: 'article',
    locale: 'en_US',
    images: [
      {
        url: absolute(`/compare/${SLUG}/opengraph-image`),
        width: 1200,
        height: 630,
        alt: META_TITLE,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [absolute(`/compare/${SLUG}/opengraph-image`)],
  },
}

export default function ErpAiRoundupPage() {
  const erp = getErpPlatforms()
  const matrix = MATRIX_SLUGS.map(getPlatform).filter(Boolean)
  const verified = new Date(`${VERIFIED_ON_ERP}T00:00:00Z`).toISOString()

  const totalCells = matrix.length * CRITERIA.length
  const publishedCells = matrix.reduce(
    (n, p) => n + CRITERIA.filter((c) => p.criteria[c.key]?.value !== NOT_PUBLISHED).length,
    0,
  )

  const allSources = matrix.flatMap((p) => p.sources.map((s) => ({ ...s, platform: p.name })))

  // 7.01: each FAQ heading gets a direct answer of at most 60 words, with the
  // elaboration in a second paragraph. The schema still carries the whole thing.
  const faq = FAQ.map((f) => {
    const [lead, rest] = splitAnswer(f.a)
    return { ...f, a: lead, more: rest }
  })

  // One array, rendered as the visible breadcrumb and used to build the
  // BreadcrumbList. They said "Platforms" on screen and "Comparisons" in the
  // markup while they were maintained separately (6.06/2.06).
  const path = `/compare/${SLUG}`
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Platforms', href: '/platform' },
    { name: 'ERP AI Platforms 2026', href: path },
  ]

  const breadcrumb = breadcrumbNode(path, crumbs)
  const software = matrix.map(softwareNode)

  const jsonLd = graph([
    organizationNode(),
    websiteNode(),
    breadcrumb,
    software,
    // 6.14/1.12: a roundup is a list, so say so.
    itemListNode(
      path,
      'ERP-native AI platforms compared',
      matrix.map((p) => ({ name: p.name, url: absolute(`/platform/${p.slug}`) })),
    ),
    faqNode(path, faq),
    webPageNode({
      path,
      name: META_TITLE,
      description: META_DESCRIPTION,
      about: software.map((n) => ({ '@id': n['@id'] })),
      breadcrumbId: breadcrumb['@id'],
      dateModified: verified,
    }),
    articleNode({
      path,
      headline: TITLE,
      description: META_DESCRIPTION,
      author: AUTHOR_REF(),
      datePublished: VERIFIED_ON_ERP,
      dateModified: verified,
      image: absolute(`${path}/opengraph-image`),
      about: software.map((n) => ({ '@id': n['@id'] })),
      citation: allSources.map((s) => s.url),
    }),
  ])

  // 4.14: anchor list for a long page. Ids are set on the sections below.
  const toc = [
    { id: 'pricing-models', label: 'How each vendor charges' },
    { id: 'architecture', label: 'Where the AI sits' },
    { id: 'criteria', label: 'The nine criteria' },
    { id: 'profiles', label: 'What each platform is' },
    { id: 'verdict', label: 'Which to choose' },
    { id: 'ask', label: 'What to ask vendors' },
    { id: 'faq', label: 'FAQ' },
    { id: 'sources', label: 'Sources' },
  ]

  const cell = (v) =>
    v === NOT_PUBLISHED ? <span className="not-published">{NOT_PUBLISHED}</span> : v

  return (
    <>
      <div className="post-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((c, i) =>
                i === crumbs.length - 1 ? (
                  <li key={c.href} aria-current="page">{c.name}</li>
                ) : (
                  <li key={c.href}><a href={c.href}>{c.name}</a></li>
                ),
              )}
            </ol>
          </nav>

          <p className="eyebrow">Multi-Platform Benchmark &mdash; ERP-Native AI</p>
          <h1>{TITLE}</h1>

          <div className="post-meta">
            <span className="updated">
              Last updated: <time dateTime={verified}>{longDate(verified)}</time>
            </span>
            <span>By {SITE_NAME} Editorial Team</span>
            <span>{PRICING_MODELS.length} vendors &middot; {CRITERIA.length} criteria</span>
            <span>{allSources.length} primary sources</span>
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="post-layout">
          <article className="post post-shell">
            <PostActions slug={SLUG} title={TITLE} url={URL} variant="share" />

            <div className="answer">
              <h2 className="answer-heading">The Short Answer</h2>
              <p className="lead">{SUMMARY}</p>
            </div>

            <section className="industry-section" data-reveal>
              <h2 id="pricing-models">How does each ERP vendor charge for AI?</h2>
              <p>
                Every ERP vendor now ships AI agents. Almost nobody compares how they{' '}
                <em>charge</em> for them &mdash; and the answer differs more than the features do.
                This is the comparison nobody is writing, and it decides more than the feature list
                will.
              </p>

              <div className="table-wrap">
                <table className="spec">
                  <caption>
                    ERP AI commercial models &mdash; from vendor sources, read{' '}
                    {longDate(verified)}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Vendor</th>
                      <th scope="col">Model</th>
                      <th scope="col">What the vendor states</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_MODELS.map((m) => (
                      <tr key={m.vendor}>
                        <th scope="row" className="cell">
                          <a href={`/platform/${m.slug}`}>{m.vendor}</a>
                        </th>
                        <td className="cell">
                          {m.model === NOT_PUBLISHED
                            ? <span className="not-published">{NOT_PUBLISHED}</span>
                            : <strong>{m.model}</strong>}
                        </td>
                        <td className="cell">{m.states}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Read that table before any feature table.</strong> An AI capability included
                at no extra cost and one billed against outcomes are not the same purchase, even if
                the demo looks identical.
              </p>
              <p>
                <strong>The one that deserves the most scrutiny is Epicor&rsquo;s.</strong>{' '}
                Outcomes-based sounds buyer-friendly and can be, but only if the outcome is defined,
                measured and capped in the contract. Epicor does not publish the definition.
              </p>
              <p>
                <strong>The one most likely to be misread is NetSuite&rsquo;s.</strong> &ldquo;It is
                included&rdquo; is repeated across partner blogs; Oracle publishes no statement clean
                enough to rely on. That is a contract conversation, not a research finding.
              </p>
            </section>

            <section className="industry-section" data-reveal>
              <h2 id="architecture">Where does the AI actually sit?</h2>
              <p>
                All of these run <em>inside</em> the ERP rather than connecting to it &mdash; which
                is the whole point, and the thing every CRM-side AI tool cannot claim.
              </p>

              <div className="table-wrap">
                <table className="spec matrix">
                  <caption>
                    ERP AI architecture &mdash; published positions only, read {longDate(verified)}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Vendor</th>
                      <th scope="col">Runs inside ERP</th>
                      <th scope="col">Custom agent builder</th>
                      <th scope="col">Partner agent marketplace</th>
                      <th scope="col">External AI access (MCP)</th>
                      <th scope="col">Cross-vendor systems</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ARCHITECTURE.map((a) => (
                      <tr key={a.vendor}>
                        <th scope="row" className="cell">
                          <a href={`/platform/${a.slug}`}>{a.vendor}</a>
                        </th>
                        <td className="cell">{cell(a.insideErp)}</td>
                        <td className="cell">{cell(a.builder)}</td>
                        <td className="cell">{cell(a.marketplace)}</td>
                        <td className="cell">{cell(a.mcp)}</td>
                        <td className="cell">{cell(a.crossVendor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Three genuine differentiators fall out of this.</strong> Oracle is alone in
                publishing a validated partner agent marketplace embedded natively in the
                application. NetSuite is alone in publishing an MCP route for outside assistants.
                Infor is alone in publishing that its agents orchestrate across non-Infor systems.
              </p>
            </section>

            <section className="industry-section" data-reveal>
              <h2 id="criteria">How do the five compare across nine criteria?</h2>
              <p className="stat-callout">
                Of the <strong>{totalCells}</strong> platform-criterion cells in the matrix below,
                vendors publish an answer for <strong>{publishedCells}</strong>. Margin protection is
                empty in every column.
              </p>

              {/* Phones read the matrix criterion by criterion; a six-column
                  table at 360px is a sideways scroll nobody performs. */}
              <div className="mobile-only">
                {CRITERIA.map((c) => (
                  <div key={c.key} className="rank-card criterion-card">
                    <div className="rank-card-head">
                      <div className="rank-card-name">
                        <h3>{c.label}</h3>
                      </div>
                    </div>
                    <dl className="rank-card-facts">
                      {matrix.map((p) => (
                        <div key={p.slug}>
                          <dt>
                            <a href={`/platform/${p.slug}`}>{p.shortName}</a>
                          </dt>
                          <dd>{cell(p.criteria[c.key].value)}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>

              <div className="table-wrap desktop-only">
                <table className="spec matrix">
                  <caption>
                    ERP-native AI &mdash; nine criteria, read from vendor documentation on{' '}
                    {longDate(verified)}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Criterion</th>
                      {matrix.map((p) => (
                        <th key={p.slug} scope="col">
                          <a href={`/platform/${p.slug}`}>{p.shortName}</a>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CRITERIA.map((c) => (
                      <tr key={c.key}>
                        <th scope="row" className="cell">{c.label}</th>
                        {matrix.map((p) => (
                          <td key={p.slug} className="cell">{cell(p.criteria[c.key].value)}</td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <th scope="row" className="cell">Criteria published</th>
                      {matrix.map((p) => {
                        const n = CRITERIA.filter(
                          (c) => p.criteria[c.key]?.value !== NOT_PUBLISHED,
                        ).length
                        return (
                          <td key={p.slug} className="cell">
                            <strong>{n} of {CRITERIA.length}</strong>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="table-note">
                The &ldquo;criteria published&rdquo; row counts how many of the nine each vendor has
                written down on its own site. It is a measure of disclosure, not of capability, and
                should not be read as a ranking.
              </p>

              <h3>Two rows are worth staring at</h3>
              <p>
                <strong>Margin protection is empty across all five.</strong> Not one ERP vendor
                publishes an AI capability for protecting margin &mdash; despite margin being the
                single most common reason a manufacturer or distributor loses money on a deal they
                won. The ERP holds every input needed to do it. None of them publishes doing it.
              </p>
              <p>
                <strong>CRM automation is native-only across the board.</strong> Every
                vendor&rsquo;s AI reaches its own CRM and no one else&rsquo;s. If your ERP is SAP and
                your CRM is Salesforce &mdash; an extremely common pairing &mdash; no vendor in this
                table publishes an AI that spans both.
              </p>
              <p>
                That gap between the ERP and a third-party CRM is, structurally, the same gap the
                CRM-side tools leave from the other direction. Neither category crosses it, which is
                what the{' '}
                <a href="/compare/best-ai-sales-platforms-manufacturing-2026">
                  manufacturing benchmark
                </a>{' '}
                shows from the sales side.
              </p>
            </section>

            <section className="industry-profiles" data-reveal>
              <h2 id="profiles">What is each ERP AI platform?</h2>

              {erp.map((p) => {
                const published = CRITERIA.filter(
                  (c) => p.criteria[c.key]?.value !== NOT_PUBLISHED,
                ).length
                const entry = p.pricing.tiers.find((t) => t.price !== NOT_PUBLISHED)
                return (
                  <div key={p.slug} className="tool-profile">
                    <div className="tool-profile-header">
                      <div className="tool-profile-title">
                        <h3><a href={`/platform/${p.slug}`}>{p.name}</a></h3>
                        <span className="tool-profile-type">{p.category}</span>
                      </div>
                    </div>

                    <div className="tool-profile-body">
                      <p>{p.oneLine}</p>
                      <div className="profile-fact-row">
                        <span className="profile-fact-label">Entry price:</span>
                        <span className="profile-fact-val">
                          {entry ? entry.price : NOT_PUBLISHED}
                          {entry ? ` — ${entry.plan}` : ''}
                        </span>
                      </div>
                      <div className="profile-fact-row">
                        <span className="profile-fact-label">ERP:</span>
                        <span className="profile-fact-val">{p.criteria.erpConnectivity.note}</span>
                      </div>
                      <div className="profile-fact-row">
                        <span className="profile-fact-label">Criteria published:</span>
                        <span className="profile-fact-val">{published} of {CRITERIA.length}</span>
                      </div>

                      <div className="skip-note-box">
                        <strong>Skip it if:</strong> {p.skipIf}
                      </div>

                      <p>
                        <a className="profile-more" href={`/platform/${p.slug}`}>
                          Full {p.name} profile, pricing table and sources &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                )
              })}
            </section>

            <section className="industry-section verdict-section" data-reveal>
              <h2 id="verdict">Which ERP AI platform should you choose?</h2>
              <p>
                None of these is a reason to change ERP. Every entry here is worth exactly as much
                as the platform underneath it, which makes this a question of what you already run
                rather than what you would buy fresh.
              </p>
              <ul className="verdict-list">
                {VERDICT.map((v) => (
                  <li key={v.who}>
                    <strong><a href={`/platform/${v.slug}`}>{v.who}</a></strong> {v.detail}
                  </li>
                ))}
              </ul>
            </section>

            <section className="industry-section" data-reveal>
              <h2 id="ask">What should you ask every ERP vendor?</h2>
              <ol className="prose-list">
                {ASK.map((q) => <li key={q}>{q}</li>)}
              </ol>
            </section>

            <section className="industry-section" data-reveal>
              <h2 id="faq">Frequently asked questions</h2>
              {faq.map((f) => (
                <div key={f.q} className="faq-item">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                  {f.more ? <p className="faq-more">{f.more}</p> : null}
                </div>
              ))}
            </section>

            <section className="sources" data-reveal>
              <h2 id="sources">Sources</h2>
              <ol>
                {allSources.map((s, i) => (
                  <li key={`${s.platform}-${s.url}`} id={`source-${i + 1}`}>
                    <span className="src-label">{s.platform} &mdash; {s.label}</span>{' '}
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">{s.url}</a>
                  </li>
                ))}
              </ol>
              <p className="table-note">
                Where a fact comes from trade press reporting a vendor announcement rather than from
                the vendor&rsquo;s own page, it is labelled as such on the platform profile. Where
                nothing is published, the table says &ldquo;{NOT_PUBLISHED}&rdquo;.
              </p>
              <p className="src-more">
                All figures read from these pages on {longDate(verified)}. This category is moving
                quarterly &mdash; re-verify before relying on any of it.
              </p>
            </section>

            <section className="industry-related" data-reveal>
              <h2>Related benchmarks</h2>
              <ul className="related-links-list">
                <li>
                  <a href="/compare/best-ai-sales-platforms-manufacturing-2026">
                    <strong>Best AI Sales Platforms for Manufacturing (2026)</strong> &mdash; the
                    CRM-side half of the same picture, six platforms across nine criteria
                  </a>
                </li>
                <li>
                  <a href="/industry/manufacturing-distribution">
                    <strong>Manufacturing &amp; Distribution sector benchmark</strong> &mdash; the
                    bottlenecks behind these criteria
                  </a>
                </li>
                <li>
                  <a href="/platform">
                    <strong>All platform profiles</strong> &mdash; pricing tables and sources per
                    vendor
                  </a>
                </li>
              </ul>
            </section>
          </article>

          <aside className="post-aside" aria-label="Roundup facts and platform links">
            <div className="aside-card toc">
              <p className="aside-label">On this page</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>
                ))}
              </ol>
            </div>

            <div className="aside-card">
              <p className="aside-label">Roundup at a glance</p>
              <dl className="aside-facts">
                <div>
                  <dt>Vendors</dt>
                  <dd>{PRICING_MODELS.length}</dd>
                </div>
                <div>
                  <dt>Pricing models</dt>
                  <dd>5</dd>
                </div>
                <div>
                  <dt>Criteria</dt>
                  <dd>{CRITERIA.length}</dd>
                </div>
                <div>
                  <dt>Cells published</dt>
                  <dd>{publishedCells} of {totalCells}</dd>
                </div>
                <div>
                  <dt>Primary sources</dt>
                  <dd>{allSources.length}</dd>
                </div>
                <div>
                  <dt>Verified</dt>
                  <dd>{longDate(verified)}</dd>
                </div>
              </dl>
            </div>

            <div className="aside-card">
              <p className="aside-label">ERP AI profiles</p>
              <ul className="aside-related">
                {matrix.map((p) => (
                  <li key={p.slug}>
                    <a href={`/platform/${p.slug}`}>{p.name}</a>
                    <span>{p.vendor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aside-card aside-cta">
              <p className="aside-label">Custom benchmark</p>
              <p>Tell us your ERP, CRM and team shape. We will map the shortlist against your stack.</p>
              <a className="button" href="/request">Request a comparison</a>
            </div>
          </aside>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}

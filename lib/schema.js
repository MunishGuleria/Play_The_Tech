/**
 * One connected JSON-LD graph per page.
 *
 * seoaeogeo.md 6.15 requires that Article, Person and Organization resolve to a
 * single entity rather than three loose blobs, and SEO-PLAN.md §3 0.2 fixes the
 * @id conventions used below. Pages emitted three disconnected <script> blocks
 * before this existed, so nothing tied an article to its author or its publisher.
 *
 * @id conventions (SEO-PLAN §3 0.2, adapted: this site uses /platform, not /tools):
 *   ORG_ID       {siteUrl}/#organization
 *   SITE_ID      {siteUrl}/#website
 *   pageId       {absolute(path)}#webpage
 *   articleId    {absolute(path)}#article
 *   personId     {absolute(/authors/{slug})}#person
 *   softwareId   {absolute(/platform/{slug})}#software
 */
import { SITE_NAME, SITE_DESCRIPTION, CONTACT_EMAIL, siteUrl, absolute } from './site.js'

export const ORG_ID = () => `${siteUrl()}/#organization`
export const SITE_ID = () => `${siteUrl()}/#website`
export const pageId = (path) => `${absolute(path)}#webpage`
export const articleId = (path) => `${absolute(path)}#article`
export const softwareId = (slug) => `${absolute(`/platform/${slug}`)}#software`

/** Wraps nodes in a single @graph. Falsy entries are dropped so callers can inline conditionals. */
export function graph(nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes.flat().filter(Boolean) }
}

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID(),
    name: SITE_NAME,
    alternateName: ['Play The Tech', 'PlayTheTech Benchmarks'],
    url: siteUrl(),
    description: SITE_DESCRIPTION,
    logo: { '@type': 'ImageObject', url: absolute('/icon-512x512.png'), width: 512, height: 512 },
    email: CONTACT_EMAIL,
    // 6.02 asks for publishingPrinciples. There is no /methodology route — the
    // evaluation standard is a section on the home page — so this points at the
    // heading that actually exists rather than at a URL that 404s.
    publishingPrinciples: `${siteUrl()}/#method-heading`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial',
      email: CONTACT_EMAIL,
      availableLanguage: 'English',
    },
  }
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID(),
    name: SITE_NAME,
    url: siteUrl(),
    description: SITE_DESCRIPTION,
    publisher: { '@id': ORG_ID() },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl()}/#comparisons` },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Authorship is the masthead, deliberately.
 *
 * seoaeogeo.md 5.01 wants a named Person with a resolvable `sameAs`, and values
 * it at 2.3x citations. We do not have one: no individual has put their name to
 * this research, and inventing a persona would break GUARDRAILS 6.2 (no
 * fabricated identities) while naming a real person would tie the masthead to
 * people the site is not editorially related to. An Organization author is
 * valid schema.org and is the truthful answer, so the citation lift is a known,
 * accepted cost rather than an oversight. Revisit only if a real person is
 * willing to stand behind the work publicly.
 */
export const AUTHOR_REF = () => ({ '@id': ORG_ID() })

export function webPageNode({ path, name, description, about, breadcrumbId, dateModified }) {
  return {
    '@type': 'WebPage',
    '@id': pageId(path),
    url: absolute(path),
    name,
    description,
    isPartOf: { '@id': SITE_ID() },
    ...(about ? { about } : {}),
    ...(breadcrumbId ? { breadcrumb: { '@id': breadcrumbId } } : {}),
    ...(dateModified ? { dateModified } : {}),
    inLanguage: 'en',
  }
}

export function articleNode({
  path,
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  about,
  citation,
}) {
  return {
    '@type': 'Article',
    '@id': articleId(path),
    headline,
    description,
    url: absolute(path),
    mainEntityOfPage: { '@id': pageId(path) },
    isPartOf: { '@id': pageId(path) },
    author,
    publisher: { '@id': ORG_ID() },
    datePublished,
    dateModified,
    ...(image ? { image } : {}),
    ...(about ? { about } : {}),
    ...(citation?.length ? { citation } : {}),
    inLanguage: 'en',
  }
}

/**
 * Mirrors the visible breadcrumb. 6.06/2.06 require the two to match exactly —
 * the roundup pages used to say "Platforms" on screen and "Comparisons" in the
 * markup, so callers pass the same array they render.
 */
export function breadcrumbNode(path, crumbs) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absolute(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.href),
    })),
  }
}

export function softwareNode(p) {
  return {
    '@type': 'SoftwareApplication',
    '@id': softwareId(p.slug),
    name: p.name,
    applicationCategory: 'BusinessApplication',
    url: p.homepage,
    description: p.definition || p.oneLine,
    publisher: { '@type': 'Organization', name: p.vendor },
  }
}

export function faqNode(path, faq) {
  return {
    '@type': 'FAQPage',
    '@id': `${absolute(path)}#faq`,
    isPartOf: { '@id': pageId(path) },
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: [f.a, f.more].filter(Boolean).join(' ') },
    })),
  }
}

export function itemListNode(path, name, items) {
  return {
    '@type': 'ItemList',
    '@id': `${absolute(path)}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  }
}

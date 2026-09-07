import { siteUrl } from '../lib/site.js'

/**
 * Active, verified AI search and LLM crawlers.
 * Outdated/deprecated tokens removed (Claude-Web, anthropic-ai, MSNBot, BingPreview, Copilot, FacebookBot).
 * Live citation agents added (Claude-User, Perplexity-User).
 * Heavy scraper (Bytespider) explicitly disallowed.
 */
const AI_AGENTS = [
  // OpenAI (ChatGPT, SearchGPT, GPT-4/o)
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic (Claude citations & live retrieval)
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Perplexity AI
  'PerplexityBot',
  'Perplexity-User',
  // Google (Search, Gemini, AI Overviews)
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'GoogleOther',
  'Google-Extended',
  // Microsoft Bing & Copilot indexer
  'Bingbot',
  // Apple Intelligence
  'Applebot',
  'Applebot-Extended',
  // Meta AI
  'Meta-ExternalAgent',
  // Amazon AI
  'Amazonbot',
  // Brave AI
  'Bravebot',
  // Open Datasets / Research
  'CCBot',
  'Diffbot',
  'YouBot',
  'DuckDuckBot',
]

export default function robots() {
  const base = siteUrl()
  const disallow = ['/admin', '/api']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow,
      })),
      {
        userAgent: 'Bytespider',
        disallow: ['/'],
      },
    ],
    sitemap: [`${base}/sitemap.xml`, `${base}/feed.xml`],
  }
}

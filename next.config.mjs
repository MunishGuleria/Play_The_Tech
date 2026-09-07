/** @type {import('next').NextConfig} */

// Report-only to start with. A CSP mistake blocks your own analytics or your
// schema markup, and you find out from a support email — DEPLOYMENT §4.
// Watch the reports, then rename this header to Content-Security-Policy.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  // Only after the http→https redirect is confirmed working. HSTS is hard to undo.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'Content-Security-Policy-Report-Only', value: csp },
]

// The canonical host. Must match CANONICAL_ORIGIN in lib/site.js.
const CANONICAL_HOST = 'www.playthetech.com'

// Every other host the deployment answers on. Left unredirected, each one is a
// full duplicate of the site that Google can index separately and split link
// equity across. Branch previews get their own generated hostnames and are not
// listed here, so they keep working.
const DUPLICATE_HOSTS = ['playthetech.com', 'play-the-tech-c6i8.vercel.app']

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // The OG card reads the Plex woff files off disk at render time; without this
  // they are not traced into the deployed output.
  outputFileTracingIncludes: {
    '/opengraph-image': ['./assets/fonts/**'],
    '/compare/[slug]/opengraph-image': ['./assets/fonts/**'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },

  experimental: {
    optimizePackageImports: ['marked'],
    // Deliberately NOT enabling `inlineCss`. Measured on this codebase it
    // embeds the full stylesheet twice per page (a <style> tag plus a copy in
    // the RSC payload): the homepage HTML went from 15 KB to 72 KB gzipped,
    // which costs more on a mobile connection than the one render-blocking
    // CSS request it removes — the regression reverted in 82aa8cc.
    //
    // `optimizeCss` used to sit here and did nothing: it is read only by
    // build/webpack-config.js, and this project builds with Turbopack.
  },

  // 308s, so the method and the ranking signals both survive the hop. Vercel
  // can do apex→www at the edge too; this keeps the rule in the repo so it
  // travels with the code and survives a dashboard change.
  async redirects() {
    return DUPLICATE_HOSTS.map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }))
  },

  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(logo\\.webp|logo\\.png|icon\\.svg|favicon\\.ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Belt and braces: these are also disallowed in robots.txt, but a header
      // survives someone editing robots.js.
      { source: '/admin/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      { source: '/request', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
    ]
  },
}

export default nextConfig

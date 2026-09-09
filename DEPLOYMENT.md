# DEPLOYMENT.md

Target: **Azure App Service**, Next.js, Azure Postgres, custom domain — and
a custom domain on a shared Azure tenancy.

Two risks and two benefits. The risks come first because they are the ones
that cost you something silently.

---

## 1 · RISK — Azure will block AI crawlers by default

**Highest-priority item in this file.** On a plain static host this risk
does not exist. On Azure it is live from day one.

CDN and WAF defaults block AI bots on most stacks, and Azure is no
exception. Azure Front Door WAF, the Azure-managed rule sets, and App
Service's own bot-protection features are all in this category. A managed
rule set that filters "unrecognised" or "malicious" bots will not
distinguish `PerplexityBot` from a scraper.

**Blocked means never cited.** That is a hard zero on the heaviest-weighted
component of the whole AEO plan, and it fails silently — the site looks
fine, traffic looks normal, and the citations simply never arrive.

### Required before launch

1. **Do not enable the Azure-managed bot-protection rule set** without
   explicitly allowlisting every agent in.
2. If Front Door or a WAF is used, add a custom allow rule **above** the
   managed rules, matching on user-agent:

   ```
   GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot,
   PerplexityBot, Google-Extended, Applebot-Extended, CCBot,
   Googlebot, Bingbot
   ```

3. **Check rate limiting.** A crawler hitting 200 pages in a minute looks
   like abuse to a default rate-limit rule. Exempt the allowlisted agents or
   raise the threshold well above normal crawl velocity.
4. **Verify in server logs, not in config.** Config that looks correct and
   logs that show 403s are a common combination. See §2 — this is now
   possible.

### Ongoing

Re-verify after every infrastructure change. Someone enabling a security
feature months from now, with no idea it touches SEO, is the realistic
failure path. Add it to the monthly re-audit.

---

## 2 · WIN — server logs become available

`SEO-GEO-AEO.md` marked server log analysis as an accepted gap,
because GitHub Pages gives no logs. App Service does.

This matters more than it sounds. Log analysis is **the only definitive
proof that search and AI crawlers actually reach your content.** Everything
else is inference. With logs you can answer directly:

- Is `ClaudeBot` fetching pages, or getting 403s?
- Which URLs do AI crawlers request, and how often?
- Is crawl budget going to articles or to pagination and redirects?
- Did a WAF change silently start blocking someone?

Set up:
- App Service Diagnostic Logs → Log Analytics workspace
- Retention long enough to compare month over month
- A monthly query grouping requests by user-agent and status code

**Promote from SHOULD to MUST.** It is the direct verification for
§1, and §1 is the biggest operational risk in the project.

---

## 3 · RISK — shared hosting footprint

Running unrelated sites on one Azure tenancy concentrates a footprint that was
previously spread across providers: same IP range or ASN, same stack, same
build pipeline, similar registration dates. Search engines have read that
pattern as a grouping signal for twenty years, and a site grouped with others
it has nothing to do with inherits their problems.

### Mitigations, in order of importance

1. **Separate App Service Plans, ideally different regions.** Different
   inbound IPs. One plan hosting several apps gives them all the same IP.

2. **Distinct design systems.** playthetech has its own locked direction in
   `UI.md`. Anything else on the tenancy needs a genuinely different one, not
   the same template recoloured.

3. **Staggered launches.** Several sites going live on the same day is its own
   signal.

4. **No reciprocal linking between sites on the tenancy.** No shared footer,
   no "our network" page, no blogroll. Every outbound link is editorially
   justified and in-content, or it does not exist. This matters more than all
   the infrastructure separation combined.

---

## 4 · WIN — real server control

Things that needed static workarounds on Pages are now first-class:

| Need | Now |
|---|---|
| HTTP → HTTPS 301 | Platform setting, one toggle |
| Canonical host enforcement | Server rule, not a meta tag |
| Trailing-slash consistency | Server rewrite |
| Security headers | HSTS, CSP, Referrer-Policy at server |
| Redirect map | Server rules, no client hop |
| Custom 404 with correct status | Real 404, no soft-404 risk |
| Cache-Control on hashed assets | Configurable per path |
| `/admin` protection | IP restriction or Easy Auth |

Configure via `web.config` (Windows) or a Node/static server config (Linux).
Prefer Linux App Service for a Node-built static site — cheaper and simpler.

Two cautions:

- **CSP will break things if rushed.** warns a CSP mistake can
  block your own analytics or schema. Ship it in report-only mode first.
- **Redirects stay one hop**. Server-level rules make chains easy
  to create accidentally.

---

## 5 · Latency — the one place App Service is worse

App Service serves from a single region by default. GitHub Pages is
CDN-backed globally.

 requires TTFB under 800ms, and TTFB caps every other metric — no
front-end tuning fixes a slow origin. An App Service in Central India
serving a US or European reader will not clear that comfortably.

**Put Azure Front Door or Azure CDN in front.** This is not optional at
global scale; it is the thing that makes App Service comparable to a static
host for this workload.

And then — immediately — re-run §1, because Front Door is precisely where
the WAF and bot rules live. Adding the CDN is the most likely single moment
to accidentally block every AI crawler.

Measure field data, not lab scores. A good Lighthouse run on a
local machine says nothing about a mid-range phone on 4G in another region.

---

## 6 · Server rendering is not the same as client rendering

Next.js on App Service can serve pages two ways, and only one of them works
here.

**Server components / SSR** — the page is assembled on the server and the
full HTML, table included, arrives in the response. Correct.

**Client components fetching data** — the browser receives a shell and fills
it in with JavaScript. A crawler that does not run JavaScript sees an empty
page. Most AI crawlers do not run JavaScript.

So: no `'use client'` on post pages, and no fetching table data in
`useEffect`. Verify with the curl test in `LAUNCH-CHECKLIST.md` §2, not by
looking at the page in a browser — the browser will always look fine.

---

## 7 · Pipeline

```
push to main
  → GitHub Actions
      npm ci
      npm run verify:data          # schema, sources, staleness
      npm run check                # 32 CI gates
      npm run build                # → dist/
  → deploy to Azure App Service    (publish profile or OIDC)
  → smoke test on the live host:
      · fetch a template with JS disabled           [1.11]
      · request as GPTBot and ClaudeBot → expect 200 [1.06] [8.12]
      · confirm 301 from http and from non-canonical host
  → ping IndexNow, resubmit sitemap                 [1.18]
```

The crawler smoke test runs **against production, on every deploy**. It is
three curl calls with a user-agent header, and it is the only thing standing
between a routine infrastructure change and silently disappearing from every
AI engine.

Use a deployment slot with the same smoke test if the plan tier allows it.

---

## 8 · Domains

Four owned. For playthetech:

- Custom domain bound in App Service, App Service Managed Certificate (free)
- Pick www or apex, enforce with one server redirect
- HSTS after confirming the redirect works — HSTS is hard to undo
- Certificate expiry monitored; managed certs auto-renew but the
  binding can still break
- `[R6.1]``GUARDRAILS.md` §4 still applies: do not build brand equity on the name.
  The Playtech collision means branded search is unwinnable, so the domain
  is a container for long-tail traffic, not an asset.

---

## 9 · Launch checklist — Azure additions

On top of `LAUNCH-CHECKLIST.md`:

- [ ] Request as each AI user-agent, from outside Azure, expect 200
- [ ] WAF custom allow rule sits above managed rules
- [ ] Rate limiting exempts or accommodates allowlisted crawlers
- [ ] Diagnostic logs → Log Analytics, retention set
- [ ] Front Door / CDN configured, then §1 re-verified
- [ ] TTFB measured from the actual target geography, not from the office
- [ ] Security headers live; CSP report-only first
- [ ] Custom domain bound, managed cert issued, HSTS after redirect confirmed
- [ ] Separate App Service Plan from other apps on the tenancy
- [ ] Confirmed: no reciprocal links between sites on the tenancy
- [ ] `/admin` IP-restricted, `noindex`, out of the sitemap

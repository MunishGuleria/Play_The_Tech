# GUARDRAILS.md

Rules that override convenience. If a task needs one broken, stop and raise
it rather than proceeding.

---

## 1 · Vendor neutrality

A comparison site has exactly one asset and it is being believed. Every rule
below protects that, and every rule applies to every vendor equally.

- **1.1** Every vendor is judged on the same criteria, with the same evidence
  standard.
- **1.2** Never invent a comparison criterion that exists only in the post
  where one vendor happens to win on it.
- **1.3** If a vendor genuinely loses a comparison, publish it losing. A
  comparison site whose rankings never surprise anyone is a brochure, and
  readers recognise one instantly.
- **1.4** Never write a hit piece dressed as a comparison. The same evidence
  standard applies to a vendor's weaknesses as to its strengths.
- **1.5** Display order is never an editorial reward. Sort alphabetically, or
  by a stated and checkable metric. Never by hand — a hand-ordered list is a
  ranking the reader cannot audit.

---

## 2 · Where facts come from

- **2.1** Prices, features, and limits come from the vendor's own pricing
  page, documentation, or the product itself.
- **2.2** **Never from other comparison sites.** Beyond the credibility
  problem, Google's spam policy names "stitching or combining content from
  different web pages without adding value" — blending the top few results
  is precisely the pattern the March 2026 update demoted.
- **2.3** Every post records `link_1` and `link_2`: the vendor pages the
  facts came from. Required at save time, not optional.
- **2.4** Unknown is "Not published". Never a guess, never an em-dash, never
  a figure carried forward from an old post.
- **2.5** If a tool wasn't actually tested, don't imply it was. "Based on
  vendor documentation" is honest; suggesting hands-on use that didn't
  happen is not.
- **2.6** Use search to discover which tools exist and what buyers ask.
  Then close those tabs and write from primary sources.

**The test before publishing:** does this post contain at least one fact
that isn't on any page you read while researching? If not, a reader could
just read those pages instead — and ranking systems reach the same
conclusion.

---

## 3 · Other people's work

- **3.1** Facts are free to use. Wording, sentence structure, and paragraph
  flow are not. Linking to a source is attribution, not a licence.
- **3.2** Don't copy a competitor's criteria selection or table structure.
  That's their editorial work product. Study the *shape*, write the
  substance yourself.
- **3.3** Screenshots are of the product in use, annotated by us — editorial
  illustration of the thing being reviewed. Don't reproduce vendor marketing
  imagery or copy blocks.
- **3.4** Every screenshot carries alt text and a caption naming the product
  and the capture date.

---

## 4 · Brand and naming

- **4.1** "Playtech" is an unrelated FTSE 250 gambling software company with
  27 years of trading history. Don't use "Playtech", "Play Tech", or any
  near-identical form in copy, titles, or marketing.
- **4.2** Don't optimise for or bid on branded "playtech" queries. That
  traffic isn't ours and the association is unhelpful.
- **4.3** All growth assumptions rest on long-tail queries, not brand
  search. Plan accordingly — the domain is a container, not an asset.

---

## 5 · Publishing

- **5.1** Nothing auto-publishes. A human reads every post before
  `published` is set true.
- **5.2** AI drafting is fine. AI publishing is not. Google's policy is
  method-agnostic — the dividing line is human oversight and real value, not
  which tool wrote the first draft.
- **5.3** No post goes live without an author name. Anonymous content is
  cited roughly half as often by AI engines.
- **5.4** If you can't name a genuine difference between the two tools, skip
  the post. A gap in coverage costs nothing. A run of thin posts is a
  sitewide demotion.

---

## 6 · Trust and claims

- **6.1** No unsubstantiated trust metrics. No "4.9/5", no "50,000+ users",
  no "95% satisfaction" unless it's real and sourced. Competitors do this;
  it's a tell, not a template.
- **6.2** No fabricated testimonials, no stock avatars, no "Verified User"
  attributions.
- **6.3** No `Review` or `AggregateRating` schema markup, ever. We collect
  no user reviews, and marking up our own editorial judgement as a rating is
  fabrication and a manual-action risk.
- **6.4** If affiliate links are added later, disclose above the fold on
  every page carrying them, and never let commission influence ranking
  order. If that rule becomes inconvenient, remove the link — don't bend the
  ranking.
- **6.5** Vendors don't review posts before publication.

---

## 7 · Technical

- **7.1** The comparison table is a real server-rendered `<table>` present
  in the raw HTML response. Most AI crawlers don't execute JavaScript.
- **7.2** No client-side rendering of post content. No `'use client'` on
  post pages.
- **7.3** No link to `/admin` anywhere on the public site.
- **7.4** Rate-limit the login endpoint and the public request form.
- **7.5** Parameterised SQL everywhere, including in the admin. The admin
  form is still user input.

---

## 8 · Outbound links

- **8.1** Every outbound link is in-content and editorially justified. Never
  sitewide footer links, never identical anchor text repeated across pages,
  never a link on every page.
- **8.2** No reciprocal linking with other sites sharing this hosting
  tenancy. No shared footer, no "our network" page, no blogroll. This matters
  more than every infrastructure mitigation combined.
- **8.3** A vendor link is not a reward for anything. It exists because a
  reader following it learns something the page could not tell them.

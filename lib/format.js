const DATE = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
})

/** Rendered on the server only; pinned to UTC so it never differs by viewer. */
export function longDate(value) {
  if (!value) return ''
  const d = value instanceof Date ? value : new Date(value)
  return Number.isNaN(d.getTime()) ? '' : DATE.format(d)
}

const SHORT_DATE = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
})

/** The table form: "19 Aug 2026". Same UTC pinning as longDate. */
export function shortDate(value) {
  if (!value) return ''
  const d = value instanceof Date ? value : new Date(value)
  return Number.isNaN(d.getTime()) ? '' : SHORT_DATE.format(d)
}

export function isoDate(value) {
  if (!value) return ''
  const d = value instanceof Date ? value : new Date(value)
  return Number.isNaN(d.getTime()) ? '' : d.toISOString()
}

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120)
}

export function countWords(s) {
  return String(s || '').trim().split(/\s+/).filter(Boolean).length
}

/**
 * Splits an answer into a lead paragraph of at most `maxWords` and the rest.
 *
 * seoaeogeo.md 7.01 wants a question heading followed by a direct answer of
 * 40-60 words, elaboration after — a single 100-word block fails that even when
 * the first sentence answers perfectly. Cuts on a sentence boundary so neither
 * half is a fragment; if the opening sentence alone is already over budget the
 * text is returned whole rather than truncated mid-thought.
 */
export function splitAnswer(text, maxWords = 60) {
  const full = String(text || '').trim()
  if (!full) return ['', '']
  if (countWords(full) <= maxWords) return [full, '']

  // Sentence ends: . ! ? followed by a space and a capital/quote/digit. Decimal
  // points and "e.g." do not match because the next character is lowercase.
  const bounds = []
  const re = /[.!?]["']?\s+(?=["'“]?[A-Z0-9])/g
  let m
  while ((m = re.exec(full)) !== null) bounds.push(m.index + m[0].trimEnd().length)

  let cut = 0
  for (const b of bounds) {
    if (countWords(full.slice(0, b)) > maxWords) break
    cut = b
  }
  if (!cut) return [full, '']
  return [full.slice(0, cut).trim(), full.slice(cut).trim()]
}

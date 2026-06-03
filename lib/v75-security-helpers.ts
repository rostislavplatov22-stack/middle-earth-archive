// v75.2 security helpers — invisible production security layer.
// Purpose: keep /api/search JSON-only, bounded, non-reflective for obvious XSS probes.

export type SafeSearchType = 'character' | 'realm' | 'location' | 'artifact' | 'age' | 'chronicle' | 'map' | 'entry'

export type SafeSearchResult = {
  title: string
  type: SafeSearchType
  slug: string
  href: string
  excerpt: string
  image?: string
}

export const V75_2_SEARCH_LIMITS = {
  MAX_SEARCH_QUERY_LENGTH: 120,
  MAX_RESULTS: 12,
  MAX_TITLE_LENGTH: 90,
  MAX_EXCERPT_LENGTH: 220,
  MAX_SLUG_LENGTH: 120,
  MAX_IMAGE_LENGTH: 180,
} as const

const CONTROL_CHARS_RE = /[\u0000-\u001F\u007F]/g
const HTML_TAG_RE = /<[^>]*>/g
const ANGLE_BRACKETS_RE = /[<>]/g
const QUOTES_BACKSLASH_RE = /["'`\\]/g
const MULTISPACE_RE = /\s+/g
const DANGEROUS_PROTOCOL_RE = /^(javascript|data|vbscript):/i
const DANGEROUS_QUERY_RE = /<\s*script|<\s*img|javascript\s*:|data\s*:\s*text\/html|vbscript\s*:|on[a-z]+\s*=|alert\s*\(/i
const DATA_HTML_RE = /data:text\/html/gi
const JS_PROTOCOL_RE = /javascript\s*:/gi
const EVENT_HANDLER_RE = /on[a-z]+\s*=/gi
const ALERT_CALL_RE = /alert\s*\(/gi

export function looksDangerousSearchInput(input: string): boolean {
  return DANGEROUS_QUERY_RE.test(input)
}

export function safeText(input: unknown, maxLength = 240): string {
  if (typeof input !== 'string') return ''
  return input
    .normalize('NFKC')
    .replace(CONTROL_CHARS_RE, ' ')
    .replace(HTML_TAG_RE, '')
    .replace(ANGLE_BRACKETS_RE, '')
    .replace(QUOTES_BACKSLASH_RE, '')
    .replace(JS_PROTOCOL_RE, '')
    .replace(DATA_HTML_RE, '')
    .replace(EVENT_HANDLER_RE, '')
    .replace(ALERT_CALL_RE, '')
    .replace(MULTISPACE_RE, ' ')
    .trim()
    .slice(0, maxLength)
}

export function normalizeSearchQuery(input: unknown): string {
  return safeText(input, V75_2_SEARCH_LIMITS.MAX_SEARCH_QUERY_LENGTH)
}

export function validateSearchQuery(input: unknown):
  | { ok: true; query: string }
  | { ok: false; status: number; error: string } {
  if (typeof input !== 'string') return { ok: false, status: 400, error: 'Missing search query.' }
  if (input.length > V75_2_SEARCH_LIMITS.MAX_SEARCH_QUERY_LENGTH) {
    return { ok: false, status: 413, error: 'Search query is too long.' }
  }
  if (looksDangerousSearchInput(input)) {
    return { ok: false, status: 400, error: 'Unsafe search query.' }
  }
  const query = normalizeSearchQuery(input)
  if (!query) return { ok: false, status: 400, error: 'Search query is empty.' }
  return { ok: true, query }
}

export function safeSlug(input: unknown): string {
  return safeText(input, V75_2_SEARCH_LIMITS.MAX_SLUG_LENGTH)
    .toLowerCase()
    .replace(/[^a-z0-9\-_/]/g, '')
    .replace(/\/{2,}/g, '/')
    .replace(/^-+|-+$/g, '')
}

export function safeInternalHref(input: unknown, fallback = '/catalog'): string {
  if (typeof input !== 'string') return fallback
  const href = input.trim()
  if (!href.startsWith('/')) return fallback
  if (href.startsWith('//')) return fallback
  if (href.includes('\\')) return fallback
  if (DANGEROUS_PROTOCOL_RE.test(href)) return fallback
  return href
}

export function safeAssetPath(input: unknown): string | undefined {
  if (typeof input !== 'string') return undefined
  const asset = input.trim()
  if (!asset.startsWith('/')) return undefined
  if (asset.startsWith('//')) return undefined
  if (asset.includes('\\')) return undefined
  if (DANGEROUS_PROTOCOL_RE.test(asset)) return undefined
  return safeText(asset, V75_2_SEARCH_LIMITS.MAX_IMAGE_LENGTH)
}

export function safeSearchType(input: unknown): SafeSearchType {
  const value = safeText(input, 32).toLowerCase()
  const allowed = new Set<SafeSearchType>(['character', 'realm', 'location', 'artifact', 'age', 'chronicle', 'map', 'entry'])
  return allowed.has(value as SafeSearchType) ? (value as SafeSearchType) : 'entry'
}

export function whitelistSearchResult(item: Record<string, unknown>): SafeSearchResult {
  const slug = safeSlug(item.slug)
  const href = safeInternalHref(item.href, slug.startsWith('/') ? slug : `/${slug || 'catalog'}`)
  return {
    title: safeText(item.title, V75_2_SEARCH_LIMITS.MAX_TITLE_LENGTH) || 'Untitled entry',
    type: safeSearchType(item.type),
    slug,
    href,
    excerpt: safeText(item.excerpt, V75_2_SEARCH_LIMITS.MAX_EXCERPT_LENGTH),
    image: safeAssetPath(item.image),
  }
}

export function whitelistSearchResults(items: Array<Record<string, unknown>>): SafeSearchResult[] {
  return items.slice(0, V75_2_SEARCH_LIMITS.MAX_RESULTS).map(whitelistSearchResult)
}

export const v75_2JsonSecurityHeaders: Record<string, string> = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, nofollow',
}

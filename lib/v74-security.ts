// v74.2 Invisible Security Patch
// Safe helpers for /api/search and other text-only API responses.
// Do not render API output with dangerouslySetInnerHTML.

export const V74_SECURITY_LIMITS = {
  maxQueryLength: 96,
  maxResultTitleLength: 90,
  maxResultExcerptLength: 240,
  maxSlugLength: 96,
  maxResults: 12,
} as const

const TAG_RE = /<[^>]*>/g
const CONTROL_RE = /[\u0000-\u001f\u007f]/g
const MULTISPACE_RE = /\s+/g
const NON_SLUG_RE = /[^a-z0-9-]/gi
const DANGEROUS_PROTOCOL_RE = /^(javascript|data|vbscript):/i

export function sanitizePlainText(input: unknown, maxLength = 240): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(CONTROL_RE, '')
    .replace(TAG_RE, '')
    .replace(MULTISPACE_RE, ' ')
    .trim()
    .slice(0, maxLength)
}

export function sanitizeSearchQuery(input: unknown): string {
  return sanitizePlainText(input, V74_SECURITY_LIMITS.maxQueryLength)
}

export function normalizeSearchQuery(input: unknown): string {
  return sanitizeSearchQuery(input).toLocaleLowerCase('en-US')
}

export function sanitizeSlug(input: unknown): string {
  return sanitizePlainText(input, V74_SECURITY_LIMITS.maxSlugLength)
    .replace(NON_SLUG_RE, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
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
  const value = input.trim()
  if (!value.startsWith('/')) return undefined
  if (value.startsWith('//')) return undefined
  if (value.includes('\\')) return undefined
  if (DANGEROUS_PROTOCOL_RE.test(value)) return undefined
  return value
}

export type SafeSearchResult = {
  title: string
  type: string
  slug: string
  href: string
  excerpt: string
  image?: string
}

export function safeSearchResult(input: Record<string, unknown>): SafeSearchResult {
  const type = sanitizePlainText(input.type, 32) || 'Entry'
  const slug = sanitizeSlug(input.slug)
  const fallbackHref = slug ? `/catalog/${slug}` : '/catalog'

  return {
    title: sanitizePlainText(input.title, V74_SECURITY_LIMITS.maxResultTitleLength) || 'Untitled entry',
    type,
    slug,
    href: safeInternalHref(input.href, fallbackHref),
    excerpt: sanitizePlainText(input.excerpt, V74_SECURITY_LIMITS.maxResultExcerptLength),
    image: safeAssetPath(input.image),
  }
}

export function safeSearchResults(input: unknown): SafeSearchResult[] {
  if (!Array.isArray(input)) return []
  return input
    .slice(0, V74_SECURITY_LIMITS.maxResults)
    .filter((item): item is Record<string, unknown> => !!item && typeof item === 'object' && !Array.isArray(item))
    .map(safeSearchResult)
}

export function jsonSecurityHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store, max-age=0',
    'X-Content-Type-Options': 'nosniff',
    'X-Robots-Tag': 'noindex, nofollow',
  }
}

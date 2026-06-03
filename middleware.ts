import { NextResponse, type NextRequest } from 'next/server'

// v74.2 Invisible Security Patch
// Optional middleware guard. If your project already has middleware.ts, merge this logic instead of overwriting it.
// No visual changes. No pages. No CSS.

const BLOCKED_PREFIXES = [
  '/preview/',
  '/trust-security',
]

const BLOCKED_SUFFIXES = [
  '.zip',
]

const BLOCKED_NAME_RE = /^\/(QA_|LAUNCH_HANDOFF_)/i

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const blocked =
    BLOCKED_PREFIXES.some((prefix) => pathname === prefix.replace(/\/$/, '') || pathname.startsWith(prefix)) ||
    BLOCKED_SUFFIXES.some((suffix) => pathname.endsWith(suffix)) ||
    BLOCKED_NAME_RE.test(pathname)

  if (blocked) {
    return new NextResponse('Not found', {
      status: 404,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  }

  const response = NextResponse.next()

  // Keep these lightweight. Netlify _headers remains the primary security header layer.
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

import { NextResponse } from 'next/server'
import {
  V75_2_SEARCH_LIMITS,
  v75_2JsonSecurityHeaders,
  validateSearchQuery,
  whitelistSearchResults,
} from '@/lib/v75-security-helpers'

const SEARCH_INDEX = [
  { title: 'Galadriel', type: 'character', slug: 'galadriel', href: '/characters/galadriel', excerpt: 'Lady of Lórien and bearer of Nenya.', image: '/v72/assets/char-galadriel.webp' },
  { title: 'Gandalf the Grey', type: 'character', slug: 'gandalf', href: '/characters/gandalf', excerpt: 'One of the Istari, a guardian of Middle-earth against the Shadow.', image: '/v72/assets/char-gandalf.webp' },
  { title: 'Aragorn', type: 'character', slug: 'aragorn', href: '/characters/aragorn', excerpt: 'Heir of Isildur and King Elessar.', image: '/v72/assets/char-aragorn.webp' },
  { title: 'Gondor', type: 'realm', slug: 'gondor', href: '/realms/gondor', excerpt: 'The Realm of Men and the last great bulwark against Mordor.', image: '/v72/assets/realm-gondor.webp' },
  { title: 'Lórien', type: 'location', slug: 'lorien', href: '/locations/lorien', excerpt: 'The Golden Wood, preserved under the grace of Galadriel.', image: '/v72/assets/realm-lorien.webp' },
  { title: 'The One Ring', type: 'artifact', slug: 'the-one-ring', href: '/artifacts/the-one-ring', excerpt: 'The Ring of Power forged by Sauron to dominate the others.', image: '/v72/assets/artifact-ring.webp' },
  { title: 'Phial of Galadriel', type: 'artifact', slug: 'phial-of-galadriel', href: '/artifacts/phial-of-galadriel', excerpt: 'A vessel of star-light given to Frodo in Lórien.', image: '/v72/assets/artifact-phial.webp' },
  { title: 'Third Age', type: 'age', slug: 'third-age', href: '/ages/third-age', excerpt: 'The age of the War of the Ring and the fading of the Elves.', image: '/v72/assets/age-third.webp' },
]

export async function GET(request: Request) {
  const url = new URL(request.url)
  const validation = validateSearchQuery(url.searchParams.get('q'))

  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error, results: [] },
      { status: validation.status, headers: v75_2JsonSecurityHeaders },
    )
  }

  const query = validation.query.toLowerCase()
  const rawResults = SEARCH_INDEX
    .filter((entry) => [entry.title, entry.type, entry.excerpt].join(' ').toLowerCase().includes(query))
    .slice(0, V75_2_SEARCH_LIMITS.MAX_RESULTS)

  return NextResponse.json(
    {
      query: validation.query,
      results: whitelistSearchResults(rawResults),
    },
    { headers: v75_2JsonSecurityHeaders },
  )
}

import { NextResponse } from 'next/server'
import { v77CharacterSearchEntries } from '@/lib/v77-character-data'
import {
  V75_2_SEARCH_LIMITS,
  v75_2JsonSecurityHeaders,
  validateSearchQuery,
  whitelistSearchResults,
} from '@/lib/v75-security-helpers'

const STATIC_ARCHIVE_INDEX = [
  { title: 'Gondor', type: 'realm', slug: 'gondor', href: '/realms/gondor', excerpt: 'The Realm of Men and the last great bulwark against Mordor.', image: '/v72/assets/realm-gondor.webp' },
  { title: 'Lórien', type: 'location', slug: 'lorien', href: '/locations/lorien', excerpt: 'The Golden Wood, preserved under the grace of Galadriel.', image: '/v72/assets/realm-lorien.webp' },
  { title: 'Rivendell', type: 'realm', slug: 'rivendell', href: '/realms/rivendell', excerpt: 'The Last Homely House east of the Sea.', image: '/v72/assets/realm-rivendell.webp' },
  { title: 'Mordor', type: 'realm', slug: 'mordor', href: '/realms/mordor', excerpt: 'The Black Land and seat of Sauron in the Third Age.', image: '/v72/assets/realm-mordor.webp' },
  { title: 'The One Ring', type: 'artifact', slug: 'the-one-ring', href: '/artifacts/the-one-ring', excerpt: 'The Ring of Power forged by Sauron to dominate the others.', image: '/v72/assets/artifact-ring.webp' },
  { title: 'Phial of Galadriel', type: 'artifact', slug: 'phial-of-galadriel', href: '/artifacts/phial-of-galadriel', excerpt: 'A vessel of star-light given to Frodo in Lórien.', image: '/v72/assets/artifact-phial.webp' },
  { title: 'Andúril', type: 'artifact', slug: 'anduril', href: '/artifacts/anduril', excerpt: 'The reforged sword of Aragorn, Flame of the West.', image: '/v72/assets/artifact-anduril.webp' },
  { title: 'Narsil', type: 'artifact', slug: 'narsil', href: '/artifacts/narsil', excerpt: 'The broken blade of Elendil and heirloom of his line.', image: '/v72/assets/artifact-narsil.webp' },
  { title: 'The Silmarillion', type: 'chronicle', slug: 'the-silmarillion', href: '/chronicles/the-silmarillion', excerpt: 'The ancient chronicle of the Elder Days and the Silmarils.', image: '/v72/assets/chronicle-silmarillion.webp' },
  { title: 'Third Age', type: 'age', slug: 'third-age', href: '/ages/third-age', excerpt: 'The age of the War of the Ring and the fading of the Elves.', image: '/v72/assets/age-third.webp' },
  { title: 'Second Age', type: 'age', slug: 'second-age', href: '/ages/second-age', excerpt: 'The age of Númenor, the Rings of Power, and the Last Alliance.', image: '/v72/assets/age-second.webp' },
]

const SEARCH_INDEX = [...v77CharacterSearchEntries, ...STATIC_ARCHIVE_INDEX]

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

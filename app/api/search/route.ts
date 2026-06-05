import { NextResponse } from "next/server";
import { v77CharacterSearchEntries } from "@/lib/v77-character-data";
import { V75_2_SEARCH_LIMITS, v75_2JsonSecurityHeaders, validateSearchQuery, whitelistSearchResults } from "@/lib/v75-security-helpers";

const CORE_INDEX = [
  { title: "Gondor", type: "realm", slug: "gondor", href: "/realms/gondor", excerpt: "The Realm of Men and the last great bulwark against Mordor.", image: "/v72/assets/realm-gondor.webp" },
  { title: "Lórien", type: "location", slug: "lorien", href: "/locations/lorien", excerpt: "The Golden Wood, preserved under the grace of Galadriel.", image: "/v72/assets/realm-lorien.webp" },
  { title: "The One Ring", type: "artifact", slug: "the-one-ring", href: "/artifacts/the-one-ring", excerpt: "The Ring of Power forged by Sauron to dominate the others.", image: "/v72/assets/artifact-ring.webp" },
  { title: "Phial of Galadriel", type: "artifact", slug: "phial-of-galadriel", href: "/artifacts/phial-of-galadriel", excerpt: "A vessel of star-light given to Frodo in Lórien.", image: "/v113/frodo-catalog-card.webp" },
  { title: "Third Age", type: "age", slug: "third-age", href: "/ages/third-age", excerpt: "The age of the War of the Ring and the fading of the Elves.", image: "/v72/assets/age-third.webp" },
];

const SEARCH_INDEX = [...v77CharacterSearchEntries, ...CORE_INDEX];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const validation = validateSearchQuery(url.searchParams.get("q"));

  if (!validation.ok) {
    return NextResponse.json({ error: validation.error, results: [] }, { status: validation.status, headers: v75_2JsonSecurityHeaders });
  }

  const query = validation.query.toLowerCase();
  const rawResults = SEARCH_INDEX
    .filter((entry) => [entry.title, entry.type, entry.excerpt, entry.slug].join(" ").toLowerCase().includes(query))
    .slice(0, V75_2_SEARCH_LIMITS.MAX_RESULTS);

  return NextResponse.json({ query: validation.query, results: whitelistSearchResults(rawResults) }, { headers: v75_2JsonSecurityHeaders });
}

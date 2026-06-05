"use client";

import Link from "next/link";
import Image from "next/image";

const FEATURED = [
  {
    eyebrow: "Featured Realm",
    title: "Gondor",
    subtitle: "The Realm of Men",
    body: "A sovereign realm, once mighty and enduring, standing as the last line of defense against the Shadow.",
    href: "/realms/gondor",
    image: "/v72/assets/realm-gondor.webp",
    cta: "Explore Gondor",
  },
  {
    eyebrow: "Featured Character",
    title: "Gandalf the Grey",
    subtitle: "Istar, Keeper of Wisdom",
    body: "A wanderer and wise guide, allied to the Free Peoples in an age of trial.",
    href: "/characters/gandalf",
    image: "/v102/gandalf-catalog-card.webp",
    cta: "View Profile",
  },
  {
    eyebrow: "Featured Artifact",
    title: "The One Ring",
    subtitle: "Artifact of Power",
    body: "Forged in secret. Bound to its maker. Sought by many. Ruled by none.",
    href: "/artifacts/the-one-ring",
    image: "/v72/assets/artifact-ring.webp",
    cta: "View Artifact",
  },
];

const COLLECTIONS = [
  { label: "Characters", count: "1,284+", href: "/catalog?type=characters", icon: "♙" },
  { label: "Realms", count: "478+", href: "/catalog?type=realms", icon: "✦" },
  { label: "Artifacts", count: "3,217+", href: "/catalog?type=artifacts", icon: "✧" },
  { label: "Chronicles", count: "∞", href: "/catalog?type=chronicles", icon: "▣" },
  { label: "Maps", count: "1,263+", href: "/catalog?type=maps", icon: "◇" },
  { label: "Ages", count: "6", href: "/catalog?type=ages", icon: "⌑" },
];

const LOWER = [
  {
    eyebrow: "Character",
    title: "Aragorn",
    subtitle: "Heir of Isildur",
    href: "/characters/aragorn",
    image: "/v72/assets/char-aragorn.webp",
  },
  {
    eyebrow: "Map",
    title: "Map of Middle-earth",
    subtitle: "Cartographer's Chart",
    href: "/catalog?type=maps",
    image: "/v72/assets/map-middle-earth.webp",
  },
  {
    eyebrow: "Chronicle",
    title: "The Red Book",
    subtitle: "Tales and Records",
    href: "/catalog?type=chronicles",
    image: "/v72/assets/chronicle-red-book.webp",
  },
  {
    eyebrow: "Age",
    title: "Third Age",
    subtitle: "The Age of Men",
    href: "/ages/third-age",
    image: "/v72/assets/age-third.webp",
  },
];

function SafeImageCard({
  item,
  size = "normal",
}: {
  item: { eyebrow: string; title: string; subtitle: string; body?: string; href: string; image: string; cta?: string };
  size?: "wide" | "normal";
}) {
  return (
    <Link href={item.href} className={`v801-card ${size === "wide" ? "v801-card-wide" : ""}`}>
      <Image src={item.image} alt="" fill sizes={size === "wide" ? "58vw" : "28vw"} priority={size === "wide"} />
      <span className="v801-card-vignette" aria-hidden="true" />
      <span className="v801-card-scrim" aria-hidden="true" />
      <span className="v801-card-content">
        <span className="v801-eyebrow">{item.eyebrow}</span>
        <strong>{item.title}</strong>
        <em>{item.subtitle}</em>
        {item.body ? <small>{item.body}</small> : null}
        <span className="v801-link">{item.cta ?? "Explore"} →</span>
      </span>
    </Link>
  );
}

export default function V801PremiumHome() {
  return (
    <main className="v801-home" aria-label="Middle-earth Archive premium landing">
      <header className="v801-nav">
        <Link href="/" className="v801-brand" aria-label="Middle-earth Archive home">
          <span>✦</span>
          <strong>Middle-earth Archive</strong>
        </Link>

        <nav className="v801-navlinks" aria-label="Main navigation">
          <Link href="/catalog">Catalog</Link>
          <Link href="/catalog?type=characters">Characters</Link>
          <Link href="/catalog?type=realms">Realms</Link>
          <Link href="/catalog?type=artifacts">Artifacts</Link>
          <Link href="/catalog?type=chronicles">Chronicles</Link>
          <Link href="/catalog?type=maps">Maps</Link>
          <Link href="/catalog?type=ages">Ages</Link>
        </nav>

        <Link href="/?search=open" className="v801-access">
          ✶ Palantír Access
        </Link>
      </header>

      <section className="v801-hero" aria-labelledby="v801-title">
        <Image
          className="v801-hero-img"
          src="/v71/assets/hero-palantir-stage.webp"
          alt=""
          fill
          sizes="100vw"
          priority
        />
        <div className="v801-hero-mask" aria-hidden="true" />
        <div className="v801-hero-copy">
          <p className="v801-kicker">The definitive archive of</p>
          <h1 id="v801-title">Middle-earth</h1>
          <p className="v801-line">Preserving the legends. Illuminating the ages.</p>
          <p className="v801-description">
            Explore a curated record of characters, realms, artifacts, maps, and chronicles from the Elder Days to the Fourth Age.
          </p>

          <Link href="/catalog" className="v801-search">
            <span>⌕</span>
            <b>Search the Archive...</b>
            <i>→</i>
          </Link>

          <div className="v801-collection-rail" aria-label="Archive collections">
            {COLLECTIONS.map((item) => (
              <Link href={item.href} key={item.label}>
                <span>{item.icon}</span>
                <em>{item.label}</em>
                <strong>{item.count}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="v801-showcase" aria-label="Featured archive entries">
        <SafeImageCard item={FEATURED[0]} size="wide" />
        <SafeImageCard item={FEATURED[1]} />
        <SafeImageCard item={FEATURED[2]} />
      </section>

      <section className="v801-lower" aria-label="Explore the archive">
        {LOWER.map((item) => (
          <SafeImageCard item={item} key={item.title} />
        ))}
      </section>

      <footer className="v801-footer">
        <span>A legacy preserved.</span>
        <span>8,248+ entries in the archive</span>
        <span>Curated for seekers of lore</span>
      </footer>
    </main>
  );
}

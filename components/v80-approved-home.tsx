import Link from "next/link";

const categories = [
  { label: "Characters", value: "1,284+", href: "/catalog?type=characters", icon: "♙" },
  { label: "Realms", value: "478+", href: "/catalog?type=realms", icon: "✦" },
  { label: "Artifacts", value: "3,217+", href: "/catalog?type=artifacts", icon: "✧" },
  { label: "Chronicles", value: "∞", href: "/catalog?type=chronicles", icon: "▣" },
  { label: "Maps", value: "1,263+", href: "/catalog?type=maps", icon: "◇" },
  { label: "Ages", value: "6", href: "/catalog?type=ages", icon: "⌑" },
];

const cards = [
  {
    eyebrow: "Featured character",
    title: "Aragorn",
    subtitle: "Heir of Isildur, King in Exile",
    href: "/characters/aragorn",
    image: "/v108/aragorn-catalog-card.webp",
    cta: "View profile",
  },
  {
    eyebrow: "Featured artifact",
    title: "The One Ring",
    subtitle: "Artifact of Power",
    href: "/artifacts/the-one-ring",
    image: "/v70/assets/artifact-ring.webp",
    cta: "View details",
  },
  {
    eyebrow: "Featured map",
    title: "Map of Middle-earth",
    subtitle: "Cartographer’s chart",
    href: "/catalog?type=maps",
    image: "/v72/assets/map-middle-earth.webp",
    cta: "View map",
  },
  {
    eyebrow: "Featured chronicle",
    title: "The Red Book of Westmarch",
    subtitle: "Tales and records",
    href: "/catalog?type=chronicles",
    image: "/v72/assets/chronicle-red-book.webp",
    cta: "Read chronicle",
  },
  {
    eyebrow: "Featured age",
    title: "Third Age",
    subtitle: "The Age of Men",
    href: "/ages/third-age",
    image: "/v72/assets/age-third.webp",
    cta: "Explore age",
  },
];

export function V80ApprovedHome() {
  return (
    <main className="v80-home" aria-label="Middle-earth Archive approved premium home">
      <div className="v80-bg" aria-hidden="true" />
      <div className="v80-noise" aria-hidden="true" />

      <header className="v80-topbar">
        <Link className="v80-brand" href="/" aria-label="Middle-earth Archive home">
          <span className="v80-brand-mark" aria-hidden="true">✦</span>
          <span>
            <strong>Middle-earth Archive</strong>
            <em>The lore preserved.</em>
          </span>
        </Link>

        <nav className="v80-nav" aria-label="Archive navigation">
          <Link href="/catalog">Catalog</Link>
          <Link href="/catalog?type=characters">Characters</Link>
          <Link href="/catalog?type=realms">Realms</Link>
          <Link href="/catalog?type=artifacts">Artifacts</Link>
          <Link href="/catalog?type=chronicles">Chronicles</Link>
          <Link href="/catalog?type=maps">Maps</Link>
          <Link href="/catalog?type=ages">Ages</Link>
          <Link href="/catalog">Lore</Link>
        </nav>

        <div className="v80-actions">
          <Link className="v80-palantir" href="/?search=open">
            <span aria-hidden="true">✺</span>
            Palantír Access
          </Link>
          <button className="v80-menu" type="button" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="v80-hero" aria-labelledby="v80-title">
        <div className="v80-hero-frame">
          <div className="v80-hero-left" aria-hidden="true" />
          <div className="v80-hero-right" aria-hidden="true" />

          <div className="v80-title-block">
            <p className="v80-kicker">The definitive archive of</p>
            <h1 id="v80-title">Middle-earth</h1>
            <p className="v80-subtitle">A grand repository of the Elder Days to the Fourth Age.</p>
            <p className="v80-mantra">Explore. Discover. Remember.</p>
          </div>

          <form className="v80-search" action="/catalog" aria-label="Search the Archive">
            <span aria-hidden="true">⌕</span>
            <input name="query" placeholder="Search across the Archive..." />
            <button type="submit" aria-label="Search">→</button>
          </form>

          <div className="v80-category-rail" aria-label="Archive categories">
            {categories.map((item) => (
              <Link key={item.label} href={item.href}>
                <span aria-hidden="true">{item.icon}</span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </Link>
            ))}
            <Link className="v80-all" href="/catalog">
              <span aria-hidden="true">▦</span>
              <strong>All collections</strong>
              <small>→</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="v80-featured-realm" aria-labelledby="v80-gondor">
        <button className="v80-side-arrow" type="button" aria-label="Previous featured record">‹</button>
        <article>
          <div className="v80-realm-copy">
            <p>Featured realm</p>
            <h2 id="v80-gondor">Gondor</h2>
            <strong>The Realm of Men</strong>
            <span>A sovereign realm, once mighty and enduring, stands as the last line of defense against the Shadow.</span>
            <Link href="/realms/gondor">Explore Gondor →</Link>
          </div>
          <div className="v80-realm-emblem" aria-hidden="true">♕</div>
        </article>
        <button className="v80-side-arrow" type="button" aria-label="Next featured record">›</button>
      </section>

      <section className="v80-card-grid" aria-label="Featured archive entries">
        {cards.map((card) => (
          <Link key={card.title} className="v80-card" href={card.href}>
            <img src={card.image} alt="" />
            <span className="v80-card-scrim" aria-hidden="true" />
            <div>
              <p>{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <span>{card.subtitle}</span>
              <em>{card.cta} →</em>
            </div>
          </Link>
        ))}
      </section>

      <footer className="v80-footer" aria-label="Archive metrics">
        <p>A legacy preserved. A story unfolding.</p>
        <div>
          <span>Entries in the archive <strong>8,248+</strong></span>
          <span>Years of history <strong>6,000+</strong></span>
          <span>Realms documented <strong>120+</strong></span>
          <span>Artifacts recorded <strong>3,109+</strong></span>
        </div>
      </footer>
    </main>
  );
}

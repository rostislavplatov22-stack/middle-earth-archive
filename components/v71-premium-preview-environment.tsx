
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SearchItem = {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  href: string;
  image?: string;
  tags?: string[];
};

type RawSearchResult = {
  id?: string | number;
  slug?: string;
  href?: string;
  url?: string;
  path?: string;
  type?: string;
  category?: string;
  title?: string;
  name?: string;
  label?: string;
  subtitle?: string;
  description?: string;
  excerpt?: string;
};

const asset = (name: string) => `/v71/assets/${name}`;

const nav = [
  ["Characters", "/characters"],
  ["Ages", "/ages"],
  ["Realms", "/realms"],
  ["Artifacts", "/artifacts"],
  ["Chronicles", "/chronicles"],
  ["Maps", "/maps"],
] as const;

const chips = ["First Age", "Second Age", "Third Age", "Fourth Age", "Timeless"];

const quickResults: SearchItem[] = [
  { id: "galadriel", type: "Character", title: "Galadriel", subtitle: "Lady of Lórien and bearer of Nenya", href: "/characters/galadriel", image: asset("char-galadriel.webp"), tags: ["Noldor", "Third Age"] },
  { id: "gondor", type: "Realm", title: "Gondor", subtitle: "The Realm of Men", href: "/realms/gondor", image: asset("realm-gondor.webp"), tags: ["Men", "Third Age"] },
  { id: "one-ring", type: "Artifact", title: "The One Ring", subtitle: "Artifact of Power", href: "/artifacts/the-one-ring", image: asset("artifact-ring.webp"), tags: ["Ruling Ring", "Timeless"] },
  { id: "aragorn", type: "Character", title: "Aragorn", subtitle: "Heir of Isildur, King Elessar", href: "/characters/aragorn", image: asset("char-aragorn.webp"), tags: ["Dúnedain", "Third Age"] },
];

const stats = [
  ["Realms Index", "7", "Explorable Realms", "◇"],
  ["Characters", "12,842+", "Lore Entries", "✦"],
  ["Artifacts", "3,217+", "Historical Artifacts", "✧"],
  ["Chronicles", "∞", "Timeless Tales", "✺"],
  ["Maps & Places", "1,263+", "Locations Charted", "⌑"],
] as const;

const characterCards = [
  ["Gandalf", "Istari", "/characters/gandalf", asset("char-gandalf.webp")],
  ["Frodo Baggins", "Hobbit", "/characters/frodo-baggins", asset("char-frodo.webp")],
  ["Aragorn", "Dúnedain", "/characters/aragorn", asset("char-aragorn.webp")],
  ["Galadriel", "Noldor", "/characters/galadriel", asset("char-galadriel.webp")],
] as const;

function mapRawResult(result: RawSearchResult, index: number): SearchItem {
  const type = result.type || result.category || "Archive";
  const title = result.title || result.name || result.label || "Archive record";
  const subtitle = result.subtitle || result.description || result.excerpt || "Preserved entry from the archive.";
  const slug = result.slug || String(result.id ?? index);
  const normalizedType = type.toLowerCase().replace(/s$/, "");
  const route = normalizedType === "location" ? "locations" : `${normalizedType}s`;

  return {
    id: String(result.id ?? `${type}-${slug}-${index}`),
    type: type.charAt(0).toUpperCase() + type.slice(1),
    title,
    subtitle,
    href: result.href || result.url || result.path || `/${route}/${slug}`,
    tags: [type],
  };
}

export function V71PremiumPreviewEnvironment() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [remoteResults, setRemoteResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length > 1 && remoteResults.length ? remoteResults : quickResults;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 70);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) {
      setRemoteResults([]);
      setError(false);
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    setLoading(true);
    setError(false);
    window.fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(response))
      .then((payload) => {
        const list: RawSearchResult[] = Array.isArray(payload) ? payload : payload?.results || [];
        setRemoteResults(list.slice(0, 8).map(mapRawResult));
      })
      .catch((err) => {
        if ((err as { name?: string })?.name !== "AbortError") {
          setRemoteResults([]);
          setError(true);
        }
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [query]);

  return (
    <main className="v71-home" aria-label="Middle-earth Archive premium home environment">
      <header className="v71-nav">
        <Link href="/" className="v71-brand" aria-label="Middle-earth Archive home">
          <span aria-hidden="true" className="v71-brand-mark">✦</span>
          <span>Middle-earth Archive</span>
        </Link>
        <nav className="v71-navlinks" aria-label="Archive sections">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="v71-actions">
          <button type="button" className="v71-access" onClick={() => setOpen(true)}><span aria-hidden="true">✶</span> Palantír Access</button>
          <button type="button" className="v71-menu" aria-label="Open menu"><span /><span /><span /></button>
        </div>
      </header>

      <section className="v71-theatre" aria-labelledby="v71-title">
        <div className="v71-copy">
          <p className="v71-kicker">Premium Lore Interface</p>
          <h1 id="v71-title">The wisdom of Middle-earth, revealed.</h1>
          <p className="v71-lede">Search across ages, realms, and stories. Discover characters, legends, and knowledge preserved beyond time.</p>
          <button type="button" className="v71-search" onClick={() => setOpen(true)} aria-label="Open Palantír search">
            <span className="v71-search-mark" aria-hidden="true" />
            <span>Search the Palantír...</span>
            <b aria-hidden="true">→</b>
          </button>
          <div className="v71-chips" aria-label="Age filters">
            {chips.map((chip) => <button type="button" key={chip}>◆ {chip}</button>)}
          </div>
        </div>

        <aside className="v71-palantir-scene" aria-label="Palantír stage">
          <div className="v71-arch-ring" aria-hidden="true" />
          <img src={asset("hero-palantir-stage.webp")} alt="The Palantír on an obsidian pedestal" />
          <div className="v71-stage-caption" aria-hidden="true">
            <span>Oracle Chamber</span>
            <strong>Palantír</strong>
          </div>
        </aside>
      </section>

      <section className="v71-stat-band" aria-label="Archive metrics">
        {stats.map(([label, value, detail, icon]) => (
          <article key={label}>
            <span aria-hidden="true">{icon}</span>
            <div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div>
          </article>
        ))}
      </section>

      <section className="v71-collections" aria-label="Featured archive collections">
        <article className="v71-collection v71-realms">
          <div className="v71-panel-title"><h2>Featured Realms</h2><Link href="/realms">View all →</Link></div>
          <Link href="/realms/gondor" className="v71-gondor">
            <img src={asset("realm-gondor.webp")} alt="Gondor" />
            <div><small>Realm</small><h3>Gondor</h3><p>The Realm of Men</p></div>
            <b aria-hidden="true">→</b>
          </Link>
          <div className="v71-mini-stack">
            <Link href="/realms/rohan"><img src={asset("realm-rohan.webp")} alt="Rohan" /><span>Rohan</span></Link>
            <Link href="/locations/lorien"><img src={asset("realm-lorien.webp")} alt="Lórien" /><span>Lórien</span></Link>
          </div>
        </article>

        <article className="v71-collection v71-legends">
          <div className="v71-panel-title"><h2>Legendary Characters</h2><Link href="/characters">View all →</Link></div>
          <div className="v71-character-grid">
            {characterCards.map(([name, role, href, image]) => (
              <Link className="v71-character" href={href} key={name}>
                <img src={image} alt={name} />
                <strong>{name}</strong>
                <span>{role}</span>
              </Link>
            ))}
          </div>
        </article>

        <article className="v71-collection v71-artifacts">
          <div className="v71-panel-title"><h2>Artifacts & Chronicles</h2><Link href="/artifacts">View all →</Link></div>
          <Link href="/artifacts/the-one-ring" className="v71-ring">
            <div><small>Artifact of Power</small><h3>The One Ring</h3><p>One Ring to rule them all, One Ring to find them.</p><em>View details →</em></div>
            <img src={asset("artifact-ring.webp")} alt="The One Ring" />
          </Link>
          <div className="v71-artifact-stack">
            <Link href="/chronicles/the-silmarillion"><img src={asset("chronicle-silmarillion.webp")} alt="The Silmarillion" /><span>The Silmarillion</span></Link>
            <Link href="/artifacts/anduril"><img src={asset("artifact-anduril.webp")} alt="Andúril" /><span>Andúril</span></Link>
          </div>
        </article>
      </section>

      <section className="v71-standards" aria-label="Archive quality principles">
        {[
          ["✺", "Authentic & Canonical", "Sourced from deep lore and original texts"],
          ["⌁", "Timeless & Evolving", "Knowledge preserved, continuously refined"],
          ["✦", "Immersive Experience", "More than a database — a journey through legend"],
          ["◈", "Scholarly & Secure", "Trusted, protected, and built for generations"],
        ].map(([icon, title, body]) => <article key={title}><span aria-hidden="true">{icon}</span><div><strong>{title}</strong><p>{body}</p></div></article>)}
      </section>

      {open && (
        <div className="v71-modal" role="dialog" aria-modal="true" aria-label="Palantír search">
          <button className="v71-backdrop" type="button" onClick={() => setOpen(false)} aria-label="Close search" />
          <section className="v71-oracle">
            <button type="button" className="v71-close" onClick={() => setOpen(false)} aria-label="Close search">×</button>
            <aside className="v71-oracle-side" aria-hidden="true">
              <img src={asset("hero-palantir-stage.webp")} alt="" />
              <p>The seeing-stone reveals what is remembered, and what is yet to be known.</p>
            </aside>
            <div className="v71-oracle-main">
              <p className="v71-kicker">Oracle Search</p>
              <h2>What do you seek?</h2>
              <label className="v71-modal-search">
                <span className="v71-search-mark" aria-hidden="true" />
                <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Gandalf, Galadriel, One Ring..." />
                <button type="button" aria-label="Submit search">→</button>
              </label>
              <div className="v71-tabs" aria-label="Search categories">
                {["All Results", "Characters", "Realms", "Artifacts", "Chronicles"].map((tab, index) => <button key={tab} className={index === 0 ? "is-active" : ""} type="button">{tab}</button>)}
              </div>
              <div className="v71-result-head"><span>{loading ? "Consulting the seeing-stone" : error ? "Curated archive matches" : "Top matches"}</span><small>{results.length} entries</small></div>
              <div className="v71-result-list">
                {results.map((item) => (
                  <Link key={item.id} className="v71-result" href={item.href} onClick={() => setOpen(false)}>
                    {item.image ? <img src={item.image} alt="" /> : <span className="v71-result-glyph" aria-hidden="true">✦</span>}
                    <div><small>{item.type}</small><strong>{item.title}</strong><p>{item.subtitle}</p>{item.tags?.length ? <em>{item.tags.join(" · ")}</em> : null}</div>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default V71PremiumPreviewEnvironment;

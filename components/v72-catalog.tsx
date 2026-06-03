"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

// v72 — warm obsidian catalog consistency rebuild
type CatalogKind = "All" | "Characters" | "Realms" | "Artifacts" | "Chronicles" | "Maps" | "Ages";

type CatalogEntry = {
  id: string;
  kind: Exclude<CatalogKind, "All">;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  href: string;
  age?: string;
  significance?: "Legendary" | "Epic" | "Rare" | "Notable";
  size?: "feature" | "tall" | "normal";
};

const asset = (name: string) => `/v72/assets/${name}`;

const nav = [
  ["Characters", "/characters"],
  ["Ages", "/ages"],
  ["Realms", "/realms"],
  ["Artifacts", "/artifacts"],
  ["Chronicles", "/chronicles"],
  ["Maps", "/maps"],
] as const;

const categories: { label: CatalogKind; count: string; icon: string }[] = [
  { label: "All", count: "8,248+", icon: "✺" },
  { label: "Characters", count: "1,284+", icon: "♙" },
  { label: "Realms", count: "478+", icon: "✦" },
  { label: "Artifacts", count: "3,217+", icon: "✧" },
  { label: "Chronicles", count: "∞", icon: "▣" },
  { label: "Maps", count: "1,263+", icon: "◇" },
  { label: "Ages", count: "6", icon: "⌑" },
];

const entries: CatalogEntry[] = [
  {
    id: "gondor",
    kind: "Realms",
    title: "Gondor",
    subtitle: "The Realm of Men",
    description: "A sovereign realm, once mighty and enduring, standing as the last line of defense against the Shadow.",
    image: asset("realm-gondor-wide.webp"),
    href: "/realms/gondor",
    age: "Third Age",
    significance: "Legendary",
    size: "feature",
  },
  {
    id: "gandalf",
    kind: "Characters",
    title: "Gandalf the Grey",
    subtitle: "Istari",
    image: asset("char-gandalf.webp"),
    href: "/characters/gandalf",
    age: "Third Age",
    significance: "Legendary",
    size: "tall",
  },
  {
    id: "one-ring",
    kind: "Artifacts",
    title: "The One Ring",
    subtitle: "Artifact of Power",
    image: asset("artifact-ring.webp"),
    href: "/artifacts/the-one-ring",
    age: "Timeless",
    significance: "Legendary",
    size: "tall",
  },
  {
    id: "frodo",
    kind: "Characters",
    title: "Frodo Baggins",
    subtitle: "Hobbit",
    image: asset("char-frodo.webp"),
    href: "/characters/frodo-baggins",
    age: "Third Age",
    significance: "Epic",
  },
  {
    id: "rivendell",
    kind: "Realms",
    title: "Rivendell",
    subtitle: "The Last Homely House",
    image: asset("realm-rivendell.webp"),
    href: "/realms/rivendell",
    age: "Second Age",
    significance: "Epic",
  },
  {
    id: "phial-galadriel",
    kind: "Artifacts",
    title: "Phial of Galadriel",
    subtitle: "Elven Artifact",
    image: asset("artifact-phial.webp"),
    href: "/artifacts/phial-of-galadriel",
    age: "Third Age",
    significance: "Epic",
  },
  {
    id: "red-book",
    kind: "Chronicles",
    title: "The Red Book of Westmarch",
    subtitle: "Hobbit Chronicle",
    image: asset("chronicle-red-book.webp"),
    href: "/chronicles/red-book-of-westmarch",
    age: "Third Age",
    significance: "Rare",
  },
  {
    id: "map-middle-earth",
    kind: "Maps",
    title: "Map of Middle-earth",
    subtitle: "Cartographer's Chart",
    image: asset("map-middle-earth.webp"),
    href: "/maps/middle-earth",
    significance: "Notable",
  },
  {
    id: "third-age",
    kind: "Ages",
    title: "Third Age",
    subtitle: "The Age of Men",
    image: asset("age-third.webp"),
    href: "/ages/third-age",
    significance: "Legendary",
  },
  {
    id: "aragorn",
    kind: "Characters",
    title: "Aragorn",
    subtitle: "Dúnedain",
    image: asset("char-aragorn.webp"),
    href: "/characters/aragorn",
    age: "Third Age",
    significance: "Legendary",
  },
  {
    id: "mordor",
    kind: "Realms",
    title: "Mordor",
    subtitle: "Land of Shadow",
    image: asset("realm-mordor.webp"),
    href: "/realms/mordor",
    age: "Third Age",
    significance: "Legendary",
  },
  {
    id: "narsil",
    kind: "Artifacts",
    title: "Narsil",
    subtitle: "Heirloom of Elendil",
    image: asset("artifact-narsil.webp"),
    href: "/artifacts/narsil",
    age: "Second Age",
    significance: "Epic",
  },
  {
    id: "annals-beleriand",
    kind: "Chronicles",
    title: "Annals of Beleriand",
    subtitle: "Elven Record",
    image: asset("chronicle-annals.webp"),
    href: "/chronicles/annals-of-beleriand",
    age: "First Age",
    significance: "Rare",
  },
  {
    id: "minas-tirith-map",
    kind: "Maps",
    title: "Minas Tirith",
    subtitle: "City of the Stewards",
    image: asset("map-minas-tirith.webp"),
    href: "/maps/minas-tirith",
    age: "Third Age",
    significance: "Notable",
  },
  {
    id: "second-age",
    kind: "Ages",
    title: "Second Age",
    subtitle: "The Age of Elves",
    image: asset("age-second.webp"),
    href: "/ages/second-age",
    significance: "Legendary",
  },
  {
    id: "galadriel",
    kind: "Characters",
    title: "Galadriel",
    subtitle: "Lady of Lórien",
    image: asset("char-galadriel.webp"),
    href: "/characters/galadriel",
    age: "Third Age",
    significance: "Legendary",
  },
  {
    id: "lorien",
    kind: "Realms",
    title: "Lórien",
    subtitle: "The Golden Wood",
    image: asset("realm-lorien.webp"),
    href: "/realms/lorien",
    age: "Third Age",
    significance: "Epic",
  },
  {
    id: "silmarillion",
    kind: "Chronicles",
    title: "The Silmarillion",
    subtitle: "Ancient Chronicle",
    image: asset("chronicle-silmarillion.webp"),
    href: "/chronicles/the-silmarillion",
    age: "First Age",
    significance: "Legendary",
  },
];

const ages = ["First Age", "Second Age", "Third Age", "Fourth Age", "Timeless"];
const rarity = ["Legendary", "Epic", "Rare", "Notable"] as const;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

export function V72Catalog() {
  const [active, setActive] = useState<CatalogKind>("All");
  const [query, setQuery] = useState("");
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedRarity, setSelectedRarity] = useState<string[]>([]);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    const term = normalize(query);
    return entries.filter((entry) => {
      const byKind = active === "All" || entry.kind === active;
      const byQuery = !term || normalize(`${entry.title} ${entry.subtitle} ${entry.kind} ${entry.age || ""}`).includes(term);
      const byAge = selectedAges.length === 0 || (entry.age && selectedAges.includes(entry.age));
      const byRarity = selectedRarity.length === 0 || (entry.significance && selectedRarity.includes(entry.significance));
      return byKind && byQuery && byAge && byRarity;
    });
  }, [active, query, selectedAges, selectedRarity]);

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  return (
    <main className="v72-catalog" aria-label="Middle-earth Archive catalog">
      <header className="v72-nav">
        <Link href="/" className="v72-brand" aria-label="Middle-earth Archive home">
          <span aria-hidden="true">✦</span>
          <strong>Middle-earth Archive</strong>
        </Link>
        <nav aria-label="Archive sections">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="v72-nav-actions">
          <Link href="/" className="v72-palantir-link"><span aria-hidden="true">✶</span> Palantír Access</Link>
          <button type="button" aria-label="Open menu"><i /><i /><i /></button>
        </div>
      </header>

      <section className="v72-catalog-head">
        <div>
          <p>Curated Archive Interface</p>
          <h1>Archive Catalog</h1>
        </div>
        <label className="v72-search" aria-label="Search archive catalog">
          <span aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search across the Archive..." />
          <b aria-hidden="true">→</b>
        </label>
        <button type="button" className="v72-advanced"><span aria-hidden="true">☷</span> Advanced Search</button>
      </section>

      <section className="v72-category-rail" aria-label="Catalog content categories">
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            aria-pressed={active === category.label}
            onClick={() => setActive(category.label)}
          >
            <span aria-hidden="true">{category.icon}</span>
            <em>{category.label}</em>
            <small>{category.count}</small>
          </button>
        ))}
        <div className="v72-sort">
          <span>Sort by</span>
          <strong>Most Relevant</strong>
          <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")}>▦</button>
          <button type="button" aria-pressed={view === "list"} onClick={() => setView("list")}>☰</button>
        </div>
      </section>

      <section className={`v72-catalog-body v72-view-${view}`}>
        <aside className="v72-filter-panel" aria-label="Refine results">
          <div className="v72-filter-title"><h2>Refine Results</h2><button type="button" onClick={() => { setSelectedAges([]); setSelectedRarity([]); setActive("All"); setQuery(""); }}>Reset All</button></div>
          <div className="v72-filter-group">
            <h3>Content Type</h3>
            {categories.map((item) => (
              <button key={item.label} type="button" aria-pressed={active === item.label} onClick={() => setActive(item.label)}>
                <span>{item.icon}</span><em>{item.label === "All" ? "All Types" : item.label}</em><small>{item.count}</small>
              </button>
            ))}
          </div>
          <div className="v72-filter-group">
            <h3>Ages</h3>
            {ages.map((age) => (
              <label key={age}>
                <input type="checkbox" checked={selectedAges.includes(age)} onChange={() => toggle(selectedAges, age, setSelectedAges)} />
                <span>{age}</span>
                <small>{age === "Third Age" ? "4,982+" : age === "Second Age" ? "1,540+" : age === "First Age" ? "1,025+" : age === "Fourth Age" ? "617+" : "84+"}</small>
              </label>
            ))}
          </div>
          <div className="v72-filter-group">
            <h3>Rarity / Significance</h3>
            {rarity.map((level) => (
              <label key={level}>
                <input type="checkbox" checked={selectedRarity.includes(level)} onChange={() => toggle(selectedRarity, level, setSelectedRarity)} />
                <span>{level}</span>
                <small>{level === "Legendary" ? "217+" : level === "Epic" ? "743+" : level === "Rare" ? "2,108+" : "5,180+"}</small>
              </label>
            ))}
          </div>
          <button type="button" className="v72-apply">Apply Filters</button>
        </aside>

        <div className="v72-results">
          <div className="v72-results-head">
            <p>{filtered.length.toLocaleString()} visible from 8,248+ results</p>
            <span>Viewing 1–{Math.min(filtered.length, 24)} of 8,248+</span>
          </div>
          <div className="v72-grid">
            {filtered.map((entry) => <CatalogCard key={entry.id} entry={entry} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function singularKind(kind: string) {
  if (kind === "Characters") return "Character";
  if (kind === "Realms") return "Realm";
  if (kind === "Artifacts") return "Artifact";
  if (kind === "Chronicles") return "Chronicle";
  if (kind === "Maps") return "Map";
  if (kind === "Ages") return "Age";
  return kind;
}

function CatalogCard({ entry }: { entry: CatalogEntry }) {
  return (
    <Link href={entry.href} className={`v72-card v72-card-${entry.size || "normal"}`}>
      <img src={entry.image} alt="" loading="lazy" />
      <span className="v72-card-kind">{singularKind(entry.kind).toUpperCase()}</span>
      <div className="v72-card-copy">
        <h2>{entry.title}</h2>
        <p>{entry.subtitle}</p>
        {entry.description && <small>{entry.description}</small>}
        <div>
          {entry.age && <em>{entry.age}</em>}
          {entry.significance && <em>{entry.significance}</em>}
        </div>
      </div>
      <b aria-hidden="true">✦</b>
    </Link>
  );
}

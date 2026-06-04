
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { v77CharacterSearchEntries } from "@/lib/v77-character-data";

type SearchResult = {
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
  image?: string;
};

type V72PalantirSearchProps = {
  /** Shows the fixed premium trigger in the top/right safe zone. */
  showFloatingTrigger?: boolean;
  /** Text shown inside the trigger button. */
  triggerLabel?: string;
  /** Optional CSS class for custom placement. */
  className?: string;
};

const asset = (name: string) => `/v72/assets/${name}`;

const categoryTabs = [
  { label: "All Results", count: "12" },
  { label: "Characters", count: "70+" },
  { label: "Realms", count: "3" },
  { label: "Artifacts", count: "3" },
  { label: "Chronicles", count: "∞" },
  { label: "Maps", count: "2" },
];

const characterQuickResults: SearchResult[] = v77CharacterSearchEntries.slice(0, 10).map((entry) => ({
  id: entry.slug,
  type: "Character",
  title: entry.title,
  subtitle: entry.excerpt,
  href: entry.href,
  image: entry.image,
  tags: ["Character"],
}));

const quickResults: SearchResult[] = [
  ...characterQuickResults,
  {
    id: "one-ring",
    type: "Artifact",
    title: "The One Ring",
    subtitle: "Artifact of Power, forged in the fire of Orodruin.",
    href: "/artifacts/the-one-ring",
    image: asset("artifact-ring.webp"),
    tags: ["Ruling Ring", "Timeless"],
  },
  {
    id: "lorien",
    type: "Location",
    title: "Lórien",
    subtitle: "The Golden Wood beneath the protection of the Lady.",
    href: "/locations/lorien",
    image: asset("realm-lorien.webp"),
    tags: ["Wilderland", "Third Age"],
  },
  {
    id: "phial",
    type: "Artifact",
    title: "Phial of Galadriel",
    subtitle: "A preserved light for paths where all other lights fail.",
    href: "/artifacts/phial-of-galadriel",
    image: asset("artifact-phial.webp"),
    tags: ["Elven Artifact", "Third Age"],
  },
];
const trending = ["Samwise Gamgee", "Bilbo Baggins", "Legolas", "Éowyn", "Elrond", "Sauron", "Beren", "Lúthien"];

function mapRawResult(result: RawSearchResult, index: number): SearchResult {
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
    image: result.image,
    tags: [type],
  };
}

export function V72PalantirSearch({ showFloatingTrigger = true, triggerLabel = "Palantír Access", className = "" }: V72PalantirSearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [remoteResults, setRemoteResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();
  const results = trimmed.length > 1 && remoteResults.length > 0 ? remoteResults : quickResults;
  const statusLabel = useMemo(() => {
    if (loading) return "Consulting the seeing-stone";
    if (error) return "Curated archive matches";
    if (trimmed.length > 1) return "Oracle matches";
    return "Top matches";
  }, [loading, error, trimmed.length]);

  useEffect(() => {
    const isEditableTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tag = target.tagName.toLowerCase();
      return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
    };

    const onKey = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const editable = isEditableTarget(event.target);
      const altK = event.altKey && !event.ctrlKey && !event.metaKey && key === "k";
      const ctrlShiftK = (event.ctrlKey || event.metaKey) && event.shiftKey && key === "k";
      const slashSearch = !editable && !event.altKey && !event.ctrlKey && !event.metaKey && event.key === "/";

      if (altK || ctrlShiftK || slashSearch) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(true);
        return;
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timeout = window.setTimeout(() => inputRef.current?.focus(), 90);
    document.documentElement.classList.add("v72s-oracle-open");
    return () => {
      window.clearTimeout(timeout);
      document.documentElement.classList.remove("v72s-oracle-open");
    };
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

    window
      .fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
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
    <>
      {showFloatingTrigger && (
        <button type="button" className={`v72s-trigger ${className}`} onClick={() => setOpen(true)} aria-label="Open Palantír search with Alt K">
          <span className="v72s-trigger-orb" aria-hidden="true" />
          <span>{triggerLabel}</span>
          <kbd>Alt K</kbd>
        </button>
      )}

      {open && (
        <div className="v72s-modal" role="dialog" aria-modal="true" aria-label="Palantír search">
          <button type="button" className="v72s-backdrop" aria-label="Close Palantír search" onClick={() => setOpen(false)} />
          <section className="v72s-oracle" aria-labelledby="v72s-oracle-title">
            <button type="button" className="v72s-close" aria-label="Close search" onClick={() => setOpen(false)}>×</button>

            <aside className="v72s-oracle-side" aria-label="Palantír oracle panel">
              <div className="v72s-orb-frame" aria-hidden="true">
                <span className="v72s-orb-aura" />
                <img src={asset("oracle-palantir-panel.webp")} alt="" />
              </div>
              <blockquote>
                <p>“The seeing-stone reveals what is remembered, and what is yet to be known.”</p>
                <cite>— Minas Tirith Archives</cite>
              </blockquote>
              <div className="v72s-side-meta">
                <span>Indexed knowledge</span>
                <strong>18,000+</strong>
                <small>entities, realms, artifacts and chronicles</small>
              </div>
            </aside>

            <div className="v72s-oracle-main">
              <p className="v72s-kicker">Oracle Search</p>
              <h2 id="v72s-oracle-title">What do you seek?</h2>
              <label className="v72s-search-field">
                <span className="v72s-search-mark" aria-hidden="true" />
                <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Gandalf, Samwise, Lúthien, Sauron..." />
                <button type="button" aria-label="Submit search"><span aria-hidden="true">→</span></button>
              </label>

              <div className="v72s-tab-row" aria-label="Search categories">
                {categoryTabs.map((tab, index) => (
                  <button key={tab.label} type="button" className={index === 0 ? "is-active" : ""}>
                    <span>{tab.label}</span>
                    <small>{tab.count}</small>
                  </button>
                ))}
              </div>

              <div className="v72s-results-header">
                <span>{statusLabel}</span>
                <small>{results.length} entries</small>
              </div>

              <div className="v72s-result-list">
                {results.map((item) => (
                  <Link key={item.id} href={item.href} className="v72s-result" onClick={() => setOpen(false)}>
                    {item.image ? <img src={item.image} alt="" /> : <span className="v72s-result-glyph" aria-hidden="true">✦</span>}
                    <div>
                      <small>{item.type}</small>
                      <strong>{item.title}</strong>
                      <p>{item.subtitle}</p>
                      {item.tags?.length ? <em>{item.tags.join(" · ")}</em> : null}
                    </div>
                    <b aria-hidden="true">↗</b>
                  </Link>
                ))}
              </div>

              <footer className="v72s-trending" aria-label="Trending searches">
                <span>Trending searches</span>
                <div>
                  {trending.map((item) => (
                    <button key={item} type="button" onClick={() => setQuery(item)}>{item}</button>
                  ))}
                </div>
              </footer>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default V72PalantirSearch;

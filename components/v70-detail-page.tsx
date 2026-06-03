import Link from "next/link";
import { Libre_Baskerville, Cormorant_Garamond, Cinzel, Manrope } from "next/font/google";
import type { V70DetailRecord } from "@/lib/v70-detail-data";

const v70Bodoni = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-v70-bodoni",
  display: "swap",
});

const v70Serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-v70-serif",
  display: "swap",
});

const v70Display = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-v70-display",
  display: "swap",
});

const v70Sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-v70-sans",
  display: "swap",
});

const navItems = [
  { label: "Characters", href: "/catalog?type=characters" },
  { label: "Ages", href: "/catalog?type=ages" },
  { label: "Realms", href: "/catalog?type=realms" },
  { label: "Artifacts", href: "/catalog?type=artifacts" },
  { label: "Chronicles", href: "/catalog?type=chronicles" },
  { label: "Maps", href: "/catalog?type=maps" },
];

function labelForKind(kind: V70DetailRecord["kind"]) {
  if (kind === "character") return "Character";
  if (kind === "realm") return "Realm";
  if (kind === "location") return "Location";
  if (kind === "artifact") return "Artifact";
  return "Age";
}

export function V70DetailPage({ record }: { record: V70DetailRecord }) {
  const heroImage = record.heroImage || record.image;
  const primaryMetric = record.metrics[0];
  const secondaryMetrics = record.metrics.slice(1, 4);

  return (
    <main className={`${v70Bodoni.variable} ${v70Serif.variable} ${v70Display.variable} ${v70Sans.variable} v70-shell`}>
      <div className="v70-bg" aria-hidden="true" />
      <div className="v70-grain" aria-hidden="true" />

      <header className="v70-topbar">
        <Link href="/" className="v70-brand" aria-label="Middle-earth Archive home">
          <span className="v70-brand-mark">✦</span>
          <span>Middle-earth Archive</span>
        </Link>
        <nav className="v70-nav" aria-label="Archive navigation">
          {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="v70-access" href="/?search=open"><span>✧</span> Palantír Access</Link>
      </header>

      <section className="v70-hero" aria-labelledby="v70-title">
        <div className="v70-hero-image" aria-hidden="true"><img src={heroImage} alt="" /></div>
        <div className="v70-hero-overlay" aria-hidden="true" />
        <div className="v70-vertical-label" aria-hidden="true"><span>BLACK LABEL ARCHIVE</span><em>{labelForKind(record.kind)}</em></div>

        <article className="v70-copy">
          <div className="v70-breadcrumb">
            <Link href="/">Archive</Link><span>/</span><Link href="/catalog">Catalog</Link><span>/</span><span>{labelForKind(record.kind)}</span>
          </div>
          <p className="v70-eyebrow">{record.eyebrow}</p>
          <h1 id="v70-title">{record.title}</h1>
          <p className="v70-subtitle">{record.subtitle}</p>
          <p className="v70-description">{record.description}</p>
          <div className="v70-actions">
            <Link href={record.primaryActionHref} className="v70-primary">{record.primaryActionLabel}</Link>
            <Link href="/catalog" className="v70-secondary">Return to catalog</Link>
          </div>
        </article>

        <aside className="v70-object" aria-label={`${record.title} exhibit image`}>
          <div className="v70-object-halo" aria-hidden="true" />
          <div className="v70-object-frame"><img src={record.image} alt="" /></div>
          <div className="v70-object-plaque">
            <span>{record.accent}</span>
            <strong>{record.rarity}</strong>
          </div>
        </aside>

        <div className="v70-ledger" aria-label="Archive metrics">
          <div className="v70-ledger-feature">
            <span>{primaryMetric?.label || "Archive"}</span>
            <strong>{primaryMetric?.value || record.rarity}</strong>
            <small>{primaryMetric?.note || record.status}</small>
          </div>
          {secondaryMetrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="v70-content">
        <aside className="v70-passport" aria-label="Identity and related entries">
          <section className="v70-panel v70-identity">
            <p className="v70-kicker">Museum Passport</p>
            <h2>Identity</h2>
            <dl>
              {record.facts.slice(0, 6).map((fact) => (
                <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
              ))}
              <div><dt>Era</dt><dd>{record.era}</dd></div>
              <div><dt>Realm</dt><dd>{record.realm}</dd></div>
              <div><dt>Status</dt><dd>{record.status}</dd></div>
            </dl>
          </section>

          <section className="v70-panel v70-related">
            <p className="v70-kicker">Connected Records</p>
            <h2>Related</h2>
            <div>
              {record.related.map((item) => (
                <Link key={`${item.type}-${item.title}`} href={item.href}>
                  <img src={item.image} alt="" />
                  <span><small>{item.type}</small><strong>{item.title}</strong></span>
                  <em>→</em>
                </Link>
              ))}
            </div>
          </section>
        </aside>

        <article className="v70-manuscript">
          <header>
            <p>Curated Archive Record</p>
            <h2>Preserved as a private black-label dossier</h2>
          </header>
          {record.sections.map((section, index) => (
            <section key={section.title} className="v70-chapter">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="v70-kicker">Archive Note</p>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </article>

        <aside className="v70-timeline" aria-label="Timeline of significance">
          <p className="v70-kicker">Chronology</p>
          <h2>Timeline</h2>
          <div>
            {record.timeline.map((item) => (
              <article key={`${item.year}-${item.title}`}>
                <span>{item.year}</span>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

import Link from "next/link";
import { getV85CharacterDossier } from "@/lib/v85-character-dossiers";

type Props = {
  slug: string;
};

export default function V85CharacterDossierPage({ slug }: Props) {
  const entry = getV85CharacterDossier(slug);

  if (!entry) {
    return (
      <main className="v85-missing">
        <Link href="/catalog?type=characters">← Back to characters</Link>
        <h1>Archive record not found</h1>
      </main>
    );
  }

  return (
    <main className={`v85-dossier v85-${entry.accent}`}>
      <section className="v85-hero">
        <div className="v85-bg" aria-hidden="true" />
        <div className="v85-copy">
          <p className="v85-kicker">Black Label Character Dossier</p>
          <h1>{entry.name}</h1>
          <p className="v85-epithet">{entry.epithet}</p>
          <p className="v85-summary">{entry.summary}</p>

          <div className="v85-actions">
            <Link href="/catalog?type=characters">Character Catalog</Link>
            <Link href={`/?search=open`}>Open Palantír</Link>
          </div>
        </div>

        <aside className="v85-portrait">
          <img src={entry.image} alt="" />
          <div>
            <span>{entry.rarity}</span>
            <strong>{entry.role}</strong>
          </div>
        </aside>
      </section>

      <section className="v85-ledger">
        {entry.metadata.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="v85-content">
        {entry.sections.map((section) => (
          <article key={section.title} className="v85-panel">
            <p>Archive Note</p>
            <h2>{section.title}</h2>
            <span />
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

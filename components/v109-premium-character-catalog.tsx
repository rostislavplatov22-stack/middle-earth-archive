"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type DossierType = "all" | "dark" | "light" | "elven" | "royal";

const dossiers = [
  {
    slug: "sauron",
    name: "Саурон",
    subtitle: "Тёмный Лорд",
    edition: "Black Label",
    type: "dark",
    role: "Владыка Мордора",
    href: "/characters/sauron",
    image: "/v109/sauron-premium-card.webp",
    fallback: "/v109/sauron-premium-card.jpg",
    accent: "obsidian",
    quote: "Воля, страх и власть.",
  },
  {
    slug: "gandalf",
    name: "Гэндальф",
    subtitle: "Серый Странник",
    edition: "Celestial Label",
    type: "light",
    role: "Истар, Хранитель света",
    href: "/characters/gandalf",
    image: "/v109/gandalf-premium-card.webp",
    fallback: "/v109/gandalf-premium-card.jpg",
    accent: "celestial",
    quote: "Свет, мудрость и надежда.",
  },
  {
    slug: "galadriel",
    name: "Галадриэль",
    subtitle: "Владычица Лориэна",
    edition: "Elven Royal Label",
    type: "elven",
    role: "Хранительница мудрости",
    href: "/characters/galadriel",
    image: "/v109/galadriel-premium-card.webp",
    fallback: "/v109/galadriel-premium-card.jpg",
    accent: "elven",
    quote: "Красота, милосердие и древняя сила.",
  },
  {
    slug: "aragorn",
    name: "Арагорн",
    subtitle: "Король Элессар",
    edition: "King of Men Edition",
    type: "royal",
    role: "Возвращённый король",
    href: "/characters/aragorn",
    image: "/v109/aragorn-premium-card.webp",
    fallback: "/v109/aragorn-premium-card.jpg",
    accent: "royal",
    quote: "Один король, две короны, один народ.",
  },
] as const;

const filters: { label: string; value: DossierType }[] = [
  { label: "Все досье", value: "all" },
  { label: "Black", value: "dark" },
  { label: "Celestial", value: "light" },
  { label: "Elven Royal", value: "elven" },
  { label: "King of Men", value: "royal" },
];

export default function V109PremiumCharacterCatalog() {
  const [active, setActive] = useState<DossierType>("all");

  const visible = useMemo(() => {
    if (active === "all") return dossiers;
    return dossiers.filter((item) => item.type === active);
  }, [active]);

  return (
    <main className="v109-catalog">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          margin: 0 !important;
          background: #030402 !important;
          overflow-x: hidden;
        }

        .v109-catalog,
        .v109-catalog * {
          box-sizing: border-box;
        }

        .v109-catalog {
          --gold: #d7b66e;
          --gold-2: #f1dc9f;
          --ivory: #f4eddd;
          --muted: rgba(244,237,221,.66);
          --line: rgba(215,182,110,.22);
          --panel: rgba(8, 9, 7, .78);

          min-height: 100vh;
          padding: 28px clamp(22px, 4vw, 72px) 58px;
          color: var(--ivory);
          font-family: Inter, Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 18% 12%, rgba(214, 177, 94, .09), transparent 28rem),
            radial-gradient(circle at 82% 18%, rgba(68, 100, 88, .12), transparent 30rem),
            linear-gradient(180deg, #050604 0%, #020302 62%, #070705 100%);
          overflow: hidden;
        }

        .v109-topbar {
          min-height: 72px;
          display: grid;
          grid-template-columns: minmax(220px, 1fr) auto minmax(220px, 1fr);
          align-items: center;
          gap: 24px;
          border-bottom: 1px solid var(--line);
        }

        .v109-brand {
          color: var(--ivory);
          text-decoration: none;
          font-family: Georgia, "Times New Roman", serif;
          text-transform: uppercase;
          letter-spacing: .24em;
          line-height: 1.05;
        }

        .v109-brand span {
          display: block;
          color: var(--gold-2);
          font-size: 16px;
        }

        .v109-brand small {
          display: block;
          margin-top: 5px;
          color: rgba(244,237,221,.46);
          font-size: 10px;
          letter-spacing: .14em;
        }

        .v109-nav {
          display: flex;
          justify-content: center;
          gap: clamp(18px, 2.4vw, 44px);
        }

        .v109-nav a,
        .v109-palantir,
        .v109-filter,
        .v109-card-link {
          color: var(--gold);
          text-decoration: none;
          font-family: Georgia, "Times New Roman", serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 11px;
        }

        .v109-palantir {
          justify-self: end;
          padding: 13px 22px;
          border: 1px solid rgba(215,182,110,.34);
          border-radius: 999px;
          background: rgba(255,255,255,.015);
          box-shadow: inset 0 0 24px rgba(215,182,110,.04);
        }

        .v109-hero {
          position: relative;
          padding: clamp(54px, 6vw, 96px) 0 34px;
          text-align: center;
        }

        .v109-hero::before {
          content: "";
          position: absolute;
          inset: 20px 10% auto;
          height: 340px;
          background: radial-gradient(circle, rgba(215,182,110,.08), transparent 64%);
          pointer-events: none;
        }

        .v109-kicker {
          position: relative;
          margin: 0 0 18px;
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          text-transform: uppercase;
          letter-spacing: .35em;
          font-size: 12px;
        }

        .v109-title {
          position: relative;
          margin: 0;
          color: var(--ivory);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(58px, 8vw, 132px);
          line-height: .86;
          font-weight: 500;
          letter-spacing: .08em;
          text-shadow: 0 26px 90px rgba(0,0,0,.76);
        }

        .v109-subtitle {
          position: relative;
          margin: 22px auto 0;
          max-width: 760px;
          color: var(--muted);
          font-size: clamp(16px, 1.35vw, 20px);
          line-height: 1.75;
        }

        .v109-filters {
          margin: 32px auto 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .v109-filter {
          cursor: pointer;
          min-height: 42px;
          padding: 0 18px;
          border: 1px solid rgba(215,182,110,.25);
          border-radius: 999px;
          background: rgba(255,255,255,.018);
          color: rgba(215,182,110,.74);
          transition: transform .25s ease, border-color .25s ease, color .25s ease, background .25s ease;
        }

        .v109-filter.is-active {
          color: var(--ivory);
          border-color: rgba(215,182,110,.58);
          background: rgba(215,182,110,.10);
          box-shadow: 0 0 40px rgba(215,182,110,.07);
        }

        .v109-grid {
          position: relative;
          margin-top: clamp(28px, 3vw, 48px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(14px, 1.7vw, 26px);
        }

        .v109-card {
          position: relative;
          min-height: 620px;
          border: 1px solid rgba(215,182,110,.24);
          background:
            linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.006)),
            var(--panel);
          overflow: hidden;
          text-decoration: none;
          color: var(--ivory);
          box-shadow: 0 28px 86px rgba(0,0,0,.30);
          isolation: isolate;
          transform: translateZ(0);
          transition: transform .45s cubic-bezier(.2,.8,.2,1), border-color .45s ease, box-shadow .45s ease;
        }

        .v109-card::before {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(215,182,110,.16);
          z-index: 3;
          pointer-events: none;
        }

        .v109-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(0,0,0,0) 38%, rgba(0,0,0,.55) 68%, rgba(0,0,0,.90) 100%),
            radial-gradient(circle at 50% 22%, transparent 0, rgba(0,0,0,.18) 75%);
        }

        .v109-image {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .v109-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transform: scale(1.01);
          transition: transform .65s cubic-bezier(.2,.8,.2,1), filter .65s ease;
        }

        .v109-card-body {
          position: absolute;
          z-index: 4;
          left: 24px;
          right: 24px;
          bottom: 24px;
        }

        .v109-edition {
          display: inline-flex;
          min-height: 32px;
          align-items: center;
          padding: 0 12px;
          border: 1px solid rgba(215,182,110,.30);
          border-radius: 999px;
          background: rgba(4,4,3,.58);
          color: var(--gold-2);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .20em;
          font-size: 10px;
          backdrop-filter: blur(10px);
        }

        .v109-card h2 {
          margin: 18px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 3vw, 54px);
          line-height: .92;
          font-weight: 500;
          letter-spacing: .06em;
        }

        .v109-card h3 {
          margin: 9px 0 0;
          color: var(--gold-2);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 500;
        }

        .v109-role {
          margin: 15px 0 0;
          color: rgba(244,237,221,.75);
          font-size: 14px;
          line-height: 1.55;
        }

        .v109-quote {
          margin: 16px 0 0;
          color: rgba(215,182,110,.86);
          font-family: Georgia, serif;
          font-size: 14px;
          line-height: 1.45;
        }

        .v109-card-link {
          display: inline-flex;
          margin-top: 18px;
          min-height: 38px;
          align-items: center;
          color: var(--gold);
        }

        .v109-card[data-accent="celestial"] {
          background: linear-gradient(180deg, rgba(246,241,231,.92), rgba(220,205,175,.42));
          color: #2f2a21;
        }

        .v109-card[data-accent="celestial"]::after {
          background:
            linear-gradient(180deg, rgba(255,255,255,0) 34%, rgba(250,245,231,.45) 62%, rgba(244,236,215,.96) 100%);
        }

        .v109-card[data-accent="celestial"] .v109-role,
        .v109-card[data-accent="celestial"] .v109-quote {
          color: rgba(55,45,32,.80);
        }

        .v109-card[data-accent="celestial"] .v109-edition {
          background: rgba(250,246,236,.70);
          color: #9a7436;
        }

        .v109-card[data-accent="elven"] {
          border-color: rgba(118, 155, 137, .34);
        }

        .v109-card[data-accent="elven"] .v109-edition,
        .v109-card[data-accent="elven"] .v109-card-link {
          color: #b9d2c4;
          border-color: rgba(124, 166, 146, .35);
        }

        .v109-card[data-accent="royal"] {
          border-color: rgba(174, 145, 77, .34);
        }

        .v109-stats {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.012);
        }

        .v109-stat {
          min-height: 82px;
          padding: 18px 20px;
          border-right: 1px solid var(--line);
        }

        .v109-stat:last-child {
          border-right: 0;
        }

        .v109-stat span {
          display: block;
          color: rgba(244,237,221,.46);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .24em;
          font-size: 10px;
        }

        .v109-stat strong {
          display: block;
          margin-top: 8px;
          color: var(--gold-2);
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 500;
        }

        @media (hover: hover) {
          .v109-filter:hover {
            transform: translateY(-1px);
            color: var(--ivory);
            border-color: rgba(215,182,110,.44);
          }

          .v109-card:hover {
            transform: translateY(-10px);
            border-color: rgba(215,182,110,.58);
            box-shadow: 0 40px 120px rgba(0,0,0,.45);
          }

          .v109-card:hover img {
            transform: scale(1.065);
            filter: contrast(1.04) saturate(1.02);
          }
        }

        @media (max-width: 1280px) {
          .v109-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .v109-card {
            min-height: 680px;
          }
        }

        @media (max-width: 760px) {
          .v109-catalog {
            padding: 20px 16px 44px;
          }

          .v109-topbar {
            grid-template-columns: 1fr;
            gap: 18px;
            padding-bottom: 18px;
          }

          .v109-nav {
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .v109-palantir {
            justify-self: start;
          }

          .v109-title {
            font-size: clamp(46px, 15vw, 78px);
          }

          .v109-grid {
            grid-template-columns: 1fr;
          }

          .v109-card {
            min-height: 620px;
          }

          .v109-stats {
            grid-template-columns: 1fr 1fr;
          }

          .v109-stat:nth-child(2) {
            border-right: 0;
          }
        }
      ` }} />

      <header className="v109-topbar">
        <Link href="/" className="v109-brand">
          <span>Архив Средиземья</span>
          <small>Премиум коллекция знаний</small>
        </Link>

        <nav className="v109-nav">
          <Link href="/catalog?type=characters">Персонажи</Link>
          <Link href="/catalog?type=realms">Народы</Link>
          <Link href="/catalog?type=artifacts">Артефакты</Link>
          <Link href="/catalog?type=chronicles">Хроники</Link>
        </nav>

        <Link href="/?search=open" className="v109-palantir">Открыть Палантир</Link>
      </header>

      <section className="v109-hero">
        <p className="v109-kicker">Premium dossiers collection</p>
        <h1 className="v109-title">Персонажи</h1>
        <p className="v109-subtitle">
          Главные фигуры Средиземья собраны как коллекционные досье: тьма, свет,
          эльфийская власть и королевское наследие в едином premium-архиве.
        </p>

        <div className="v109-filters" aria-label="Фильтр premium dossiers">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`v109-filter ${active === filter.value ? "is-active" : ""}`}
              onClick={() => setActive(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="v109-grid">
        {visible.map((item) => (
          <Link href={item.href} key={item.slug} className="v109-card" data-accent={item.accent}>
            <picture className="v109-image">
              <source srcSet={item.image} type="image/webp" />
              <img src={item.fallback} alt={item.name} loading="eager" />
            </picture>

            <div className="v109-card-body">
              <span className="v109-edition">{item.edition}</span>
              <h2>{item.name}</h2>
              <h3>{item.subtitle}</h3>
              <p className="v109-role">{item.role}</p>
              <p className="v109-quote">{item.quote}</p>
              <span className="v109-card-link">Открыть досье →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="v109-stats" aria-label="Статистика premium коллекции">
        <article className="v109-stat">
          <span>Premium dossiers</span>
          <strong>4</strong>
        </article>
        <article className="v109-stat">
          <span>Стили</span>
          <strong>4</strong>
        </article>
        <article className="v109-stat">
          <span>Коллекция</span>
          <strong>Black / Light</strong>
        </article>
        <article className="v109-stat">
          <span>Статус</span>
          <strong>Curated</strong>
        </article>
      </section>
    </main>
  );
}

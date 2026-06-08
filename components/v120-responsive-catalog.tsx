"use client";

import Link from "next/link";
import V116PremiumCatalogWithAllLinks from "./v116-premium-catalog-with-all-links";

const characters = [
  {
    name: "Sauron",
    title: "Dark Lord",
    href: "/characters/sauron",
    type: "Dark",
    mark: "EYE",
    text: "Владыка Мордора. Воля власти, тени и Единого Кольца.",
  },
  {
    name: "Gandalf",
    title: "Istar of the Order",
    href: "/characters/gandalf",
    type: "Light",
    mark: "ISTAR",
    text: "Майар, проводник Свободных Народов и хранитель надежды.",
  },
  {
    name: "Galadriel",
    title: "Lady of Lórien",
    href: "/characters/galadriel",
    type: "Elven",
    mark: "ELVEN",
    text: "Древняя владычица, носительница Нэньи и света Эльдар.",
  },
  {
    name: "Aragorn",
    title: "King Elessar",
    href: "/characters/aragorn",
    type: "Royal",
    mark: "KING",
    text: "Наследник Исилдура, следопыт, король и последняя надежда людей.",
  },
  {
    name: "Frodo Baggins",
    title: "Ring Bearer",
    href: "/characters/frodo",
    type: "Hobbit",
    mark: "RING",
    text: "Хранитель Кольца, чья стойкость изменила судьбу Средиземья.",
  },
  {
    name: "Legolas",
    title: "Prince of Mirkwood",
    href: "/characters/legolas",
    type: "Elven",
    mark: "BOW",
    text: "Эльфийский лучник, член Братства и голос лесного королевства.",
  },
];

export default function V120ResponsiveCatalog() {
  return (
    <>
      <div className="v120-desktop-catalog">
        <V116PremiumCatalogWithAllLinks />
      </div>

      <main className="v120-mobile-catalog">
        <section className="v120-mobile-hero">
          <p className="v120-kicker">Middle-earth Archive</p>
          <h1>Character Catalog</h1>
          <p>
            Премиальные досье героев, королей, магов и сил Тьмы.
          </p>
        </section>

        <section className="v120-mobile-filters" aria-label="Catalog filters">
          <span>All</span>
          <span>Light</span>
          <span>Dark</span>
          <span>Elven</span>
          <span>Royal</span>
        </section>

        <section className="v120-mobile-grid">
          {characters.map((character) => (
            <Link
              className="v120-mobile-card"
              href={character.href}
              key={character.name}
            >
              <div className="v120-card-top">
                <span>{character.type}</span>
                <strong>{character.mark}</strong>
              </div>

              <div className="v120-card-sigil" aria-hidden="true">
                {character.name.slice(0, 1)}
              </div>

              <div className="v120-card-copy">
                <h2>{character.name}</h2>
                <p className="v120-card-title">{character.title}</p>
                <p className="v120-card-text">{character.text}</p>
              </div>

              <div className="v120-card-action">
                View dossier <span>→</span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <style jsx global>{`
        .v120-mobile-catalog {
          display: none;
        }

        @media (max-width: 760px) {
          html,
          body {
            overflow-x: hidden !important;
            background: #030302 !important;
          }

          .v120-desktop-catalog {
            display: none !important;
          }

          .v120-mobile-catalog {
            display: block;
            min-height: 100svh;
            padding: 28px 16px 56px;
            color: #efe5d0;
            background:
              radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.18), transparent 34%),
              radial-gradient(circle at 100% 20%, rgba(177, 74, 38, 0.16), transparent 32%),
              linear-gradient(180deg, #050505 0%, #0b0907 48%, #030302 100%);
          }

          .v120-mobile-hero {
            padding: 34px 0 22px;
            text-align: center;
          }

          .v120-kicker {
            margin: 0 0 12px;
            color: rgba(200, 164, 93, 0.86);
            font-size: 11px;
            line-height: 1;
            letter-spacing: 0.28em;
            text-transform: uppercase;
          }

          .v120-mobile-hero h1 {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 12vw, 52px);
            line-height: 0.95;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            text-wrap: balance;
          }

          .v120-mobile-hero p:last-child {
            max-width: 31ch;
            margin: 16px auto 0;
            color: rgba(239, 229, 208, 0.7);
            font-size: 14px;
            line-height: 1.6;
          }

          .v120-mobile-filters {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 4px 0 18px;
            scrollbar-width: none;
          }

          .v120-mobile-filters::-webkit-scrollbar {
            display: none;
          }

          .v120-mobile-filters span {
            flex: 0 0 auto;
            min-height: 40px;
            padding: 12px 16px;
            border: 1px solid rgba(200, 164, 93, 0.28);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.04);
            color: rgba(239, 229, 208, 0.78);
            font-size: 11px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .v120-mobile-grid {
            display: grid;
            gap: 14px;
          }

          .v120-mobile-card {
            position: relative;
            display: block;
            min-height: 248px;
            padding: 18px;
            overflow: hidden;
            border: 1px solid rgba(200, 164, 93, 0.24);
            border-radius: 26px;
            color: #efe5d0;
            text-decoration: none;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
              radial-gradient(circle at 50% 32%, rgba(200, 164, 93, 0.18), transparent 36%),
              #080705;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.12),
              0 24px 70px rgba(0, 0, 0, 0.45);
          }

          .v120-mobile-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(90deg, transparent, rgba(200, 164, 93, 0.12), transparent),
              radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12), transparent 38%);
            opacity: 0.75;
            pointer-events: none;
          }

          .v120-card-top,
          .v120-card-copy,
          .v120-card-action {
            position: relative;
            z-index: 1;
          }

          .v120-card-top {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            color: rgba(200, 164, 93, 0.82);
            font-size: 10px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .v120-card-sigil {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 112px;
            height: 112px;
            display: grid;
            place-items: center;
            transform: translate(-50%, -48%);
            border: 1px solid rgba(200, 164, 93, 0.22);
            border-radius: 999px;
            color: rgba(200, 164, 93, 0.22);
            font-family: Georgia, "Times New Roman", serif;
            font-size: 64px;
            line-height: 1;
          }

          .v120-card-copy {
            margin-top: 82px;
          }

          .v120-card-copy h2 {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 30px;
            line-height: 0.95;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .v120-card-title {
            margin: 8px 0 0;
            color: rgba(200, 164, 93, 0.86);
            font-size: 12px;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .v120-card-text {
            margin: 12px 0 0;
            color: rgba(239, 229, 208, 0.68);
            font-size: 14px;
            line-height: 1.55;
          }

          .v120-card-action {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 18px;
            padding-top: 14px;
            border-top: 1px solid rgba(200, 164, 93, 0.18);
            color: rgba(239, 229, 208, 0.86);
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }
        }
      `}</style>
    </>
  );
}
"use client";

import Link from "next/link";

const facts = [
  ["Раса", "Майя"],
  ["Роль", "Владыка Мордора"],
  ["Эпоха", "II—III век"],
  ["Класс", "Black Label"],
];

const notes = [
  "Служил Аулэ и постиг язык формы, порядка и совершенной структуры.",
  "После падения Моргота вернулся тайно и начал собирать власть в Средиземье.",
  "Во Вторую эпоху участвовал в создании Колец Власти и выковал Единое Кольцо.",
];

export default function V97SauronLuxuryCompact() {
  return (
    <main className="v97" translate="no">
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          background: #020201 !important;
        }

        body {
          margin: 0 !important;
          background: #020201 !important;
          overflow-x: hidden !important;
        }

        .v97, .v97 * {
          box-sizing: border-box;
        }

        .v97 {
          --bg: #030302;
          --panel: rgba(8, 7, 5, .82);
          --panel2: rgba(11, 9, 7, .74);
          --gold: #d2ad63;
          --gold2: #f0d899;
          --ivory: #f2ebdc;
          --muted: rgba(242, 235, 220, .70);
          --line: rgba(210, 173, 99, .19);
          --line2: rgba(210, 173, 99, .34);

          min-height: 100vh;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(390px, 36vw) minmax(0, 1fr);
          color: var(--ivory);
          background:
            radial-gradient(circle at 72% 20%, rgba(170, 98, 28, .12), transparent 30rem),
            linear-gradient(180deg, #050403 0%, #020201 64%, #050403 100%);
          font-family: Inter, Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        .v97-visual {
          position: sticky;
          top: 0;
          height: 100vh;
          min-height: 720px;
          border-right: 1px solid var(--line);
          overflow: hidden;
          background: #020201;
        }

        .v97-visual img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: contrast(1.04) saturate(.94);
        }

        .v97-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(2,2,1,.02), transparent 48%, rgba(2,2,1,.54)),
            linear-gradient(180deg, rgba(2,2,1,.08), transparent 45%, rgba(2,2,1,.54));
        }

        .v97-back {
          position: absolute;
          z-index: 4;
          top: 28px;
          left: 28px;
          padding: 12px 16px;
          border: 1px solid var(--line2);
          background: rgba(4, 3, 2, .62);
          backdrop-filter: blur(12px);
          color: var(--gold);
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 10px;
        }

        .v97-vertical {
          position: absolute;
          z-index: 4;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          display: grid;
          gap: 16px;
        }

        .v97-vertical span {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(210,173,99,.20);
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: rgba(240,216,153,.70);
          font-size: 10px;
          background: rgba(4,3,2,.38);
        }

        .v97-caption {
          position: absolute;
          z-index: 4;
          left: 28px;
          right: 28px;
          bottom: 28px;
          min-height: 66px;
          padding: 16px 18px;
          border: 1px solid var(--line2);
          background: rgba(4, 3, 2, .66);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 10px;
          color: var(--gold);
        }

        .v97-caption strong {
          color: var(--ivory);
          font-weight: 500;
        }

        .v97-content {
          min-width: 0;
          padding: 0 clamp(28px, 4vw, 72px) 42px;
        }

        .v97-top {
          height: 72px;
          display: grid;
          grid-template-columns: minmax(230px, .85fr) minmax(0, 1fr) auto;
          align-items: center;
          gap: 26px;
          border-bottom: 1px solid var(--line);
        }

        .v97-brand {
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          line-height: 1.05;
        }

        .v97-brand span {
          display: block;
          color: var(--gold2);
          font-size: 14px;
        }

        .v97-brand small {
          display: block;
          margin-top: 4px;
          color: rgba(242,235,220,.46);
          font-size: 9px;
          letter-spacing: .13em;
        }

        .v97-nav {
          display: flex;
          justify-content: center;
          gap: clamp(18px, 2.2vw, 38px);
          flex-wrap: wrap;
        }

        .v97-nav a,
        .v97-badge,
        .v97-actions a,
        .v97-card a {
          color: var(--gold);
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          font-size: 10px;
        }

        .v97-badge {
          justify-self: end;
          padding: 12px 18px;
          border: 1px solid var(--line2);
          border-radius: 999px;
          background: rgba(255,255,255,.012);
        }

        .v97-hero {
          position: relative;
          padding-top: clamp(38px, 4.4vw, 70px);
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(300px, .62fr);
          gap: clamp(30px, 4vw, 70px);
          align-items: start;
        }

        .v97-hero::before {
          content: "";
          position: absolute;
          inset: 16px 0 auto 22%;
          height: 360px;
          background:
            radial-gradient(circle, rgba(210,173,99,.065), transparent 68%);
          pointer-events: none;
        }

        .v97-kicker {
          margin: 0 0 18px;
          color: var(--gold);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .34em;
          font-size: 11px;
        }

        .v97-title h1 {
          margin: 0;
          color: var(--ivory);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(76px, 7vw, 132px);
          line-height: .82;
          font-weight: 500;
          letter-spacing: .06em;
          text-shadow: 0 24px 74px rgba(0,0,0,.68);
        }

        .v97-title h2 {
          margin: 22px 0 0;
          color: var(--gold2);
          font-family: Georgia, serif;
          font-size: clamp(26px, 2.2vw, 42px);
          font-style: italic;
          line-height: 1;
          font-weight: 500;
        }

        .v97-title p:last-child {
          margin: 18px 0 0;
          max-width: 58ch;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.72;
        }

        .v97-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .v97-fact {
          min-height: 104px;
          padding: 18px 20px;
          border: 1px solid var(--line);
          background:
            linear-gradient(180deg, rgba(255,255,255,.024), rgba(255,255,255,.004)),
            var(--panel);
          box-shadow: 0 22px 64px rgba(0,0,0,.20);
        }

        .v97-label,
        .v97-fact span,
        .v97-card > span {
          display: block;
          margin-bottom: 9px;
          color: var(--gold);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .25em;
          font-size: 10px;
        }

        .v97-fact strong {
          color: var(--ivory);
          font-family: Georgia, serif;
          font-size: clamp(20px, 1.45vw, 30px);
          line-height: 1.05;
          font-weight: 500;
        }

        .v97-quote {
          margin-top: 20px;
          min-height: 116px;
          padding: 24px clamp(24px, 3vw, 46px);
          border: 1px solid var(--line);
          background:
            linear-gradient(90deg, rgba(8,7,5,.95), rgba(8,7,5,.70)),
            radial-gradient(circle at 82% 52%, rgba(175,92,22,.14), transparent 18rem);
          box-shadow: 0 22px 70px rgba(0,0,0,.20);
        }

        .v97-quote blockquote {
          margin: 0;
          color: #edd6a4;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(22px, 1.65vw, 32px);
          line-height: 1.34;
        }

        .v97-quote p {
          margin: 10px 0 0;
          color: rgba(242,235,220,.55);
          font-size: 13px;
        }

        .v97-lower {
          margin-top: 16px;
          display: grid;
          grid-template-columns: minmax(260px, .95fr) minmax(260px, .9fr) minmax(300px, 1.15fr);
          gap: 14px;
        }

        .v97-card {
          min-height: 246px;
          padding: 22px 24px;
          border: 1px solid var(--line);
          background:
            linear-gradient(180deg, rgba(255,255,255,.024), rgba(255,255,255,.006)),
            var(--panel2);
          box-shadow: 0 20px 64px rgba(0,0,0,.17);
        }

        .v97-card h3 {
          margin: 0 0 16px;
          color: var(--ivory);
          font-family: Georgia, serif;
          font-size: clamp(28px, 2vw, 44px);
          line-height: .98;
          font-weight: 500;
        }

        .v97-card p,
        .v97-card li {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.68;
        }

        .v97-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .v97-card li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 10px;
        }

        .v97-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .76em;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: var(--gold);
        }

        .v97-era-row {
          min-height: 88px;
          display: grid;
          grid-template-columns: 1fr 78px 1fr;
          align-items: center;
          gap: 14px;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 30px;
        }

        .v97-orb {
          width: 78px;
          height: 78px;
          border: 1px solid var(--line2);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(240,216,153,.20), transparent 62%),
            rgba(255,255,255,.01);
          box-shadow: inset 0 0 28px rgba(0,0,0,.56);
        }

        .v97-actions {
          margin-top: 18px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .v97-actions a {
          min-height: 44px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--line2);
          border-radius: 999px;
          background: rgba(8,7,5,.62);
        }

        .v97-footer {
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 20px;
          align-items: center;
          color: var(--gold);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .24em;
          font-size: 10px;
        }

        .v97-footer i {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--line2), transparent);
        }

        @media (hover: hover) {
          .v97-nav a:hover,
          .v97-actions a:hover,
          .v97-badge:hover {
            color: var(--ivory);
          }

          .v97-fact:hover,
          .v97-card:hover {
            border-color: rgba(210,173,99,.34);
          }
        }

        @media (max-width: 1280px) {
          .v97 {
            grid-template-columns: minmax(340px, 37vw) minmax(0, 1fr);
          }

          .v97-hero {
            grid-template-columns: 1fr;
          }

          .v97-lower {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .v97 {
            display: block;
          }

          .v97-visual {
            position: relative;
            height: 70vh;
            min-height: 520px;
          }

          .v97-content {
            padding: 0 22px 56px;
          }

          .v97-top {
            height: auto;
            min-height: 76px;
            grid-template-columns: 1fr;
            padding: 20px 0;
          }

          .v97-nav {
            justify-content: flex-start;
          }

          .v97-badge {
            justify-self: start;
          }

          .v97-title h1 {
            font-size: clamp(58px, 18vw, 92px);
          }
        }

        @media (max-width: 560px) {
          .v97-facts {
            grid-template-columns: 1fr;
          }

          .v97-visual {
            height: 64vh;
          }

          .v97-caption {
            left: 18px;
            right: 18px;
          }
        }
      ` }} />

      <section className="v97-visual">
        <picture>
          <source type="image/webp" srcSet="/v97/sauron-luxury-visual.webp" />
          <img src="/v97/sauron-luxury-visual.jpg" alt="Саурон у башни Барад-дур" width="1800" height="2394" />
        </picture>

        <Link className="v97-back" href="/catalog?type=characters">← к каталогу</Link>

        <div className="v97-vertical" aria-hidden="true">
          <span>I</span>
          <span>II</span>
          <span>III</span>
          <span>IV</span>
          <span>V</span>
        </div>

        <div className="v97-caption">
          <span>Тень</span>
          <strong>Владыка Мордора</strong>
        </div>
      </section>

      <section className="v97-content">
        <header className="v97-top">
          <Link href="/" className="v97-brand">
            <span>Архив Средиземья</span>
            <small>Премиум коллекция знаний</small>
          </Link>

          <nav className="v97-nav">
            <Link href="/catalog">Каталог</Link>
            <Link href="/catalog?type=characters">Персонажи</Link>
            <Link href="/catalog?type=realms">Народы</Link>
            <Link href="/?search=open">Палантир</Link>
          </nav>

          <Link className="v97-badge" href="/?search=open">Black Label</Link>
        </header>

        <section className="v97-hero">
          <div className="v97-title">
            <p className="v97-kicker">Досье персонажа · Black Label</p>
            <h1>Саурон</h1>
            <h2>Тёмный Лорд</h2>
            <p>
              Воля к господству, скованная хитростью, страхом и стремлением к абсолютному контролю.
            </p>
          </div>

          <div className="v97-facts">
            {facts.map(([label, value]) => (
              <article className="v97-fact" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="v97-quote">
          <blockquote>
            «Я вложу в Кольцо свою волю и всю свою силу, и все народы подчинятся моей власти.»
          </blockquote>
          <p>— Саурон</p>
        </section>

        <section className="v97-lower">
          <article className="v97-card">
            <span className="v97-label">Фрагменты истории</span>
            <h3>Путь к власти</h3>
            <ul>
              <li>Служил Аулэ и постиг язык формы, порядка и совершенной структуры.</li>
              <li>После падения Моргота вернулся тайно и начал собирать власть.</li>
              <li>Во Вторую эпоху участвовал в создании Колец Власти.</li>
            </ul>
          </article>

          <article className="v97-card">
            <span className="v97-label">Эпоха и влияние</span>
            <h3>От колец к войне</h3>
            <div className="v97-era-row">
              <span>II</span>
              <i className="v97-orb" />
              <span>III</span>
            </div>
            <p>Во Вторую эпоху — создание Колец. В Третью — возвращение Тени и открытая война.</p>
          </article>

          <article className="v97-card">
            <span className="v97-label">Архивные заметки</span>
            <h3>Порядок, страх и воля</h3>
            <p>
              Его мощь не только в войсках, но и в способности превращать обещание порядка
              в форму подчинения.
            </p>
          </article>
        </section>

        <div className="v97-actions">
          <Link href="/catalog?type=characters">Открыть каталог</Link>
          <Link href="/?search=open">Открыть Палантир</Link>
        </div>

        <footer className="v97-footer">
          <i />
          <span>Знание — единственное оружие против тьмы</span>
          <i />
        </footer>
      </section>
    </main>
  );
}

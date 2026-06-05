"use client";

import Link from "next/link";

const facts = [
  ["Раса", "Майя"],
  ["Роль", "Владыка Мордора"],
  ["Эпоха", "Второй век — Третий век"],
  ["Архивный класс", "Теневая запись"],
];

const history = [
  "Служил Аулэ и познал искусство формы, порядка и совершенной структуры.",
  "После падения Моргота вернулся тайно и начал восстанавливать власть в Средиземье.",
  "Во Вторую эпоху участвовал в создании Колец Власти и выковал Единое Кольцо.",
  "В Третью эпоху вновь собрал силу, крепость Мордора и страх перед своей тенью.",
];

export default function V96SauronHardFixedPage() {
  return (
    <main className="v96">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          background: #020201 !important;
          margin: 0 !important;
          overflow-x: hidden !important;
        }

        .v96, .v96 * {
          box-sizing: border-box;
        }

        .v96 {
          --gold: #d6b36a;
          --gold2: #f0d795;
          --ivory: #f3ecdd;
          --muted: rgba(243,236,221,.73);
          --line: rgba(214,179,106,.22);
          --panel: rgba(9,8,6,.88);

          min-height: 100vh;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(460px, 42vw) minmax(0, 1fr);
          background:
            radial-gradient(circle at 72% 12%, rgba(144, 82, 24, .13), transparent 34rem),
            linear-gradient(180deg, #050403 0%, #020201 58%, #050403 100%);
          color: var(--ivory);
          font-family: Inter, Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        .v96-left {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          border-right: 1px solid var(--line);
          background: #020201;
        }

        .v96-left img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
          filter: contrast(1.04) saturate(.94);
        }

        .v96-left:after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(2,2,1,.02), transparent 54%, rgba(2,2,1,.58)),
            linear-gradient(180deg, transparent 70%, rgba(2,2,1,.55));
          pointer-events: none;
        }

        .v96-back {
          position: absolute;
          left: 34px;
          top: 34px;
          z-index: 5;
          padding: 13px 18px;
          border: 1px solid rgba(214,179,106,.32);
          background: rgba(4,3,2,.72);
          color: var(--gold);
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .20em;
          font-size: 12px;
          backdrop-filter: blur(12px);
        }

        .v96-caption {
          position: absolute;
          z-index: 5;
          left: 34px;
          right: 34px;
          bottom: 34px;
          min-height: 72px;
          padding: 18px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          border: 1px solid rgba(214,179,106,.30);
          background: rgba(4,3,2,.72);
          backdrop-filter: blur(14px);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          color: var(--gold);
          font-size: 11px;
        }

        .v96-caption strong {
          color: var(--ivory);
          font-weight: 500;
        }

        .v96-right {
          min-width: 0;
          min-height: 100vh;
          padding: 28px clamp(32px, 5vw, 88px) 56px;
        }

        .v96-header {
          min-height: 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          border-bottom: 1px solid var(--line);
        }

        .v96-logo {
          color: var(--ivory);
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .22em;
          line-height: 1.05;
        }

        .v96-logo span {
          display: block;
          color: var(--gold2);
          font-size: 16px;
        }

        .v96-logo small {
          display: block;
          margin-top: 5px;
          color: rgba(243,236,221,.52);
          font-size: 10px;
          letter-spacing: .14em;
        }

        .v96-nav {
          display: flex;
          gap: clamp(18px, 2vw, 34px);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .v96-nav a, .v96-actions a {
          color: var(--gold);
          text-decoration: none;
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .20em;
          font-size: 11px;
        }

        .v96-title {
          padding-top: clamp(48px, 5vw, 86px);
          max-width: 980px;
        }

        .v96-kicker {
          margin: 0 0 20px;
          color: var(--gold);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .34em;
          font-size: 12px;
        }

        .v96-title h1 {
          margin: 0;
          color: var(--ivory);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(92px, 8.2vw, 162px);
          line-height: .78;
          font-weight: 500;
          letter-spacing: .07em;
          text-shadow: 0 26px 80px rgba(0,0,0,.70);
        }

        .v96-title h2 {
          margin: 30px 0 0;
          color: var(--gold2);
          font-family: Georgia, serif;
          font-size: clamp(30px, 2.7vw, 50px);
          font-style: italic;
          font-weight: 500;
        }

        .v96-title p:last-child {
          margin: 20px 0 0;
          max-width: 60ch;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .v96-facts {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .v96-fact {
          min-height: 126px;
          padding: 24px;
          border: 1px solid var(--line);
          background: var(--panel);
          box-shadow: 0 24px 80px rgba(0,0,0,.22);
        }

        .v96-fact span, .v96-card-label {
          display: block;
          color: var(--gold);
          font-family: Georgia, serif;
          text-transform: uppercase;
          letter-spacing: .25em;
          font-size: 11px;
          margin-bottom: 10px;
        }

        .v96-fact strong {
          display: block;
          color: var(--ivory);
          font-family: Georgia, serif;
          font-size: clamp(24px, 1.8vw, 34px);
          line-height: 1.04;
          font-weight: 500;
        }

        .v96-quote {
          margin: 20px 0 0;
          padding: 30px clamp(30px, 4vw, 58px);
          border: 1px solid var(--line);
          background:
            linear-gradient(90deg, rgba(9,8,6,.98), rgba(9,8,6,.76)),
            radial-gradient(circle at 82% 50%, rgba(168,91,28,.16), transparent 20rem);
          box-shadow: 0 24px 80px rgba(0,0,0,.22);
        }

        .v96-quote blockquote {
          margin: 0;
          color: #efd8a5;
          font-family: Georgia, serif;
          font-size: clamp(26px, 2vw, 40px);
          line-height: 1.28;
          font-style: italic;
        }

        .v96-quote span {
          display: block;
          margin-top: 14px;
          color: rgba(243,236,221,.58);
          font-size: 14px;
        }

        .v96-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1.25fr;
          gap: 16px;
        }

        .v96-card {
          min-height: 318px;
          padding: clamp(24px, 2.3vw, 40px);
          border: 1px solid var(--line);
          background:
            linear-gradient(180deg, rgba(255,255,255,.026), rgba(255,255,255,.006)),
            rgba(12,10,7,.78);
          box-shadow: 0 24px 80px rgba(0,0,0,.20);
        }

        .v96-card h3 {
          margin: 0 0 18px;
          color: var(--ivory);
          font-family: Georgia, serif;
          font-size: clamp(34px, 2.6vw, 56px);
          line-height: .94;
          font-weight: 500;
        }

        .v96-card p, .v96-card li {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.72;
        }

        .v96-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .v96-card li {
          position: relative;
          padding-left: 18px;
          margin-bottom: 12px;
        }

        .v96-card li:before {
          content: "";
          position: absolute;
          left: 0;
          top: .72em;
          width: 5px;
          height: 5px;
          border-radius: 99px;
          background: var(--gold);
        }

        .v96-era-row {
          display: grid;
          grid-template-columns: 1fr 86px 1fr;
          align-items: center;
          gap: 18px;
          min-height: 110px;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 36px;
        }

        .v96-orb {
          width: 86px;
          height: 86px;
          border-radius: 99px;
          border: 1px solid rgba(214,179,106,.35);
          background: radial-gradient(circle, rgba(239,216,165,.22), transparent 62%);
        }

        .v96-note em {
          display: block;
          margin-top: 22px;
          color: var(--gold2);
          font-family: Georgia, serif;
          font-size: 19px;
        }

        .v96-actions {
          margin-top: 24px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .v96-actions a {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          padding: 0 22px;
          border: 1px solid rgba(214,179,106,.28);
          border-radius: 999px;
          background: rgba(8,7,5,.72);
        }

        @media (max-width: 1320px) {
          .v96 {
            grid-template-columns: minmax(380px, 40vw) minmax(0, 1fr);
          }

          .v96-facts {
            grid-template-columns: 1fr 1fr;
          }

          .v96-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .v96 {
            display: block;
          }

          .v96-left {
            position: relative;
            height: 70vh;
          }

          .v96-right {
            padding: 24px 22px 60px;
          }

          .v96-header {
            display: grid;
            justify-content: start;
            padding-bottom: 20px;
          }

          .v96-nav {
            justify-content: flex-start;
          }

          .v96-title h1 {
            font-size: clamp(62px, 20vw, 98px);
          }
        }

        @media (max-width: 560px) {
          .v96-left {
            height: 64vh;
          }

          .v96-facts {
            grid-template-columns: 1fr;
          }
        }
      ` }} />

      <section className="v96-left">
        <picture>
          <source type="image/webp" srcSet="/v96/sauron-visual.webp" />
          <img src="/v96/sauron-visual.jpg" alt="Саурон в чёрной броне на фоне башни и Ока" width="1600" height="2128" />
        </picture>
        <Link className="v96-back" href="/catalog?type=characters">← К каталогу персонажей</Link>
        <div className="v96-caption">
          <span>Тень</span>
          <strong>Владыка Мордора</strong>
        </div>
      </section>

      <section className="v96-right">
        <header className="v96-header">
          <Link href="/" className="v96-logo">
            <span>Архив Средиземья</span>
            <small>Премиум коллекция знаний</small>
          </Link>

          <nav className="v96-nav">
            <Link href="/catalog">Каталог</Link>
            <Link href="/catalog?type=characters">Персонажи</Link>
            <Link href="/catalog?type=realms">Народы</Link>
            <Link href="/?search=open">Палантир</Link>
          </nav>
        </header>

        <section className="v96-title">
          <p className="v96-kicker">Досье персонажа · Black Label</p>
          <h1>Саурон</h1>
          <h2>Тёмный Лорд</h2>
          <p>Воля к господству, скованная хитростью, страхом и стремлением к абсолютному контролю.</p>
        </section>

        <section className="v96-facts">
          {facts.map(([label, value]) => (
            <article className="v96-fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </section>

        <section className="v96-quote">
          <blockquote>«Я вложу в Кольцо свою волю и всю свою силу, и все народы подчинятся моей власти.»</blockquote>
          <span>— Саурон</span>
        </section>

        <section className="v96-grid">
          <article className="v96-card">
            <span className="v96-card-label">Фрагменты истории</span>
            <h3>Путь к власти</h3>
            <ul>
              {history.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="v96-card">
            <span className="v96-card-label">Эпоха и влияние</span>
            <h3>От колец к войне</h3>
            <div className="v96-era-row">
              <span>II</span>
              <i className="v96-orb" />
              <span>III</span>
            </div>
            <p>Во Вторую эпоху — создание Колец. В Третью — возвращение Тени и открытая война.</p>
          </article>

          <article className="v96-card v96-note">
            <span className="v96-card-label">Архивные заметки</span>
            <h3>Порядок, страх и воля</h3>
            <p>Саурон — одна из величайших угроз, с которыми когда-либо сталкивался свободный народ. Его мощь не только в войсках, но и в способности превращать обещание порядка в форму подчинения.</p>
            <em>— Лоремастер Архива</em>
          </article>
        </section>

        <div className="v96-actions">
          <Link href="/catalog?type=characters">Открыть каталог</Link>
          <Link href="/?search=open">Открыть Палантир</Link>
        </div>
      </section>
    </main>
  );
}

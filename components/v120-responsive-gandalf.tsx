"use client";

import Link from "next/link";
import V112GandalfResponsive from "./v112-gandalf-responsive";

export default function V120ResponsiveGandalf() {
  return (
    <>
      <div className="v120-gandalf-desktop">
        <V112GandalfResponsive />
      </div>

      <main className="v120-gandalf-mobile">
        <section className="v120-gandalf-hero">
          <Link href="/catalog" className="v120-back-link">
            ← Back to catalog
          </Link>

          <p className="v120-kicker">Celestial Dossier</p>

          <h1>Гэндальф</h1>

          <p className="v120-subtitle">Серый странник · Istar · Хранитель света</p>

          <div className="v120-gandalf-orb" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="v120-facts">
          <article>
            <span>Раса</span>
            <strong>Майар</strong>
          </article>

          <article>
            <span>Роль</span>
            <strong>Истари</strong>
          </article>

          <article>
            <span>Эпоха</span>
            <strong>Третья</strong>
          </article>
        </section>

        <section className="v120-quote-card">
          <p>
            «Даже самый малый может изменить ход будущего, если в его сердце
            достаточно света и мужества».
          </p>
        </section>

        <section className="v120-story-card">
          <p className="v120-section-label">Fragment History</p>

          <h2>Хранитель надежды</h2>

          <p>
            Гэндальф — один из Истари, посланных в Средиземье противостоять
            тени Саурона. Он не правил силой, а направлял свободные народы,
            пробуждая в них мужество, верность и способность сопротивляться
            отчаянию.
          </p>

          <p>
            Его путь связывает Шир, Ривенделл, Рохан, Гондор и судьбу Кольца.
            Он становится не просто магом, а живым символом света, который
            возвращается даже после падения.
          </p>
        </section>

        <section className="v120-events">
          <p className="v120-section-label">Key Events</p>

          <div>
            <span>01</span>
            <p>Прибытие в Средиземье как один из пяти Истари.</p>
          </div>

          <div>
            <span>02</span>
            <p>Раскрытие природы Единого Кольца и путь к Совету Элронда.</p>
          </div>

          <div>
            <span>03</span>
            <p>Падение в Мории и возвращение как Гэндальф Белый.</p>
          </div>

          <div>
            <span>04</span>
            <p>Защита Минас Тирита и последний удар по власти Саурона.</p>
          </div>
        </section>

        <section className="v120-related">
          <p className="v120-section-label">Related Dossiers</p>

          <div>
            <Link href="/characters/frodo">Фродо Бэггинс →</Link>
            <Link href="/characters/aragorn">Арагорн →</Link>
            <Link href="/characters/galadriel">Галадриэль →</Link>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .v120-gandalf-mobile {
          display: none;
        }

        @media (max-width: 760px) {
          html,
          body {
            overflow-x: hidden !important;
            background: #f6f1e7 !important;
          }

          .v120-gandalf-desktop {
            display: none !important;
          }

          .v120-gandalf-mobile {
            display: block;
            min-height: 100svh;
            padding: 18px 16px 56px;
            color: #231b12;
            background:
              radial-gradient(circle at 50% 0%, rgba(201, 164, 92, 0.28), transparent 34%),
              linear-gradient(180deg, #fbf6eb 0%, #f0e4cc 48%, #eadcc0 100%);
          }

          .v120-gandalf-hero h1 {
  position: relative;
  z-index: 1;
  max-width: 100%;
  margin: 0 auto;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(31px, 9vw, 38px);
  line-height: 1.04;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  word-break: break-word;
}

          .v120-back-link {
            position: absolute;
            top: 16px;
            left: 16px;
            z-index: 2;
            color: rgba(72, 48, 23, 0.72);
            font-size: 11px;
            letter-spacing: 0.14em;
            text-decoration: none;
            text-transform: uppercase;
          }

          .v120-kicker,
          .v120-section-label {
            margin: 0 0 12px;
            color: rgba(151, 105, 42, 0.78);
            font-size: 10px;
            letter-spacing: 0.24em;
            text-transform: uppercase;
          }

          .v120-gandalf-hero h1 {
            position: relative;
            z-index: 1;
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(46px, 15vw, 64px);
            line-height: 0.92;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-subtitle {
            position: relative;
            z-index: 1;
            max-width: 28ch;
            margin: 16px auto 0;
            color: rgba(35, 27, 18, 0.68);
            font-size: 13px;
            line-height: 1.55;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-gandalf-orb {
            width: 164px;
            height: 164px;
            display: grid;
            place-items: center;
            margin: 34px auto 0;
            border: 1px solid rgba(151, 105, 42, 0.22);
            border-radius: 999px;
            background:
              radial-gradient(circle at 42% 30%, rgba(255, 255, 255, 0.9), transparent 18%),
              radial-gradient(circle at 54% 50%, rgba(201, 164, 92, 0.38), transparent 44%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.52), transparent 62%);
            box-shadow:
              inset 0 0 46px rgba(255, 255, 255, 0.72),
              0 0 72px rgba(201, 164, 92, 0.22);
          }

          .v120-gandalf-orb span {
            width: 50px;
            height: 50px;
            border-radius: 999px;
            background: rgba(201, 164, 92, 0.34);
            filter: blur(12px);
          }

          .v120-facts {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 18px;
          }

          .v120-facts article,
          .v120-quote-card,
          .v120-story-card,
          .v120-events,
          .v120-related {
            border: 1px solid rgba(151, 105, 42, 0.24);
            border-radius: 24px;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.22)),
              rgba(255, 255, 255, 0.18);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.62),
              0 18px 60px rgba(88, 62, 25, 0.14);
          }

          .v120-facts article {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 16px;
          }

          .v120-facts span {
            color: rgba(151, 105, 42, 0.78);
            font-size: 10px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
          }

          .v120-facts strong {
            font-size: 12px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .v120-quote-card {
            margin-top: 14px;
            padding: 24px;
            text-align: center;
          }

          .v120-quote-card p {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            color: rgba(35, 27, 18, 0.82);
            font-size: 20px;
            line-height: 1.45;
          }

          .v120-story-card,
          .v120-events,
          .v120-related {
            margin-top: 14px;
            padding: 22px;
          }

          .v120-story-card h2 {
            margin: 0 0 14px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 32px;
            line-height: 1;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-story-card p:not(.v120-section-label) {
            margin: 0;
            color: rgba(35, 27, 18, 0.72);
            font-size: 14px;
            line-height: 1.65;
          }

          .v120-story-card p + p {
            margin-top: 14px !important;
          }

          .v120-events div {
            display: grid;
            grid-template-columns: 42px 1fr;
            gap: 12px;
            padding: 14px 0;
            border-top: 1px solid rgba(151, 105, 42, 0.18);
          }

          .v120-events div:first-of-type {
            border-top: 0;
          }

          .v120-events span {
            color: rgba(151, 105, 42, 0.82);
            font-size: 11px;
            letter-spacing: 0.18em;
          }

          .v120-events p {
            margin: 0;
            color: rgba(35, 27, 18, 0.74);
            font-size: 14px;
            line-height: 1.55;
          }

          .v120-related div {
            display: grid;
            gap: 10px;
          }

          .v120-related a {
            min-height: 46px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            border: 1px solid rgba(151, 105, 42, 0.2);
            border-radius: 999px;
            color: #231b12;
            text-decoration: none;
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }
        }
      `}</style>
    </>
  );
}
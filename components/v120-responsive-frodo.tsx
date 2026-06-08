"use client";

import Link from "next/link";
import V115FrodoResponsive8K from "./v115-frodo-responsive-8k";

export default function V120ResponsiveFrodo() {
  return (
    <>
      <div className="v120-frodo-desktop">
        <V115FrodoResponsive8K />
      </div>

      <main className="v120-frodo-mobile">
        <section className="v120-frodo-hero">
          <Link href="/catalog" className="v120-frodo-back">
            ← Back to catalog
          </Link>

          <p className="v120-frodo-kicker">Ring Bearer Dossier</p>

          <h1>Фродо Бэггинс</h1>

          <p className="v120-frodo-subtitle">
            Хоббит Шира · Хранитель Кольца · Носитель надежды
          </p>

          <div className="v120-ring-orb" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="v120-frodo-facts">
          <article>
            <span>Раса</span>
            <strong>Хоббит</strong>
          </article>

          <article>
            <span>Роль</span>
            <strong>Хранитель</strong>
          </article>

          <article>
            <span>Эпоха</span>
            <strong>Третья</strong>
          </article>
        </section>

        <section className="v120-frodo-quote">
          <p>
            «Даже самый малый может изменить ход будущего, если несёт свет
            дальше, чем способен сам поверить».
          </p>
        </section>

        <section className="v120-frodo-story">
          <p className="v120-frodo-label">Fragment History</p>

          <h2>Путь через тьму</h2>

          <p>
            Фродо Бэггинс — хоббит из Шира, которому было доверено Единственное
            Кольцо. Его сила была не в оружии и не во власти, а в способности
            идти дальше, когда надежда почти исчезла.
          </p>

          <p>
            Его путь от Бэг-Энда до Ородруина стал одной из главных линий
            истории Третьей эпохи. Через страх, искушение и боль он донёс
            бремя, которое не смогли бы выдержать многие великие.
          </p>
        </section>

        <section className="v120-frodo-events">
          <p className="v120-frodo-label">Key Events</p>

          <div>
            <span>01</span>
            <p>Получение Единого Кольца от Бильбо Бэггинса.</p>
          </div>

          <div>
            <span>02</span>
            <p>Путь из Шира в Ривенделл и ранение на Заверти.</p>
          </div>

          <div>
            <span>03</span>
            <p>Решение нести Кольцо к Роковой горе.</p>
          </div>

          <div>
            <span>04</span>
            <p>Последний путь через Мордор вместе с Сэмом.</p>
          </div>
        </section>

        <section className="v120-frodo-related">
          <p className="v120-frodo-label">Related Dossiers</p>

          <div>
            <Link href="/characters/gandalf">Гэндальф →</Link>
            <Link href="/characters/aragorn">Арагорн →</Link>
            <Link href="/characters/legolas">Леголас →</Link>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .v120-frodo-mobile {
          display: none;
        }

        @media (max-width: 760px) {
          html,
          body {
            overflow-x: hidden !important;
            background: #050705 !important;
          }

          .v120-frodo-desktop {
            display: none !important;
          }

          .v120-frodo-mobile {
            display: block;
            min-height: 100svh;
            padding: 18px 16px 56px;
            color: #efe5d0;
            background:
              radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.18), transparent 34%),
              radial-gradient(circle at 20% 22%, rgba(56, 92, 45, 0.42), transparent 34%),
              radial-gradient(circle at 100% 70%, rgba(177, 74, 38, 0.16), transparent 32%),
              linear-gradient(180deg, #050705 0%, #0b120b 48%, #030302 100%);
          }

          .v120-frodo-hero {
            position: relative;
            min-height: 520px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            padding: 24px 16px 34px;
            border: 1px solid rgba(200, 164, 93, 0.24);
            border-radius: 32px;
            background:
              radial-gradient(circle at 50% 34%, rgba(200, 164, 93, 0.2), transparent 34%),
              radial-gradient(circle at 40% 20%, rgba(97, 137, 78, 0.22), transparent 40%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
              #071007;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 28px 90px rgba(0, 0, 0, 0.5);
            text-align: center;
          }

          .v120-frodo-back {
            position: absolute;
            top: 16px;
            left: 16px;
            z-index: 2;
            color: rgba(239, 229, 208, 0.72);
            font-size: 11px;
            letter-spacing: 0.14em;
            text-decoration: none;
            text-transform: uppercase;
          }

          .v120-frodo-kicker,
          .v120-frodo-label {
            margin: 0 0 12px;
            color: rgba(200, 164, 93, 0.86);
            font-size: 10px;
            letter-spacing: 0.24em;
            text-transform: uppercase;
          }

          .v120-frodo-hero h1 {
            position: relative;
            z-index: 1;
            max-width: 100%;
            margin: 0 auto;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 10vw, 44px);
            line-height: 1.02;
            letter-spacing: 0.035em;
            text-transform: uppercase;
            overflow-wrap: anywhere;
            text-wrap: balance;
          }

          .v120-frodo-subtitle {
            position: relative;
            z-index: 1;
            max-width: 28ch;
            margin: 16px auto 0;
            color: rgba(239, 229, 208, 0.68);
            font-size: 12px;
            line-height: 1.6;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-ring-orb {
            width: 164px;
            height: 164px;
            display: grid;
            place-items: center;
            margin: 34px auto 0;
            border: 1px solid rgba(200, 164, 93, 0.26);
            border-radius: 999px;
            background:
              radial-gradient(circle at 42% 30%, rgba(255, 255, 255, 0.18), transparent 18%),
              radial-gradient(circle at 54% 50%, rgba(200, 164, 93, 0.42), transparent 42%),
              radial-gradient(circle at 50% 50%, rgba(97, 137, 78, 0.2), transparent 60%),
              #080704;
            box-shadow:
              inset 0 0 44px rgba(255, 255, 255, 0.08),
              0 0 78px rgba(200, 164, 93, 0.18);
          }

          .v120-ring-orb span {
            width: 54px;
            height: 54px;
            border-radius: 999px;
            background: rgba(200, 164, 93, 0.34);
            filter: blur(12px);
          }

          .v120-frodo-facts {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 18px;
          }

          .v120-frodo-facts article,
          .v120-frodo-quote,
          .v120-frodo-story,
          .v120-frodo-events,
          .v120-frodo-related {
            border: 1px solid rgba(200, 164, 93, 0.22);
            border-radius: 24px;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
              rgba(255, 255, 255, 0.035);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.08),
              0 18px 60px rgba(0, 0, 0, 0.34);
          }

          .v120-frodo-facts article {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 16px;
          }

          .v120-frodo-facts span {
            color: rgba(200, 164, 93, 0.82);
            font-size: 10px;
            letter-spacing: 0.22em;
            text-transform: uppercase;
          }

          .v120-frodo-facts strong {
            color: rgba(239, 229, 208, 0.92);
            font-size: 12px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .v120-frodo-quote {
            margin-top: 14px;
            padding: 24px;
            text-align: center;
          }

          .v120-frodo-quote p {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            color: rgba(239, 229, 208, 0.86);
            font-size: 19px;
            line-height: 1.48;
          }

          .v120-frodo-story,
          .v120-frodo-events,
          .v120-frodo-related {
            margin-top: 14px;
            padding: 22px;
          }

          .v120-frodo-story h2 {
            margin: 0 0 14px;
            font-family: Georgia, "Times New Roman", serif;
            color: #efe5d0;
            font-size: 32px;
            line-height: 1;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-frodo-story p:not(.v120-frodo-label) {
            margin: 0;
            color: rgba(239, 229, 208, 0.7);
            font-size: 14px;
            line-height: 1.65;
          }

          .v120-frodo-story p + p {
            margin-top: 14px !important;
          }

          .v120-frodo-events div {
            display: grid;
            grid-template-columns: 42px 1fr;
            gap: 12px;
            padding: 14px 0;
            border-top: 1px solid rgba(200, 164, 93, 0.16);
          }

          .v120-frodo-events div:first-of-type {
            border-top: 0;
          }

          .v120-frodo-events span {
            color: rgba(200, 164, 93, 0.84);
            font-size: 11px;
            letter-spacing: 0.18em;
          }

          .v120-frodo-events p {
            margin: 0;
            color: rgba(239, 229, 208, 0.72);
            font-size: 14px;
            line-height: 1.55;
          }

          .v120-frodo-related div {
            display: grid;
            gap: 10px;
          }

          .v120-frodo-related a {
            min-height: 46px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            border: 1px solid rgba(200, 164, 93, 0.2);
            border-radius: 999px;
            color: #efe5d0;
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
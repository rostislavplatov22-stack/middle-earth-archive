"use client";

import Link from "next/link";
import PremiumPageShell from "./ui/PremiumPageShell";
import V832PremiumStaticHome from "./v83-2-premium-static-home";

const archiveItems = [
  {
    title: "Characters",
    value: "1,284+",
    href: "/catalog",
    text: "Герои, короли, маги и силы Тьмы.",
  },
  {
    title: "Realms",
    value: "47+",
    href: "/realms/gondor",
    text: "Королевства, земли и древние владения.",
  },
  {
    title: "Artifacts",
    value: "3,217+",
    href: "/artifacts/one-ring",
    text: "Кольца, клинки, реликвии и артефакты власти.",
  },
  {
    title: "Ages",
    value: "6",
    href: "/ages/third-age",
    text: "Эпохи, хроники и ключевые события.",
  },
];

export default function V120ResponsiveHome() {
  return (
    <>
      <div className="v120-desktop-home">
  <PremiumPageShell variant="obsidian" className="v121-home-page">
    <V832PremiumStaticHome />
  </PremiumPageShell>
</div>


      <main className="v120-mobile-home">
        <section className="v120-home-hero">
          <p className="v120-home-kicker">Middle-earth Archive</p>

          <h1>
            Средиземье как премиальный цифровой архив.
          </h1>

          <p className="v120-home-copy">
            Исследуй героев, королевства, реликвии и эпохи через cinematic archive,
            созданный как музей легендарного мира.
          </p>

          <div className="v120-home-actions">
            <Link href="/catalog">Открыть архив</Link>
            <Link href="/characters/gandalf">Найти героя</Link>
          </div>
        </section>

        <section className="v120-palantir-panel" aria-label="Palantir search preview">
          <div className="v120-palantir-orb" aria-hidden="true">
            <span />
          </div>

          <div className="v120-palantir-copy">
            <p>Palantír Access</p>
            <h2>Спроси Палантир.</h2>
            <span>
              Быстрый вход в досье персонажей, артефакты и забытые хроники.
            </span>
          </div>

          <Link href="/catalog" className="v120-palantir-link">
            Search visions →
          </Link>
        </section>

        <section className="v120-mobile-collections">
          <div className="v120-section-head">
            <p>Archive Index</p>
            <h2>Коллекции архива</h2>
          </div>

          <div className="v120-home-grid">
            {archiveItems.map((item) => (
              <Link href={item.href} className="v120-home-card" key={item.title}>
                <div>
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>

                <p>{item.text}</p>

                <small>Explore →</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="v120-featured-realm">
          <p>Featured Realm</p>
          <h2>Gondor</h2>
          <span>The Realm of Men</span>
          <Link href="/realms/gondor">Explore Gondor →</Link>
        </section>
      </main>

      <style jsx global>{`
        .v120-mobile-home {
          display: none;
        }
.v121-desktop-home-shell {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.12), transparent 34%),
    radial-gradient(circle at 82% 28%, rgba(177, 74, 38, 0.12), transparent 34%),
    linear-gradient(180deg, #030302 0%, #080705 52%, #020202 100%);
}

.v121-desktop-atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 16% 18%, rgba(239, 229, 208, 0.08), transparent 18%),
    radial-gradient(circle at 86% 16%, rgba(177, 74, 38, 0.12), transparent 20%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.48), transparent 34%, rgba(0, 0, 0, 0.56));
  opacity: 0.85;
}

.v121-desktop-atmosphere::before {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px);
  background-size: 46px 46px;
  opacity: 0.08;
  transform: rotate(-8deg);
}

.v121-desktop-home-frame {
  position: relative;
  z-index: 1;
  min-height: 100svh;
  animation: v121DesktopReveal 1.1s cubic-bezier(.16, 1, .3, 1) both;
}

@keyframes v121DesktopReveal {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
    filter: blur(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .v121-desktop-home-frame {
    animation: none !important;
  }
}
        @media (max-width: 760px) {
          html,
          body {
            overflow-x: hidden !important;
            background: #030302 !important;
          }

          .v120-desktop-home {
            display: none !important;
          }

          .v120-mobile-home {
            display: block;
            min-height: 100svh;
            padding: 26px 16px 58px;
            color: #efe5d0;
            background:
              radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.2), transparent 34%),
              radial-gradient(circle at 100% 28%, rgba(177, 74, 38, 0.18), transparent 34%),
              radial-gradient(circle at 0% 72%, rgba(21, 37, 27, 0.56), transparent 36%),
              linear-gradient(180deg, #050505 0%, #100d09 46%, #030302 100%);
          }

          .v120-home-hero {
            position: relative;
            min-height: 520px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 42px 0 34px;
            text-align: center;
          }

          .v120-home-hero::before {
            content: "";
            position: absolute;
            inset: 40px 12px auto;
            height: 260px;
            border: 1px solid rgba(200, 164, 93, 0.14);
            border-radius: 999px;
            background:
              radial-gradient(circle, rgba(200, 164, 93, 0.12), transparent 62%);
            filter: blur(0.2px);
            opacity: 0.9;
            pointer-events: none;
          }

          .v120-home-kicker {
            position: relative;
            margin: 0 0 16px;
            color: rgba(200, 164, 93, 0.88);
            font-size: 11px;
            line-height: 1;
            letter-spacing: 0.28em;
            text-transform: uppercase;
          }

          .v120-home-hero h1 {
            position: relative;
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(40px, 13vw, 58px);
            line-height: 0.92;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            text-wrap: balance;
          }

          .v120-home-copy {
            position: relative;
            max-width: 32ch;
            margin: 20px auto 0;
            color: rgba(239, 229, 208, 0.72);
            font-size: 14px;
            line-height: 1.65;
          }

          .v120-home-actions {
            position: relative;
            display: grid;
            gap: 10px;
            margin-top: 26px;
          }

          .v120-home-actions a {
            min-height: 48px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(200, 164, 93, 0.28);
            border-radius: 999px;
            color: #efe5d0;
            text-decoration: none;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.025)),
              rgba(255, 255, 255, 0.04);
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.12),
              0 20px 56px rgba(0, 0, 0, 0.42);
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .v120-home-actions a:first-child {
            border-color: rgba(200, 164, 93, 0.48);
            background:
              linear-gradient(180deg, rgba(200, 164, 93, 0.34), rgba(200, 164, 93, 0.08)),
              #100d09;
          }

          .v120-palantir-panel {
            position: relative;
            overflow: hidden;
            padding: 24px;
            border: 1px solid rgba(200, 164, 93, 0.24);
            border-radius: 32px;
            background:
              radial-gradient(circle at 50% 22%, rgba(214, 216, 210, 0.15), transparent 28%),
              radial-gradient(circle at 50% 42%, rgba(200, 164, 93, 0.16), transparent 42%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
              #070605;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 28px 90px rgba(0, 0, 0, 0.5);
          }

          .v120-palantir-orb {
            width: 148px;
            height: 148px;
            display: grid;
            place-items: center;
            margin: 0 auto 22px;
            border: 1px solid rgba(214, 216, 210, 0.2);
            border-radius: 999px;
            background:
              radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.24), transparent 18%),
              radial-gradient(circle at 54% 52%, rgba(200, 164, 93, 0.34), transparent 42%),
              radial-gradient(circle at 50% 50%, rgba(214, 216, 210, 0.16), transparent 58%),
              #090807;
            box-shadow:
              inset 0 0 42px rgba(255, 255, 255, 0.08),
              0 0 70px rgba(200, 164, 93, 0.16);
          }

          .v120-palantir-orb span {
            width: 48px;
            height: 48px;
            border-radius: 999px;
            background: rgba(200, 164, 93, 0.32);
            filter: blur(10px);
          }

          .v120-palantir-copy {
            text-align: center;
          }

          .v120-palantir-copy p,
          .v120-section-head p,
          .v120-featured-realm p {
            margin: 0 0 10px;
            color: rgba(200, 164, 93, 0.86);
            font-size: 10px;
            letter-spacing: 0.24em;
            text-transform: uppercase;
          }

          .v120-palantir-copy h2,
          .v120-section-head h2,
          .v120-featured-realm h2 {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 34px;
            line-height: 0.95;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .v120-palantir-copy span {
            display: block;
            max-width: 30ch;
            margin: 14px auto 0;
            color: rgba(239, 229, 208, 0.68);
            font-size: 14px;
            line-height: 1.55;
          }

          .v120-palantir-link {
            min-height: 46px;
            display: grid;
            place-items: center;
            margin-top: 20px;
            border: 1px solid rgba(200, 164, 93, 0.24);
            border-radius: 999px;
            color: #efe5d0;
            text-decoration: none;
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .v120-mobile-collections {
            padding-top: 42px;
          }

          .v120-section-head {
            margin-bottom: 18px;
            text-align: center;
          }

          .v120-home-grid {
            display: grid;
            gap: 12px;
          }

          .v120-home-card {
            display: block;
            padding: 18px;
            border: 1px solid rgba(200, 164, 93, 0.22);
            border-radius: 24px;
            color: #efe5d0;
            text-decoration: none;
            background:
              linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.025)),
              #070605;
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.08),
              0 22px 60px rgba(0, 0, 0, 0.36);
          }

          .v120-home-card div {
            display: flex;
            justify-content: space-between;
            gap: 14px;
          }

          .v120-home-card span,
          .v120-home-card small {
            color: rgba(200, 164, 93, 0.82);
            font-size: 10px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .v120-home-card strong {
            color: rgba(239, 229, 208, 0.9);
            font-size: 12px;
            letter-spacing: 0.12em;
          }

          .v120-home-card p {
            margin: 18px 0 14px;
            color: rgba(239, 229, 208, 0.66);
            font-size: 14px;
            line-height: 1.55;
          }

          .v120-featured-realm {
            margin-top: 42px;
            padding: 28px 22px;
            border: 1px solid rgba(200, 164, 93, 0.26);
            border-radius: 30px;
            background:
              radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.16), transparent 36%),
              linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.02)),
              #080705;
            text-align: center;
          }

          .v120-featured-realm span {
            display: block;
            margin-top: 10px;
            color: rgba(239, 229, 208, 0.68);
            font-size: 13px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .v120-featured-realm a {
            min-height: 46px;
            display: grid;
            place-items: center;
            margin-top: 22px;
            border: 1px solid rgba(200, 164, 93, 0.28);
            border-radius: 999px;
            color: #efe5d0;
            text-decoration: none;
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }
        }
      `}</style>
    </>
  );
}
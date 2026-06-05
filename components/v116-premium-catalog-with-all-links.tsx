"use client";

import Link from "next/link";

export default function V116PremiumCatalogWithAllLinks() {
  return (
    <main className="v116-catalog-page" aria-label="Premium character catalog with Frodo and Legolas links">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #030302 !important;
          margin: 0;
        }

        .v116-catalog-page {
          width: 100%;
          min-height: 100vh;
          background: #030302;
          overflow-x: clip;
        }

        .v116-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #030302;
          isolation: isolate;
          overflow: hidden;
        }

        .v116-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v116-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 12px;
          outline: none;
        }

        .v116-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(220, 184, 94, 0.9), 0 0 34px rgba(220, 184, 94, 0.28);
          background: rgba(220, 184, 94, 0.08);
        }

        @media (hover: hover) {
          .v116-hotspot:hover {
            background: rgba(220, 184, 94, 0.035);
            box-shadow:
              0 0 0 1px rgba(220, 184, 94, 0.20) inset,
              0 0 22px rgba(220, 184, 94, 0.12);
          }
        }

        .v116-home {
          left: 27.0%;
          top: 9.0%;
          width: 7.0%;
          height: 4.0%;
        }

        .v116-catalog {
          left: 35.0%;
          top: 9.0%;
          width: 8.2%;
          height: 4.0%;
        }

        .v116-search {
          left: 70.5%;
          top: 3.0%;
          width: 17.5%;
          height: 4.6%;
        }

        .v116-sauron {
          left: 1.7%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
        }

        .v116-gandalf {
          left: 18.5%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
        }

        .v116-galadriel {
          left: 35.2%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
        }

        .v116-aragorn {
          left: 51.9%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
        }

        .v116-frodo {
          left: 68.5%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
        }

        .v116-legolas {
          left: 85.2%;
          top: 26.5%;
          width: 13.2%;
          height: 49.0%;
        }

        @media (min-width: 1800px) {
          .v116-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v116-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v116-reference {
            width: 260vw;
            max-width: none;
            transform: translateX(-78vw);
            transform-origin: top center;
          }

          .v116-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v116-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v116/premium-catalog-mobile.jpg" />
          <source media="(max-width: 1280px)" srcSet="/v116/premium-catalog-tablet.jpg" />
          <source media="(max-width: 2200px)" srcSet="/v116/premium-catalog-desktop.jpg" />
          <img
            src="/v116/premium-catalog-desktop-8k.jpg"
            alt="Премиальный каталог персонажей Средиземья"
            width="7680"
            height="4322"
            className="v116-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v116-hotspot v116-home" href="/" aria-label="Главная" />
        <Link className="v116-hotspot v116-catalog" href="/catalog?type=characters" aria-label="Каталог" />
        <Link className="v116-hotspot v116-search" href="/?search=open" aria-label="Поиск в архиве" />

        <Link className="v116-hotspot v116-sauron" href="/characters/sauron" aria-label="Открыть досье Саурона" />
        <Link className="v116-hotspot v116-gandalf" href="/characters/gandalf" aria-label="Открыть досье Гэндальфа" />
        <Link className="v116-hotspot v116-galadriel" href="/characters/galadriel" aria-label="Открыть досье Галадриэль" />
        <Link className="v116-hotspot v116-aragorn" href="/characters/aragorn" aria-label="Открыть досье Арагорна" />
        <Link className="v116-hotspot v116-frodo" href="/characters/frodo" aria-label="Открыть досье Фродо" />
        <Link className="v116-hotspot v116-legolas" href="/characters/legolas" aria-label="Открыть досье Леголаса" />
      </div>
    </main>
  );
}

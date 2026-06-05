"use client";

import Link from "next/link";

export default function V112CatalogResponsive() {
  return (
    <main className="v112-catalog-page" aria-label="Премиальный каталог персонажей Средиземья responsive 8K">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #030302 !important;
          margin: 0;
        }

        .v112-catalog-page {
          width: 100%;
          min-height: 100vh;
          background: #030302;
          overflow-x: clip;
        }

        .v112-catalog-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #030302;
          isolation: isolate;
          overflow: hidden;
        }

        .v112-catalog-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v112-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          outline: none;
        }

        .v112-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(220, 184, 94, 0.9), 0 0 34px rgba(220, 184, 94, 0.28);
          background: rgba(220, 184, 94, 0.08);
        }

        @media (hover: hover) {
          .v112-hotspot:hover {
            background: rgba(220, 184, 94, 0.035);
            box-shadow:
              0 0 0 1px rgba(220, 184, 94, 0.20) inset,
              0 0 22px rgba(220, 184, 94, 0.12);
          }
        }

        
        .v112-catalog-home {
          left: 27.0%;
          top: 9.0%;
          width: 7.0%;
          height: 4.0%;
          border-radius: 14px;
        }

        .v112-catalog-catalog {
          left: 35.0%;
          top: 9.0%;
          width: 8.2%;
          height: 4.0%;
          border-radius: 14px;
        }

        .v112-catalog-search {
          left: 70.5%;
          top: 3.0%;
          width: 17.5%;
          height: 4.6%;
          border-radius: 14px;
        }

        .v112-catalog-sauron {
          left: 1.7%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
          border-radius: 14px;
        }

        .v112-catalog-gandalf {
          left: 18.5%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
          border-radius: 14px;
        }

        .v112-catalog-galadriel {
          left: 35.2%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
          border-radius: 14px;
        }

        .v112-catalog-aragorn {
          left: 51.9%;
          top: 26.5%;
          width: 16.0%;
          height: 49.0%;
          border-radius: 14px;
        }

        @media (min-width: 1800px) {
          .v112-catalog-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v112-catalog-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v112-catalog-reference {
            width: 230vw;
            max-width: none;
            transform: translateX(-58vw);
            transform-origin: top center;
          }

          .v112-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v112-catalog-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v112/catalog-mobile.jpg" />
          <source media="(max-width: 1280px)" srcSet="/v112/catalog-tablet.jpg" />
          <source media="(max-width: 2200px)" srcSet="/v112/catalog-desktop.jpg" />
          <img
            src="/v112/catalog-desktop-8k.jpg"
            alt="Премиальный каталог персонажей Средиземья responsive 8K"
            width="7680"
            height="4322"
            className="v112-catalog-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v112-hotspot v112-catalog-home" href="/" aria-label="Главная" />
        <Link className="v112-hotspot v112-catalog-catalog" href="/catalog?type=characters" aria-label="Каталог" />
        <Link className="v112-hotspot v112-catalog-search" href="/?search=open" aria-label="Поиск" />
        <Link className="v112-hotspot v112-catalog-sauron" href="/characters/sauron" aria-label="Открыть Саурона" />
        <Link className="v112-hotspot v112-catalog-gandalf" href="/characters/gandalf" aria-label="Открыть Гэндальфа" />
        <Link className="v112-hotspot v112-catalog-galadriel" href="/characters/galadriel" aria-label="Открыть Галадриэль" />
        <Link className="v112-hotspot v112-catalog-aragorn" href="/characters/aragorn" aria-label="Открыть Арагорна" />
      </div>
    </main>
  );
}

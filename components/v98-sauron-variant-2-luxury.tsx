"use client";

import Link from "next/link";

export default function V98SauronVariant2Luxury() {
  return (
    <main className="v98-sauron-page" aria-label="Sauron selected luxury variant 2">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #020201 !important;
          margin: 0;
        }

        .v98-sauron-page {
          width: 100%;
          min-height: 100vh;
          background: #020201;
          overflow-x: clip;
        }

        .v98-sauron-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #020201;
          isolation: isolate;
          overflow: hidden;
        }

        .v98-sauron-stage picture {
          display: block;
          width: 100%;
        }

        .v98-sauron-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .v98-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v98-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(231, 196, 112, 0.9), 0 0 32px rgba(231, 196, 112, 0.35);
          background: rgba(231, 196, 112, 0.08);
        }

        @media (hover: hover) {
          .v98-hotspot:hover {
            background: rgba(214, 177, 95, 0.035);
            box-shadow:
              0 0 0 1px rgba(214, 177, 95, 0.16) inset,
              0 0 20px rgba(214, 177, 95, 0.10);
          }
        }

        .v98-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v98-characters {
          left: 41.2%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v98-palantir {
          left: 88.0%;
          top: 0.8%;
          width: 9.2%;
          height: 5.8%;
        }

        .v98-back {
          left: 1.6%;
          bottom: 3.8%;
          width: 10.8%;
          height: 6.8%;
          border-radius: 16px;
        }

        @media (min-width: 1800px) {
          .v98-sauron-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v98-sauron-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v98-sauron-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v98-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v98-sauron-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v98/sauron-variant-2-approved-2k.webp" />
          <source type="image/webp" srcSet="/v98/sauron-variant-2-approved-4k.webp" />
          <img
            src="/v98/sauron-variant-2-approved-4k.jpg"
            alt="Саурон — выбранный премиальный вариант 2"
            width="3840"
            height="2161"
            className="v98-sauron-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v98-hotspot v98-home" href="/" aria-label="Главная" />
        <Link className="v98-hotspot v98-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v98-hotspot v98-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v98-hotspot v98-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

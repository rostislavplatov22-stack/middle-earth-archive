"use client";

import Link from "next/link";

export default function V108AragornKingElessarPage() {
  return (
    <main className="v108-aragorn-page" aria-label="Aragorn King Elessar page">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #040809 !important;
          margin: 0;
        }

        .v108-aragorn-page {
          width: 100%;
          min-height: 100vh;
          background: #040809;
          overflow-x: clip;
        }

        .v108-aragorn-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #040809;
          isolation: isolate;
          overflow: hidden;
        }

        .v108-aragorn-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v108-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v108-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(207, 171, 91, 0.9), 0 0 32px rgba(207, 171, 91, 0.28);
          background: rgba(207, 171, 91, 0.08);
        }

        @media (hover: hover) {
          .v108-hotspot:hover {
            background: rgba(207, 171, 91, 0.035);
            box-shadow:
              0 0 0 1px rgba(207, 171, 91, 0.18) inset,
              0 0 20px rgba(207, 171, 91, 0.10);
          }
        }

        .v108-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v108-characters {
          left: 27.0%;
          top: 0.8%;
          width: 8.8%;
          height: 5.8%;
        }

        .v108-catalog {
          left: 1.5%;
          bottom: 3.0%;
          width: 25.0%;
          height: 7.2%;
          border-radius: 16px;
        }

        .v108-palantir {
          left: 50.0%;
          bottom: 3.0%;
          width: 18.0%;
          height: 7.2%;
          border-radius: 16px;
        }

        .v108-next {
          right: 1.5%;
          bottom: 3.0%;
          width: 20.0%;
          height: 7.2%;
          border-radius: 16px;
        }

        @media (min-width: 1800px) {
          .v108-aragorn-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v108-aragorn-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v108-aragorn-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v108-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v108-aragorn-stage">
        <img
          src="/v108/aragorn-king-elessar-approved.png"
          alt="Арагорн — Король Элессар, выбранный вариант"
          width="1672"
          height="941"
          className="v108-aragorn-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v108-hotspot v108-home" href="/" aria-label="Главная" />
        <Link className="v108-hotspot v108-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v108-hotspot v108-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v108-hotspot v108-palantir" href="/?search=open" aria-label="Открыть Палантир" />
        <Link className="v108-hotspot v108-next" href="/characters/gandalf" aria-label="Следующий персонаж" />
      </div>
    </main>
  );
}

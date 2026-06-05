"use client";

import Link from "next/link";

export default function V114LegolasDossierPage() {
  return (
    <main className="v113-legolas-page" aria-label="Леголас — Prince of Mirkwood Dossier">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #050c07 !important;
          margin: 0;
        }

        .v113-legolas-page {
          width: 100%;
          min-height: 100vh;
          background: #050c07;
          overflow-x: clip;
        }

        .v113-legolas-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #050c07;
          isolation: isolate;
          overflow: hidden;
        }

        .v113-legolas-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v113-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 14px;
          outline: none;
        }

        .v113-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(220, 184, 94, 0.9), 0 0 34px rgba(220, 184, 94, 0.28);
          background: rgba(220, 184, 94, 0.08);
        }

        @media (hover: hover) {
          .v113-hotspot:hover {
            background: rgba(220, 184, 94, 0.035);
            box-shadow:
              0 0 0 1px rgba(220, 184, 94, 0.20) inset,
              0 0 22px rgba(220, 184, 94, 0.12);
          }
        }

        .v113-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v113-characters {
          left: 27.0%;
          top: 0.8%;
          width: 10.0%;
          height: 5.8%;
        }

        .v113-catalog {
          left: 1.5%;
          bottom: 3.0%;
          width: 25.0%;
          height: 7.2%;
        }

        .v113-palantir {
          left: 50.0%;
          bottom: 3.0%;
          width: 18.0%;
          height: 7.2%;
        }

        .v113-next {
          right: 1.5%;
          bottom: 3.0%;
          width: 20.0%;
          height: 7.2%;
        }

        @media (min-width: 1800px) {
          .v113-legolas-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v113-legolas-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v113-legolas-reference {
            width: 230vw;
            max-width: none;
            transform: translateX(-58vw);
            transform-origin: top center;
          }

          .v113-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v113-legolas-stage">
        <img
          src="/v113/legolas-dossier-approved.png"
          alt="Леголас — Prince of Mirkwood Dossier"
          width="1672"
          height="941"
          className="v113-legolas-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v113-hotspot v113-home" href="/" aria-label="Главная" />
        <Link className="v113-hotspot v113-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v113-hotspot v113-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v113-hotspot v113-palantir" href="/?search=open" aria-label="Открыть Палантир" />
        <Link className="v113-hotspot v113-next" href="/characters/sauron" aria-label="Следующий персонаж" />
      </div>
    </main>
  );
}

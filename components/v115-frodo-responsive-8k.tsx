"use client";

import Link from "next/link";

export default function V115FrodoResponsive8K() {
  return (
    <main className="v115-frodo-page" aria-label="Фродо Бэггинс — Ring Bearer Dossier 8K">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #050c05 !important;
          margin: 0;
        }

        .v115-frodo-page {
          width: 100%;
          min-height: 100vh;
          background: #050c05;
          overflow-x: clip;
        }

        .v115-frodo-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #050c05;
          isolation: isolate;
          overflow: hidden;
        }

        .v115-frodo-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v115-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 14px;
          outline: none;
        }

        .v115-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(220, 184, 94, 0.9), 0 0 34px rgba(220, 184, 94, 0.28);
          background: rgba(220, 184, 94, 0.08);
        }

        @media (hover: hover) {
          .v115-hotspot:hover {
            background: rgba(220, 184, 94, 0.035);
            box-shadow:
              0 0 0 1px rgba(220, 184, 94, 0.20) inset,
              0 0 22px rgba(220, 184, 94, 0.12);
          }
        }

        .v115-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v115-characters {
          left: 27.0%;
          top: 0.8%;
          width: 10.0%;
          height: 5.8%;
        }

        .v115-catalog {
          left: 1.5%;
          bottom: 3.0%;
          width: 25.0%;
          height: 7.2%;
        }

        .v115-palantir {
          left: 50.0%;
          bottom: 3.0%;
          width: 18.0%;
          height: 7.2%;
        }

        .v115-next {
          right: 1.5%;
          bottom: 3.0%;
          width: 20.0%;
          height: 7.2%;
        }

        @media (min-width: 1800px) {
          .v115-frodo-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v115-frodo-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v115-frodo-reference {
            width: 230vw;
            max-width: none;
            transform: translateX(-58vw);
            transform-origin: top center;
          }

          .v115-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v115-frodo-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v115/frodo-mobile.jpg" />
          <source media="(max-width: 1280px)" srcSet="/v115/frodo-tablet.jpg" />
          <source media="(max-width: 2200px)" srcSet="/v115/frodo-desktop.jpg" />
          <img
            src="/v115/frodo-desktop-8k.jpg"
            alt="Фродо Бэггинс — Ring Bearer Dossier 8K"
            width="7680"
            height="4322"
            className="v115-frodo-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v115-hotspot v115-home" href="/" aria-label="Главная" />
        <Link className="v115-hotspot v115-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v115-hotspot v115-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v115-hotspot v115-palantir" href="/?search=open" aria-label="Открыть Палантир" />
        <Link className="v115-hotspot v115-next" href="/characters/legolas" aria-label="Следующий персонаж" />
      </div>
    </main>
  );
}

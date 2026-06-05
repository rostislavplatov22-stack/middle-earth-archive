"use client";

import Link from "next/link";

export default function V101SauronFinalPage() {
  return (
    <main className="v101-sauron-page" aria-label="Sauron final approved page">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #020201 !important;
          margin: 0;
        }

        .v101-sauron-page {
          width: 100%;
          min-height: 100vh;
          background: #020201;
          overflow-x: clip;
        }

        .v101-sauron-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #020201;
          isolation: isolate;
          overflow: hidden;
        }

        .v101-sauron-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v101-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v101-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(231, 196, 112, 0.9), 0 0 32px rgba(231, 196, 112, 0.35);
          background: rgba(231, 196, 112, 0.08);
        }

        @media (hover: hover) {
          .v101-hotspot:hover {
            background: rgba(214, 177, 95, 0.035);
            box-shadow:
              0 0 0 1px rgba(214, 177, 95, 0.16) inset,
              0 0 20px rgba(214, 177, 95, 0.10);
          }
        }

        .v101-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v101-characters {
          left: 42.0%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v101-back {
          left: 1.6%;
          bottom: 3.8%;
          width: 10.8%;
          height: 6.8%;
          border-radius: 16px;
        }

        .v101-palantir {
          left: 88.0%;
          top: 0.8%;
          width: 9.2%;
          height: 5.8%;
        }

        @media (min-width: 1800px) {
          .v101-sauron-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v101-sauron-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v101-sauron-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v101-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v101-sauron-stage">
        <img
          src="/v101/sauron-page-approved-exact.png"
          alt="Саурон — финальный утверждённый вариант"
          width="1672"
          height="941"
          className="v101-sauron-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v101-hotspot v101-home" href="/" aria-label="Главная" />
        <Link className="v101-hotspot v101-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v101-hotspot v101-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v101-hotspot v101-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

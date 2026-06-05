"use client";

import Link from "next/link";

export default function V107GaladrielFullElvenRoyalPage() {
  return (
    <main className="v107-galadriel-page" aria-label="Galadriel full Elven Royal Label page">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #f5f1e8 !important;
          margin: 0;
        }

        .v107-galadriel-page {
          width: 100%;
          min-height: 100vh;
          background: #f5f1e8;
          overflow-x: clip;
        }

        .v107-galadriel-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #f5f1e8;
          isolation: isolate;
          overflow: hidden;
        }

        .v107-galadriel-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v107-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v107-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(64, 101, 92, 0.9), 0 0 32px rgba(64, 101, 92, 0.24);
          background: rgba(64, 101, 92, 0.08);
        }

        @media (hover: hover) {
          .v107-hotspot:hover {
            background: rgba(64, 101, 92, 0.035);
            box-shadow:
              0 0 0 1px rgba(64, 101, 92, 0.18) inset,
              0 0 20px rgba(64, 101, 92, 0.10);
          }
        }

        .v107-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v107-characters {
          left: 42.0%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v107-catalog {
          left: 1.5%;
          bottom: 3.8%;
          width: 34.0%;
          height: 6.8%;
          border-radius: 16px;
        }

        .v107-palantir {
          left: 52.0%;
          bottom: 3.8%;
          width: 16.0%;
          height: 6.8%;
          border-radius: 16px;
        }

        @media (min-width: 1800px) {
          .v107-galadriel-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v107-galadriel-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v107-galadriel-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v107-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v107-galadriel-stage">
        <img
          src="/v107/galadriel-elven-royal-full-approved.png"
          alt="Галадриэль — полный Elven Royal Label вариант"
          width="1536"
          height="1024"
          className="v107-galadriel-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v107-hotspot v107-home" href="/" aria-label="Главная" />
        <Link className="v107-hotspot v107-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v107-hotspot v107-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v107-hotspot v107-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

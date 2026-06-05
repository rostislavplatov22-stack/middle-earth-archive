"use client";

import Link from "next/link";

export default function V111Sauron8K() {
  return (
    <main className="v111-sauron-page" aria-label="Саурон 8K">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #020201 !important;
          margin: 0;
        }

        .v111-sauron-page {
          width: 100%;
          min-height: 100vh;
          background: #020201;
          overflow-x: clip;
        }

        .v111-sauron-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #020201;
          isolation: isolate;
          overflow: hidden;
        }

        .v111-sauron-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v111-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          outline: none;
        }

        .v111-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(220, 184, 94, 0.9), 0 0 34px rgba(220, 184, 94, 0.28);
          background: rgba(220, 184, 94, 0.08);
        }

        @media (hover: hover) {
          .v111-hotspot:hover {
            background: rgba(220, 184, 94, 0.035);
            box-shadow:
              0 0 0 1px rgba(220, 184, 94, 0.20) inset,
              0 0 22px rgba(220, 184, 94, 0.12);
          }
        }

        
        .v111-sauron-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
          border-radius: 14px;
        }

        .v111-sauron-characters {
          left: 27.0%;
          top: 0.8%;
          width: 10.0%;
          height: 5.8%;
          border-radius: 14px;
        }

        .v111-sauron-catalog {
          left: 1.5%;
          top: 3.0%;
          width: 25.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        .v111-sauron-palantir {
          left: 50.0%;
          top: 3.0%;
          width: 18.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        @media (min-width: 1800px) {
          .v111-sauron-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v111-sauron-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v111-sauron-reference {
            width: 230vw;
            max-width: none;
            transform: translateX(-58vw);
            transform-origin: top center;
          }

          .v111-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v111-sauron-stage">
        <img
          src="/v111/sauron-8k.jpg"
          alt="Саурон 8K"
          width="7680"
          height="4322"
          className="v111-sauron-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v111-hotspot v111-sauron-home" href="/" aria-label="Главная" />
        <Link className="v111-hotspot v111-sauron-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v111-hotspot v111-sauron-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v111-hotspot v111-sauron-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

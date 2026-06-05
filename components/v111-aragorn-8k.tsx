"use client";

import Link from "next/link";

export default function V111Aragorn8K() {
  return (
    <main className="v111-aragorn-page" aria-label="Арагорн 8K">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #040809 !important;
          margin: 0;
        }

        .v111-aragorn-page {
          width: 100%;
          min-height: 100vh;
          background: #040809;
          overflow-x: clip;
        }

        .v111-aragorn-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #040809;
          isolation: isolate;
          overflow: hidden;
        }

        .v111-aragorn-reference {
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

        
        .v111-aragorn-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
          border-radius: 14px;
        }

        .v111-aragorn-characters {
          left: 27.0%;
          top: 0.8%;
          width: 10.0%;
          height: 5.8%;
          border-radius: 14px;
        }

        .v111-aragorn-catalog {
          left: 1.5%;
          top: 3.0%;
          width: 25.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        .v111-aragorn-palantir {
          left: 50.0%;
          top: 3.0%;
          width: 18.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        @media (min-width: 1800px) {
          .v111-aragorn-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v111-aragorn-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v111-aragorn-reference {
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

      <div className="v111-aragorn-stage">
        <img
          src="/v111/aragorn-8k.jpg"
          alt="Арагорн 8K"
          width="7680"
          height="4322"
          className="v111-aragorn-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v111-hotspot v111-aragorn-home" href="/" aria-label="Главная" />
        <Link className="v111-hotspot v111-aragorn-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v111-hotspot v111-aragorn-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v111-hotspot v111-aragorn-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

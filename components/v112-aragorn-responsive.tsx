"use client";

import Link from "next/link";

export default function V112AragornResponsive() {
  return (
    <main className="v112-aragorn-page" aria-label="Арагорн responsive 8K">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #040809 !important;
          margin: 0;
        }

        .v112-aragorn-page {
          width: 100%;
          min-height: 100vh;
          background: #040809;
          overflow-x: clip;
        }

        .v112-aragorn-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #040809;
          isolation: isolate;
          overflow: hidden;
        }

        .v112-aragorn-reference {
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

        
        .v112-aragorn-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
          border-radius: 14px;
        }

        .v112-aragorn-characters {
          left: 27.0%;
          top: 0.8%;
          width: 10.0%;
          height: 5.8%;
          border-radius: 14px;
        }

        .v112-aragorn-catalog {
          left: 1.5%;
          top: 3.0%;
          width: 25.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        .v112-aragorn-palantir {
          left: 50.0%;
          top: 3.0%;
          width: 18.0%;
          height: 7.2%;
          border-radius: 14px;
        }

        @media (min-width: 1800px) {
          .v112-aragorn-stage {
            max-width: 7680px;
          }
        }

        @media (max-width: 760px) {
          .v112-aragorn-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v112-aragorn-reference {
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

      <div className="v112-aragorn-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v112/aragorn-mobile.jpg" />
          <source media="(max-width: 1280px)" srcSet="/v112/aragorn-tablet.jpg" />
          <source media="(max-width: 2200px)" srcSet="/v112/aragorn-desktop.jpg" />
          <img
            src="/v112/aragorn-desktop-8k.jpg"
            alt="Арагорн responsive 8K"
            width="7680"
            height="4322"
            className="v112-aragorn-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v112-hotspot v112-aragorn-home" href="/" aria-label="Главная" />
        <Link className="v112-hotspot v112-aragorn-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v112-hotspot v112-aragorn-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v112-hotspot v112-aragorn-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

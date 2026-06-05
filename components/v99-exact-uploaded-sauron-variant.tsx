"use client";

import Link from "next/link";

export default function V99ExactUploadedSauronVariant() {
  return (
    <main className="v99-sauron-page" aria-label="Sauron exact uploaded approved variant">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #020201 !important;
          margin: 0;
        }

        .v99-sauron-page {
          width: 100%;
          min-height: 100vh;
          background: #020201;
          overflow-x: clip;
        }

        .v99-sauron-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #020201;
          isolation: isolate;
          overflow: hidden;
        }

        .v99-sauron-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v99-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v99-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(231, 196, 112, 0.9), 0 0 32px rgba(231, 196, 112, 0.35);
          background: rgba(231, 196, 112, 0.08);
        }

        @media (hover: hover) {
          .v99-hotspot:hover {
            background: rgba(214, 177, 95, 0.035);
            box-shadow:
              0 0 0 1px rgba(214, 177, 95, 0.16) inset,
              0 0 20px rgba(214, 177, 95, 0.10);
          }
        }

        .v99-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v99-characters {
          left: 42.0%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v99-palantir {
          left: 88.0%;
          top: 0.8%;
          width: 9.2%;
          height: 5.8%;
        }

        .v99-back {
          left: 1.6%;
          bottom: 3.8%;
          width: 10.8%;
          height: 6.8%;
          border-radius: 16px;
        }

        @media (min-width: 1800px) {
          .v99-sauron-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v99-sauron-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v99-sauron-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v99-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v99-sauron-stage">
        <img
          src="/v99/sauron-exact-approved.png"
          alt="Саурон — точный выбранный вариант"
          width="1672"
          height="941"
          className="v99-sauron-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v99-hotspot v99-home" href="/" aria-label="Главная" />
        <Link className="v99-hotspot v99-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v99-hotspot v99-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v99-hotspot v99-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

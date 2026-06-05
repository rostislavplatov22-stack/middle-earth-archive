"use client";

import Link from "next/link";

export default function V102GandalfCelestialPage() {
  return (
    <main className="v102-gandalf-page" aria-label="Gandalf Celestial Label final page">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #f4efe4 !important;
          margin: 0;
        }

        .v102-gandalf-page {
          width: 100%;
          min-height: 100vh;
          background: #f4efe4;
          overflow-x: clip;
        }

        .v102-gandalf-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #f4efe4;
          isolation: isolate;
          overflow: hidden;
        }

        .v102-gandalf-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v102-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v102-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(185, 148, 75, 0.9), 0 0 32px rgba(185, 148, 75, 0.28);
          background: rgba(185, 148, 75, 0.08);
        }

        @media (hover: hover) {
          .v102-hotspot:hover {
            background: rgba(185, 148, 75, 0.035);
            box-shadow:
              0 0 0 1px rgba(185, 148, 75, 0.18) inset,
              0 0 20px rgba(185, 148, 75, 0.10);
          }
        }

        .v102-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v102-characters {
          left: 42.0%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v102-back {
          left: 1.6%;
          bottom: 3.8%;
          width: 10.8%;
          height: 6.8%;
          border-radius: 16px;
        }

        .v102-palantir {
          left: 88.0%;
          top: 0.8%;
          width: 9.2%;
          height: 5.8%;
        }

        @media (min-width: 1800px) {
          .v102-gandalf-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v102-gandalf-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v102-gandalf-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v102-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v102-gandalf-stage">
        <img
          src="/v102/gandalf-celestial-page-approved.png"
          alt="Гэндальф — финальный Celestial Label вариант"
          width="1672"
          height="941"
          className="v102-gandalf-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v102-hotspot v102-home" href="/" aria-label="Главная" />
        <Link className="v102-hotspot v102-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v102-hotspot v102-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v102-hotspot v102-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

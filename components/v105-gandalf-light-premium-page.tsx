"use client";

import Link from "next/link";

export default function V105GandalfLightPremiumPage() {
  return (
    <main className="v105-gandalf-page" aria-label="Gandalf final light premium page">
      <style dangerouslySetInnerHTML={{ __html: `
        html, body {
          max-width: 100%;
          overflow-x: clip;
          background: #f6f1e7 !important;
          margin: 0;
        }

        .v105-gandalf-page {
          width: 100%;
          min-height: 100vh;
          background: #f6f1e7;
          overflow-x: clip;
        }

        .v105-gandalf-stage {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          background: #f6f1e7;
          isolation: isolate;
          overflow: hidden;
        }

        .v105-gandalf-reference {
          display: block;
          width: 100%;
          height: auto;
          max-width: none;
          user-select: none;
          -webkit-user-drag: none;
          image-rendering: auto;
        }

        .v105-hotspot {
          position: absolute;
          z-index: 8;
          display: block;
          border-radius: 999px;
          outline: none;
        }

        .v105-hotspot:focus-visible {
          box-shadow: 0 0 0 2px rgba(185, 148, 75, 0.9), 0 0 32px rgba(185, 148, 75, 0.28);
          background: rgba(185, 148, 75, 0.08);
        }

        @media (hover: hover) {
          .v105-hotspot:hover {
            background: rgba(185, 148, 75, 0.035);
            box-shadow:
              0 0 0 1px rgba(185, 148, 75, 0.18) inset,
              0 0 20px rgba(185, 148, 75, 0.10);
          }
        }

        .v105-home {
          left: 0.6%;
          top: 0.8%;
          width: 16.2%;
          height: 6.4%;
        }

        .v105-characters {
          left: 42.0%;
          top: 0.8%;
          width: 8.2%;
          height: 5.8%;
        }

        .v105-back {
          left: 1.6%;
          bottom: 3.8%;
          width: 10.8%;
          height: 6.8%;
          border-radius: 16px;
        }

        .v105-palantir {
          left: 52.0%;
          bottom: 3.8%;
          width: 16.0%;
          height: 6.8%;
          border-radius: 16px;
        }

        .v105-catalog {
          left: 1.5%;
          bottom: 3.8%;
          width: 34.0%;
          height: 6.8%;
          border-radius: 16px;
        }

        @media (min-width: 1800px) {
          .v105-gandalf-stage {
            max-width: 3840px;
          }
        }

        @media (max-width: 760px) {
          .v105-gandalf-stage {
            width: 100vw;
            overflow-x: hidden;
          }

          .v105-gandalf-reference {
            width: 210vw;
            max-width: none;
            transform: translateX(-44vw);
            transform-origin: top center;
          }

          .v105-hotspot {
            display: none;
          }
        }
      ` }} />

      <div className="v105-gandalf-stage">
        <img
          src="/v105/gandalf-light-premium-approved.png"
          alt="Гэндальф — финальный светлый премиальный вариант"
          width="1402"
          height="1122"
          className="v105-gandalf-reference"
          decoding="async"
          fetchPriority="high"
        />

        <Link className="v105-hotspot v105-home" href="/" aria-label="Главная" />
        <Link className="v105-hotspot v105-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v105-hotspot v105-catalog" href="/catalog?type=characters" aria-label="Открыть каталог" />
        <Link className="v105-hotspot v105-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

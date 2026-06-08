"use client";

import V112AragornResponsive from "./v112-aragorn-responsive";

export default function V121AragornDesktopPolish() {
  return (
    <main className="v121-aragorn-shell">
      <div className="v121-aragorn-light" aria-hidden="true" />
      <div className="v121-aragorn-crown" aria-hidden="true" />
      <div className="v121-aragorn-frame">
        <V112AragornResponsive />
      </div>

      <style jsx global>{`
        .v121-aragorn-shell {
          position: relative;
          min-height: 100svh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 28% 20%, rgba(200, 164, 93, 0.16), transparent 24%),
            radial-gradient(circle at 74% 16%, rgba(214, 216, 210, 0.1), transparent 26%),
            linear-gradient(180deg, #030607 0%, #071014 48%, #020303 100%);
        }

        .v121-aragorn-light {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.44), transparent 35%, rgba(0, 0, 0, 0.52)),
            radial-gradient(circle at 28% 18%, rgba(239, 229, 208, 0.12), transparent 20%),
            radial-gradient(circle at 70% 42%, rgba(200, 164, 93, 0.1), transparent 26%);
          opacity: 0.92;
        }

        .v121-aragorn-light::before {
          content: "";
          position: absolute;
          inset: -22%;
          background:
            linear-gradient(115deg, transparent 0 42%, rgba(239, 229, 208, 0.08) 50%, transparent 58%),
            radial-gradient(circle, rgba(200, 164, 93, 0.07) 0 1px, transparent 1px);
          background-size: auto, 52px 52px;
          opacity: 0.08;
          transform: rotate(-6deg);
        }

        .v121-aragorn-crown {
          position: fixed;
          top: 12%;
          left: 50%;
          width: 42vw;
          height: 42vw;
          max-width: 620px;
          max-height: 620px;
          z-index: 0;
          pointer-events: none;
          transform: translateX(-50%);
          border: 1px solid rgba(200, 164, 93, 0.08);
          border-radius: 999px;
          background:
            radial-gradient(circle, rgba(200, 164, 93, 0.08), transparent 58%);
          filter: blur(1px);
          opacity: 0.72;
          animation: v121AragornCrown 7.5s cubic-bezier(.16, 1, .3, 1) infinite alternate;
        }

        .v121-aragorn-frame {
          position: relative;
          z-index: 1;
          min-height: 100svh;
          animation: v121AragornReveal 1.12s cubic-bezier(.16, 1, .3, 1) both;
        }

        .v121-aragorn-frame img {
          filter: saturate(1.04) contrast(1.035);
        }

        .v121-aragorn-frame a,
        .v121-aragorn-frame button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1),
            box-shadow 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        .v121-aragorn-frame a:hover,
        .v121-aragorn-frame button:hover {
          transform: translateY(-1px);
          filter: brightness(1.08);
        }

        @keyframes v121AragornReveal {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.986);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes v121AragornCrown {
          from {
            opacity: 0.45;
            transform: translateX(-50%) scale(0.98);
          }

          to {
            opacity: 0.82;
            transform: translateX(-50%) scale(1.035);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .v121-aragorn-frame,
          .v121-aragorn-crown {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
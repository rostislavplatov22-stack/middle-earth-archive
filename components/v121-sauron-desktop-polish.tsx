"use client";

import V112SauronResponsive from "./v112-sauron-responsive";

export default function V121SauronDesktopPolish() {
  return (
    <main className="v121-sauron-shell">
      <div className="v121-sauron-void" aria-hidden="true" />
      <div className="v121-sauron-embers" aria-hidden="true" />
      <div className="v121-sauron-frame">
        <V112SauronResponsive />
      </div>

      <style jsx global>{`
        .v121-sauron-shell {
          position: relative;
          min-height: 100svh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at 78% 24%, rgba(177, 74, 38, 0.18), transparent 28%),
            radial-gradient(circle at 22% 36%, rgba(200, 164, 93, 0.08), transparent 26%),
            radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.82), transparent 44%),
            linear-gradient(180deg, #020202 0%, #070403 48%, #010101 100%);
        }

        .v121-sauron-void {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.74), transparent 32%, rgba(0, 0, 0, 0.76)),
            radial-gradient(circle at 82% 22%, rgba(177, 74, 38, 0.16), transparent 22%),
            radial-gradient(circle at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.46) 100%);
          opacity: 0.95;
        }

        .v121-sauron-void::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(circle, rgba(200, 164, 93, 0.08) 0 1px, transparent 1px);
          background-size: 54px 54px;
          opacity: 0.06;
          transform: rotate(-8deg);
        }

        .v121-sauron-embers {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 86% 18%, rgba(255, 89, 31, 0.22), transparent 12%),
            radial-gradient(circle at 78% 36%, rgba(177, 74, 38, 0.18), transparent 16%),
            radial-gradient(circle at 34% 82%, rgba(200, 164, 93, 0.08), transparent 12%);
          filter: blur(10px);
          opacity: 0.72;
          animation: v121SauronBreath 6.8s cubic-bezier(.16, 1, .3, 1) infinite alternate;
        }

        .v121-sauron-frame {
          position: relative;
          z-index: 1;
          min-height: 100svh;
          animation: v121SauronReveal 1.15s cubic-bezier(.16, 1, .3, 1) both;
        }

        .v121-sauron-frame img {
          filter: saturate(1.05) contrast(1.04);
        }

        .v121-sauron-frame a,
        .v121-sauron-frame button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1),
            box-shadow 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        .v121-sauron-frame a:hover,
        .v121-sauron-frame button:hover {
          transform: translateY(-1px);
          filter: brightness(1.08);
        }

        @keyframes v121SauronReveal {
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

        @keyframes v121SauronBreath {
          from {
            opacity: 0.48;
            transform: scale(1);
          }

          to {
            opacity: 0.82;
            transform: scale(1.035);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .v121-sauron-frame,
          .v121-sauron-embers {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
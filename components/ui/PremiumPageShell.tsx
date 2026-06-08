"use client";

import type { ReactNode } from "react";

type PremiumPageShellVariant =
  | "obsidian"
  | "mordor"
  | "gondor"
  | "elven"
  | "shire"
  | "parchment";

type PremiumPageShellProps = {
  children: ReactNode;
  variant?: PremiumPageShellVariant;
  className?: string;
};

export default function PremiumPageShell({
  children,
  variant = "obsidian",
  className = "",
}: PremiumPageShellProps) {
  return (
    <main className={`premium-page-shell premium-page-shell--${variant} ${className}`}>
      <div className="premium-shell__atmosphere" aria-hidden="true" />
      <div className="premium-shell__grain" aria-hidden="true" />
      <div className="premium-shell__glow" aria-hidden="true" />

      <div className="premium-shell__content">{children}</div>

      <style jsx global>{`
        .premium-page-shell {
          position: relative;
          min-height: 100svh;
          overflow-x: hidden;
          isolation: isolate;
          background: #030302;
        }

        .premium-shell__atmosphere,
        .premium-shell__grain,
        .premium-shell__glow {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .premium-shell__content {
          position: relative;
          z-index: 1;
          min-height: 100svh;
          animation: premiumShellReveal 1.08s cubic-bezier(.16, 1, .3, 1) both;
        }

        .premium-shell__atmosphere {
          opacity: 0.92;
        }

        .premium-shell__grain {
          inset: -20%;
          background:
            radial-gradient(circle, rgba(255, 255, 255, 0.055) 0 1px, transparent 1px);
          background-size: 46px 46px;
          opacity: 0.055;
          transform: rotate(-7deg);
        }

        .premium-shell__glow {
          filter: blur(10px);
          opacity: 0.62;
          animation: premiumShellBreath 7.2s cubic-bezier(.16, 1, .3, 1) infinite alternate;
        }

        .premium-page-shell--obsidian {
          background:
            radial-gradient(circle at 50% 0%, rgba(200, 164, 93, 0.11), transparent 34%),
            linear-gradient(180deg, #030302 0%, #080705 52%, #020202 100%);
        }

        .premium-page-shell--obsidian .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.52), transparent 36%, rgba(0, 0, 0, 0.6)),
            radial-gradient(circle at 50% 8%, rgba(239, 229, 208, 0.07), transparent 22%);
        }

        .premium-page-shell--obsidian .premium-shell__glow {
          background:
            radial-gradient(circle at 50% 18%, rgba(200, 164, 93, 0.16), transparent 18%);
        }

        .premium-page-shell--mordor {
          background:
            radial-gradient(circle at 78% 24%, rgba(177, 74, 38, 0.18), transparent 28%),
            radial-gradient(circle at 22% 36%, rgba(200, 164, 93, 0.08), transparent 26%),
            linear-gradient(180deg, #020202 0%, #070403 48%, #010101 100%);
        }

        .premium-page-shell--mordor .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.74), transparent 32%, rgba(0, 0, 0, 0.76)),
            radial-gradient(circle at 82% 22%, rgba(177, 74, 38, 0.16), transparent 22%),
            radial-gradient(circle at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.46) 100%);
        }

        .premium-page-shell--mordor .premium-shell__glow {
          background:
            radial-gradient(circle at 86% 18%, rgba(255, 89, 31, 0.22), transparent 12%),
            radial-gradient(circle at 78% 36%, rgba(177, 74, 38, 0.18), transparent 16%),
            radial-gradient(circle at 34% 82%, rgba(200, 164, 93, 0.08), transparent 12%);
        }

        .premium-page-shell--gondor {
          background:
            radial-gradient(circle at 28% 20%, rgba(200, 164, 93, 0.16), transparent 24%),
            radial-gradient(circle at 74% 16%, rgba(214, 216, 210, 0.1), transparent 26%),
            linear-gradient(180deg, #030607 0%, #071014 48%, #020303 100%);
        }

        .premium-page-shell--gondor .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.44), transparent 35%, rgba(0, 0, 0, 0.52)),
            radial-gradient(circle at 28% 18%, rgba(239, 229, 208, 0.12), transparent 20%),
            radial-gradient(circle at 70% 42%, rgba(200, 164, 93, 0.1), transparent 26%);
        }

        .premium-page-shell--gondor .premium-shell__glow {
          background:
            radial-gradient(circle at 44% 18%, rgba(239, 229, 208, 0.12), transparent 18%),
            radial-gradient(circle at 58% 42%, rgba(200, 164, 93, 0.14), transparent 20%);
        }

        .premium-page-shell--elven {
          background:
            radial-gradient(circle at 28% 18%, rgba(190, 220, 184, 0.14), transparent 26%),
            radial-gradient(circle at 74% 26%, rgba(200, 164, 93, 0.1), transparent 24%),
            linear-gradient(180deg, #020604 0%, #07130c 52%, #020302 100%);
        }

        .premium-page-shell--elven .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent 36%, rgba(0, 0, 0, 0.56)),
            radial-gradient(circle at 50% 10%, rgba(190, 220, 184, 0.12), transparent 24%);
        }

        .premium-page-shell--elven .premium-shell__glow {
          background:
            radial-gradient(circle at 32% 18%, rgba(190, 220, 184, 0.18), transparent 18%),
            radial-gradient(circle at 70% 44%, rgba(200, 164, 93, 0.1), transparent 20%);
        }

        .premium-page-shell--shire {
          background:
            radial-gradient(circle at 20% 22%, rgba(56, 92, 45, 0.42), transparent 34%),
            radial-gradient(circle at 100% 70%, rgba(200, 164, 93, 0.16), transparent 32%),
            linear-gradient(180deg, #050705 0%, #0b120b 48%, #030302 100%);
        }

        .premium-page-shell--shire .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent 38%, rgba(0, 0, 0, 0.58)),
            radial-gradient(circle at 36% 18%, rgba(97, 137, 78, 0.18), transparent 20%);
        }

        .premium-page-shell--shire .premium-shell__glow {
          background:
            radial-gradient(circle at 42% 20%, rgba(97, 137, 78, 0.22), transparent 18%),
            radial-gradient(circle at 68% 52%, rgba(200, 164, 93, 0.14), transparent 18%);
        }

        .premium-page-shell--parchment {
          background:
            radial-gradient(circle at 50% 0%, rgba(201, 164, 92, 0.28), transparent 34%),
            linear-gradient(180deg, #fbf6eb 0%, #f0e4cc 48%, #eadcc0 100%);
        }

        .premium-page-shell--parchment .premium-shell__atmosphere {
          background:
            linear-gradient(90deg, rgba(88, 62, 25, 0.12), transparent 38%, rgba(88, 62, 25, 0.16)),
            radial-gradient(circle at 50% 16%, rgba(255, 255, 255, 0.38), transparent 22%);
        }

        .premium-page-shell--parchment .premium-shell__glow {
          background:
            radial-gradient(circle at 50% 20%, rgba(201, 164, 92, 0.2), transparent 20%);
        }

        .premium-shell__content img {
          filter: saturate(1.035) contrast(1.025);
        }

        .premium-shell__content a,
        .premium-shell__content button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1),
            box-shadow 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .premium-shell__content a:hover,
          .premium-shell__content button:hover {
            transform: translateY(-1px);
            filter: brightness(1.07);
          }
        }

        @keyframes premiumShellReveal {
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

        @keyframes premiumShellBreath {
          from {
            opacity: 0.42;
            transform: scale(1);
          }

          to {
            opacity: 0.76;
            transform: scale(1.035);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-shell__content,
          .premium-shell__glow {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
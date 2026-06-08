"use client";

import type { ReactNode } from "react";
import PremiumPageShell from "./PremiumPageShell";

type PremiumCharacterVariant =
  | "obsidian"
  | "mordor"
  | "gondor"
  | "elven"
  | "shire"
  | "parchment";

type PremiumCharacterIntensity = "soft" | "standard" | "strong";

type PremiumCharacterShellProps = {
  children: ReactNode;
  variant?: PremiumCharacterVariant;
  intensity?: PremiumCharacterIntensity;
  className?: string;
};

export default function PremiumCharacterShell({
  children,
  variant = "obsidian",
  intensity = "standard",
  className = "",
}: PremiumCharacterShellProps) {
  return (
    <PremiumPageShell
      variant={variant}
      className={`premium-character-shell premium-character-shell--${intensity} ${className}`}
    >
      {children}

      <style jsx global>{`
        .premium-character-shell .premium-shell__content {
          animation-duration: 1.12s;
        }

        .premium-character-shell img {
          filter: saturate(1.04) contrast(1.035);
        }

        .premium-character-shell--soft img {
          filter: saturate(1.025) contrast(1.02);
        }

        .premium-character-shell--strong img {
          filter: saturate(1.065) contrast(1.05);
        }

        .premium-character-shell a,
        .premium-character-shell button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1),
            box-shadow 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .premium-character-shell a:hover,
          .premium-character-shell button:hover {
            transform: translateY(-1px);
            filter: brightness(1.08);
          }

          .premium-character-shell--strong a:hover,
          .premium-character-shell--strong button:hover {
            filter: brightness(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .premium-character-shell .premium-shell__content {
            animation: none !important;
          }
        }
      `}</style>
    </PremiumPageShell>
  );
}
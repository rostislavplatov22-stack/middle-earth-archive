"use client";

import PremiumPageShell from "./ui/PremiumPageShell";
import V112AragornResponsive from "./v112-aragorn-responsive";

export default function V121AragornDesktopPolish() {
  return (
    <PremiumPageShell variant="gondor" className="v121-aragorn-page">
      <V112AragornResponsive />

      <style jsx global>{`
        .v121-aragorn-page .premium-shell__content {
          animation-duration: 1.12s;
        }

        .v121-aragorn-page img {
          filter: saturate(1.045) contrast(1.035);
        }

        .v121-aragorn-page a,
        .v121-aragorn-page button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .v121-aragorn-page a:hover,
          .v121-aragorn-page button:hover {
            transform: translateY(-1px);
            filter: brightness(1.08);
          }
        }
      `}</style>
    </PremiumPageShell>
  );
}
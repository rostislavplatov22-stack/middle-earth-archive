"use client";

import PremiumPageShell from "./ui/PremiumPageShell";
import V112SauronResponsive from "./v112-sauron-responsive";

export default function V121SauronDesktopPolish() {
  return (
    <PremiumPageShell variant="mordor" className="v121-sauron-page">
      <V112SauronResponsive />

      <style jsx global>{`
        .v121-sauron-page .premium-shell__content {
          animation-duration: 1.15s;
        }

        .v121-sauron-page img {
          filter: saturate(1.06) contrast(1.045);
        }

        .v121-sauron-page a,
        .v121-sauron-page button {
          transition:
            transform 0.55s cubic-bezier(.16, 1, .3, 1),
            filter 0.55s cubic-bezier(.16, 1, .3, 1);
        }

        @media (hover: hover) and (pointer: fine) {
          .v121-sauron-page a:hover,
          .v121-sauron-page button:hover {
            transform: translateY(-1px);
            filter: brightness(1.09);
          }
        }
      `}</style>
    </PremiumPageShell>
  );
}
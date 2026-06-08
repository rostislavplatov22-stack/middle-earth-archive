"use client";

import PremiumCharacterShell from "./ui/PremiumCharacterShell";
import V112SauronResponsive from "./v112-sauron-responsive";

export default function V121SauronDesktopPolish() {
  return (
    <PremiumCharacterShell
      variant="mordor"
      intensity="strong"
      className="v121-sauron-page"
    >
      <V112SauronResponsive />
    </PremiumCharacterShell>
  );
}
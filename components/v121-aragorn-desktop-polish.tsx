"use client";

import PremiumCharacterShell from "./ui/PremiumCharacterShell";
import V112AragornResponsive from "./v112-aragorn-responsive";

export default function V121AragornDesktopPolish() {
  return (
    <PremiumCharacterShell
      variant="gondor"
      intensity="standard"
      className="v121-aragorn-page"
    >
      <V112AragornResponsive />
    </PremiumCharacterShell>
  );
}
"use client";

import Link from "next/link";

export default function V83IntegratedAnimatedEyeHome() {
  return (
    <main className="v83-home" aria-label="Middle-earth Archive integrated animated eye homepage">
      <div className="v83-stage">
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet="/v83/integrated-eye-home-static.webp" />
          <img
            src="/v83/integrated-eye-home-animated.webp"
            alt="Middle-earth Archive premium homepage with integrated animated Eye of Sauron"
            width="1672"
            height="941"
            className="v83-reference"
            decoding="async"
          />
        </picture>

        <Link className="v83-hotspot v83-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v83-hotspot v83-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v83-hotspot v83-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v83-hotspot v83-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v83-hotspot v83-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v83-hotspot v83-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v83-hotspot v83-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v83-hotspot v83-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v83-hotspot v83-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v83-hotspot v83-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v83-hotspot v83-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

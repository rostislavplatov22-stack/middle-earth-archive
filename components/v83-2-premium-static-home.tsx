"use client";

import Link from "next/link";

export default function V832PremiumStaticHome() {
  return (
    <main className="v832-home" aria-label="Middle-earth Archive premium static homepage">
      <div className="v832-stage">
        <img
          src="/v83-2/premium-home-static.webp"
          alt="Middle-earth Archive premium homepage"
          width="1672"
          height="941"
          className="v832-reference"
          decoding="async"
        />

        <Link className="v832-hotspot v832-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v832-hotspot v832-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v832-hotspot v832-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v832-hotspot v832-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v832-hotspot v832-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v832-hotspot v832-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v832-hotspot v832-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v832-hotspot v832-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v832-hotspot v832-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v832-hotspot v832-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v832-hotspot v832-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

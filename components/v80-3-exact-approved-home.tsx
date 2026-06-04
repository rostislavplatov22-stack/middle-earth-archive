"use client";

import Image from "next/image";
import Link from "next/link";

export default function V803ExactApprovedHome() {
  return (
    <main className="v803-home" aria-label="Middle-earth Archive approved premium home">
      <div className="v803-stage">
        <Image
          src="/v80-3/approved-home-option-2.png"
          alt="Middle-earth Archive premium catalog landing page"
          width={1792}
          height={1024}
          priority
          quality={100}
          className="v803-reference"
        />

        {/* Invisible hotspots keep the image exact while preserving navigation */}
        <Link className="v803-hotspot v803-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v803-hotspot v803-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v803-hotspot v803-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v803-hotspot v803-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v803-hotspot v803-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v803-hotspot v803-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v803-hotspot v803-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v803-hotspot v803-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v803-hotspot v803-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v803-hotspot v803-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v803-hotspot v803-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

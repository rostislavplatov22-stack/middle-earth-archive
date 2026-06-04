"use client";

import Image from "next/image";
import Link from "next/link";

export default function V804ExactApprovedHome4K() {
  return (
    <main className="v804-home" aria-label="Middle-earth Archive approved 4K premium home">
      <div className="v804-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v80-4/approved-home-option-2-mobile.webp" />
          <Image
            src="/v80-4/approved-home-option-2-4k.webp"
            alt="Middle-earth Archive premium catalog landing page"
            width={3840}
            height={2194}
            priority
            quality={100}
            className="v804-reference"
          />
        </picture>

        <Link className="v804-hotspot v804-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v804-hotspot v804-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v804-hotspot v804-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v804-hotspot v804-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v804-hotspot v804-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v804-hotspot v804-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v804-hotspot v804-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v804-hotspot v804-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v804-hotspot v804-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v804-hotspot v804-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v804-hotspot v804-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

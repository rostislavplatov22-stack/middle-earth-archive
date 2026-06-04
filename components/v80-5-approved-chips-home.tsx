"use client";

import Image from "next/image";
import Link from "next/link";

export default function V805ApprovedChipsHome() {
  return (
    <main className="v805-home" aria-label="Middle-earth Archive premium home with approved category chips">
      <div className="v805-stage">
        <Image
          src="/v80-5/approved-home-option-2-4k.webp"
          alt="Middle-earth Archive premium catalog landing page"
          width={3840}
          height={2194}
          priority
          quality={100}
          className="v805-reference"
        />

        <div className="v805-chip-mask" aria-hidden="true" />
        <Image
          src="/v80-5/approved-category-chips-option2.webp"
          alt=""
          width={1632}
          height={340}
          priority
          quality={100}
          className="v805-chip-strip"
        />

        <Link className="v805-hotspot v805-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v805-hotspot v805-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v805-hotspot v805-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v805-hotspot v805-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v805-hotspot v805-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v805-hotspot v805-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v805-hotspot v805-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v805-hotspot v805-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v805-hotspot v805-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v805-hotspot v805-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v805-hotspot v805-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function V8053CleanApprovedHome() {
  return (
    <main className="v8053-home" aria-label="Middle-earth Archive clean approved premium home">
      <div className="v8053-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v80-5-3/clean-approved-home-mobile.webp" />
          <Image
            src="/v80-5-3/clean-approved-home-4k.webp"
            alt="Middle-earth Archive premium catalog landing page"
            width={3840}
            height={2194}
            priority
            quality={100}
            className="v8053-reference"
          />
        </picture>

        <Link className="v8053-hotspot v8053-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v8053-hotspot v8053-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v8053-hotspot v8053-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v8053-hotspot v8053-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v8053-hotspot v8053-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v8053-hotspot v8053-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v8053-hotspot v8053-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v8053-hotspot v8053-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v8053-hotspot v8053-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v8053-hotspot v8053-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v8053-hotspot v8053-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

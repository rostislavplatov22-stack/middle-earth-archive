"use client";

import Link from "next/link";

export default function V831ModernPremiumEyeHome() {
  return (
    <main className="v831-home" aria-label="Middle-earth Archive modern premium animated eye homepage">
      <div className="v831-stage">
        <img
          src="/v83-1/integrated-eye-home-clean-static.webp"
          alt="Middle-earth Archive premium homepage with integrated Eye of Sauron"
          width="1672"
          height="941"
          className="v831-reference"
          decoding="async"
        />

        <div className="v831-eye-motion" aria-hidden="true">
          <span className="v831-eye-halo" />
          <span className="v831-eye-aperture" />
          <span className="v831-eye-heat" />
        </div>

        <Link className="v831-hotspot v831-hotspot-catalog" href="/catalog" aria-label="Open catalog" />
        <Link className="v831-hotspot v831-hotspot-characters" href="/catalog?type=characters" aria-label="Open characters" />
        <Link className="v831-hotspot v831-hotspot-realms" href="/catalog?type=realms" aria-label="Open realms" />
        <Link className="v831-hotspot v831-hotspot-artifacts" href="/catalog?type=artifacts" aria-label="Open artifacts" />
        <Link className="v831-hotspot v831-hotspot-chronicles" href="/catalog?type=chronicles" aria-label="Open chronicles" />
        <Link className="v831-hotspot v831-hotspot-maps" href="/catalog?type=maps" aria-label="Open maps" />
        <Link className="v831-hotspot v831-hotspot-ages" href="/catalog?type=ages" aria-label="Open ages" />
        <Link className="v831-hotspot v831-hotspot-palantir" href="/?search=open" aria-label="Open Palantír search" />
        <Link className="v831-hotspot v831-hotspot-gondor" href="/realms/gondor" aria-label="Open Gondor" />
        <Link className="v831-hotspot v831-hotspot-aragorn" href="/characters/aragorn" aria-label="Open Aragorn" />
        <Link className="v831-hotspot v831-hotspot-ring" href="/artifacts/the-one-ring" aria-label="Open The One Ring" />
      </div>
    </main>
  );
}

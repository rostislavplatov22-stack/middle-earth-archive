"use client";

import Link from "next/link";

export default function V94SauronReadablePage() {
  return (
    <main className="v94-sauron-page" aria-label="Sauron readable premium 4K dossier page">
      <div className="v94-sauron-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v94/sauron-variant-3-readable-2k.webp" />
          <source type="image/webp" srcSet="/v94/sauron-variant-3-readable-4k.webp" />
          <img
            src="/v94/sauron-variant-3-readable-4k.jpg"
            alt="Саурон — премиальное 4K досье персонажа с улучшенной читаемостью"
            width="3840"
            height="2161"
            className="v94-sauron-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v94-hotspot v94-home" href="/" aria-label="Главная" />
        <Link className="v94-hotspot v94-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v94-hotspot v94-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v94-hotspot v94-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

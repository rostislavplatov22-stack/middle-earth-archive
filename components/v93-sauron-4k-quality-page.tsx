"use client";

import Link from "next/link";

export default function V93Sauron4KQualityPage() {
  return (
    <main className="v93-sauron-page" aria-label="Sauron premium 4K dossier page">
      <div className="v93-sauron-stage">
        <picture>
          <source media="(max-width: 760px)" srcSet="/v100/sauron-catalog-card.webp" />
          <source type="image/webp" srcSet="/v100/sauron-catalog-card.webp" />
          <img
            src="/v100/sauron-catalog-card.webp"
            alt="Саурон — премиальное 4K досье персонажа"
            width="3840"
            height="2160"
            className="v93-sauron-reference"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <Link className="v93-hotspot v93-home" href="/" aria-label="Главная" />
        <Link className="v93-hotspot v93-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v93-hotspot v93-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v93-hotspot v93-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

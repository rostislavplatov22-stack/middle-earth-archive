"use client";

import Link from "next/link";

export default function V92SauronVariant3Approved() {
  return (
    <main className="v92-sauron-page" aria-label="Sauron selected premium dossier variant 3">
      <div className="v92-sauron-stage">
        <img
          src="/v92/sauron-variant-3-approved.webp"
          alt="Саурон — премиальное досье персонажа, выбранный вариант 3"
          width="1672"
          height="941"
          className="v92-sauron-reference"
          decoding="async"
        />

        <Link className="v92-hotspot v92-home" href="/" aria-label="Главная" />
        <Link className="v92-hotspot v92-characters" href="/catalog?type=characters" aria-label="Каталог персонажей" />
        <Link className="v92-hotspot v92-back" href="/catalog?type=characters" aria-label="Назад к каталогу персонажей" />
        <Link className="v92-hotspot v92-palantir" href="/?search=open" aria-label="Открыть Палантир" />
      </div>
    </main>
  );
}

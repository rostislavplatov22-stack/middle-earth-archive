"use client";

import Link from "next/link";

const fragments = [
  "Создал Ахтар, обруч Средиземья и стал его главным стражем в Первую эпоху.",
  "После падения Моргота вернулся и начал тайно плести свою власть в Средиземье.",
  "Второй век — тайно выковал Кольца Власти и Единое Кольцо в Ородруине.",
  "Третий век — повторно проявился в Дол Гулдуре и вернул себе крепость Мордора.",
];

export default function V90RealSauronLayout() {
  return (
    <main className="v90-page" aria-label="Sauron premium dossier">
      <aside className="v90-rail" aria-label="Dossier side navigation">
        <Link href="/catalog?type=characters" className="v90-back-mini" aria-label="Back to character catalog">
          Назад
        </Link>
        <div className="v90-rail-icons" aria-hidden="true">
          <span>◉</span>
          <span>◇</span>
          <span>✦</span>
          <span>✧</span>
          <span>✺</span>
          <span>✹</span>
        </div>
      </aside>

      <section className="v90-visual">
        <img
          src="/v90/sauron-correct-visual.webp"
          alt="Саурон в чёрной броне на фоне башни и Ока"
          width="688"
          height="915"
          className="v90-visual-image"
          decoding="async"
        />
        <div className="v90-visual-caption">
          <span>Тень</span>
          <strong>Владыка Мордора</strong>
        </div>
      </section>

      <section className="v90-content">
        <header className="v90-header">
          <Link href="/" className="v90-brand" aria-label="Home">
            <span>Архив Средиземья</span>
            <small>Премиум коллекция знаний</small>
          </Link>

          <nav className="v90-nav" aria-label="Main navigation">
            <Link href="/catalog">Архив</Link>
            <Link href="/catalog?type=characters">Персонажи</Link>
            <Link href="/catalog?type=realms">Народы</Link>
            <Link href="/catalog?type=artifacts">Предметы</Link>
            <Link href="/catalog?type=chronicles">Хроники</Link>
          </nav>

          <Link href="/?search=open" className="v90-black-label">
            Black Label
          </Link>
        </header>

        <section className="v90-hero">
          <p className="v90-kicker">Досье персонажа · Black Label</p>
          <h1>Саурон</h1>
          <p className="v90-epithet">Тёмный Лорд</p>
          <p className="v90-summary">
            Воля к господству, скованная хитростью, страхом и стремлением к абсолютному контролю.
          </p>
        </section>

        <section className="v90-stat-grid" aria-label="Character metadata">
          <article>
            <span>Раса</span>
            <strong>Майя</strong>
          </article>
          <article>
            <span>Эпоха</span>
            <strong>Второй век — Третий век</strong>
          </article>
          <article>
            <span>Роль</span>
            <strong>Владыка Мордора</strong>
          </article>
          <article>
            <span>Архивный класс</span>
            <strong>Теневая запись</strong>
          </article>
        </section>

        <section className="v90-quote-band">
          <blockquote>
            Я вложу в Кольцо свою волю и всю свою силу, и все народы подчинятся моей власти.
          </blockquote>
          <span>— Саурон</span>
        </section>

        <section className="v90-lower">
          <article className="v90-card v90-fragments">
            <p>Фрагменты истории</p>
            <ul>
              {fragments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/catalog?type=chronicles">Подробнее о жизненном пути →</Link>
          </article>

          <article className="v90-card v90-era">
            <p>Эпоха и влияние</p>
            <div className="v90-era-orbit">
              <span>II</span>
              <i />
              <span>III</span>
            </div>
            <div className="v90-era-labels">
              <small>Второй век<br />создание Колец</small>
              <small>Третий век<br />возвращение формы</small>
            </div>
            <Link href="/catalog?type=ages">Хронология событий →</Link>
          </article>

          <article className="v90-card v90-notes">
            <p>Архивные заметки</p>
            <h2>Воля, страх и порядок</h2>
            <p>
              Саурон — одна из величайших угроз, с которыми когда-либо сталкивался свободный народ.
              Его сила не только в армии, но и в способности превращать обещание порядка в форму подчинения.
            </p>
            <small>— Лоремастер Архива</small>
          </article>
        </section>

        <footer className="v90-footer">
          <span />
          <p>Знание — единственное оружие против тьмы</p>
          <span />
        </footer>
      </section>
    </main>
  );
}

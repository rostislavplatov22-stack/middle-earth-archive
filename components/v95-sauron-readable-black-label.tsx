"use client";

import Link from "next/link";

const timeline = [
  "Служил Аулэ и познал искусство формы, порядка и совершенной структуры.",
  "После падения Моргота вернулся тайно и начал восстанавливать власть в Средиземье.",
  "Во Вторую эпоху обманом участвовал в создании Колец Власти и выковал Единое Кольцо.",
  "В Третью эпоху вернул себе силу, крепость Мордора и страх перед своей тенью.",
];

export default function V95SauronReadableBlackLabel() {
  return (
    <main className="v95-page" aria-label="Саурон — читаемое премиальное досье">
      <aside className="v95-rail" aria-label="Боковая навигация">
        <div className="v95-eye-mark">◉</div>
        <div className="v95-roman">
          <span>I</span>
          <span>II</span>
          <span>III</span>
          <span>IV</span>
          <span>V</span>
          <span>VI</span>
        </div>
        <Link href="/catalog?type=characters">Назад</Link>
      </aside>

      <section className="v95-visual">
        <picture>
          <source type="image/webp" srcSet="/v100/sauron-catalog-card.webp" />
          <img
            src="/v100/sauron-catalog-card.webp"
            alt="Саурон в чёрной броне на фоне башни и Ока"
            width="1800"
            height="2394"
            className="v95-image"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        <div className="v95-visual-label">
          <span>Тень</span>
          <strong>Владыка Мордора</strong>
        </div>
      </section>

      <section className="v95-content">
        <header className="v95-header">
          <Link href="/" className="v95-brand">
            <span>Архив Средиземья</span>
            <small>Премиум коллекция знаний</small>
          </Link>

          <nav className="v95-nav" aria-label="Главная навигация">
            <Link href="/catalog?type=characters">Персонажи</Link>
            <Link href="/catalog?type=realms">Народы</Link>
            <Link href="/catalog?type=locations">Места</Link>
            <Link href="/catalog?type=artifacts">Предметы</Link>
            <Link href="/catalog?type=chronicles">Хроники</Link>
          </nav>

          <Link href="/?search=open" className="v95-label-button">Black Label</Link>
        </header>

        <section className="v95-title">
          <p>Досье персонажа · Black Label</p>
          <h1>Саурон</h1>
          <h2>Тёмный Лорд</h2>
          <span>
            Воля к господству, скованная хитростью, страхом и стремлением к абсолютному контролю.
          </span>
        </section>

        <section className="v95-meta" aria-label="Краткие сведения">
          <article>
            <i>✦</i>
            <div>
              <span>Раса</span>
              <strong>Майя</strong>
            </div>
          </article>
          <article>
            <i>♜</i>
            <div>
              <span>Роль</span>
              <strong>Владыка Мордора</strong>
            </div>
          </article>
          <article>
            <i>☉</i>
            <div>
              <span>Эпоха</span>
              <strong>Второй век — Третий век</strong>
            </div>
          </article>
          <article>
            <i>◌</i>
            <div>
              <span>Архивный класс</span>
              <strong>Теневая запись</strong>
            </div>
          </article>
        </section>

        <section className="v95-quote">
          <blockquote>
            «Я вложу в Кольцо свою волю и всю свою силу, и все народы подчинятся моей власти.»
          </blockquote>
          <span>— Саурон</span>
        </section>

        <section className="v95-grid">
          <article className="v95-card v95-timeline">
            <p>Фрагменты истории</p>
            <h3>Путь к власти</h3>
            <ul>
              {timeline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/catalog?type=chronicles">Подробнее о жизненном пути →</Link>
          </article>

          <article className="v95-card v95-era">
            <p>Эпоха и влияние</p>
            <h3>От колец к войне</h3>
            <div className="v95-orbit">
              <span>II</span>
              <i />
              <span>III</span>
            </div>
            <div className="v95-era-text">
              <small>Второй век<br />создание Колец</small>
              <small>Третий век<br />возвращение Тени</small>
            </div>
            <Link href="/catalog?type=ages">Хронология событий →</Link>
          </article>

          <article className="v95-card v95-notes">
            <p>Архивные заметки</p>
            <h3>Порядок, страх и воля</h3>
            <span>
              Саурон — одна из величайших угроз, с которыми когда-либо сталкивался свободный народ.
              Его мощь не только в войсках, но и в способности превращать обещание порядка в форму подчинения.
            </span>
            <em>— Лоремастер Архива</em>
          </article>
        </section>

        <footer className="v95-footer">
          <span />
          <p>Знание — единственное оружие против тьмы</p>
          <span />
        </footer>
      </section>
    </main>
  );
}

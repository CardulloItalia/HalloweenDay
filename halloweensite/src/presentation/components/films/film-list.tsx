import type { Film } from "@/domain/site-content";

interface FilmListProps {
  films: Film[];
  title: string;
}

export default function FilmList({ films, title }: FilmListProps) {
  return (
    <section className="films-section" id="entertainment">
      <h2 className="section-title">{title}</h2>
      <div className="films-list">
        {films.map((film) => (
          <article className="film-card" key={film.id}>
            <img className="film-art" src={film.posterPath} alt={film.posterAlt} />
            <div className="film-copy">
              <h3>{film.title}</h3>
              <p>{film.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

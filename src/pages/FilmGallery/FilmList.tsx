import React from 'react';

function FilmList({ films, onFilmSelect }) {
  return (
    <div className="film-list">
      {films.map((film, index) => (
        <div
          key={index}
          className="film-item"
          onClick={() => onFilmSelect(film)}
        >
          {film.name}
        </div>
      ))}
    </div>
  );
}

export default FilmList;

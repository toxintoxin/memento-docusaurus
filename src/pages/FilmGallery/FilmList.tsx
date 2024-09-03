import React from 'react';

// 胶卷数据，包括显示名称和 ID
const films = [
  { id: '0001', name: 'Trip to Paris (2023)', description: 'Memories from my trip to Paris' },
  { id: '0002', name: 'Summer Vacation', description: 'Summer 2023 with friends at the beach' },
  { id: '0003', name: 'Family Reunion', description: 'Family reunion after a long time' },
];

function FilmList({ onSelectFilm }) {
  return (
    <div className="film-list">
      {films.map(film => (
        <div key={film.id} className="film-card" onClick={() => onSelectFilm(film.id)}>
          <h3>{film.name}</h3>
          <p>{film.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FilmList;

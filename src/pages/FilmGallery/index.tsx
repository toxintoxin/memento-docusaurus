import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FilmList from './FilmList';
import Gallery from './Gallery';
import { filmData, FilmData } from './film.data';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

function generateImagePaths(folder: string, count: number = 36): string[] {
  return Array.from({ length: count }, (_, i) => useBaseUrl(`/img/FilmGallerySource/${folder}/${String(i + 1).padStart(2, '0')}.jpg`));
}

function FilmGalleryPage() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  console.log('Selected Film:', selectedFilm); // 调试输出

  return (
    <Layout title="FilmGallery">
      <div className="gallery-page">
        <FilmList onSelectFilm={setSelectedFilm} />
        <Gallery filmId={selectedFilm} />
      </div>
    </Layout>
  );
}

export default FilmGalleryPage;

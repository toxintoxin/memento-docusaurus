import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FilmList from './FilmList';
import Gallery from './Gallery';
import { filmData } from './film.data';
import './styles.css';

function GalleryPage() {
  const [selectedFilm, setSelectedFilm] = useState(filmData[0]);

  console.log('Selected Film:', selectedFilm); // 调试输出

  return (
    <Layout title="FilmGallery">

      <div>
        <h1>测试图片显示</h1>
        <img src="/FilmGallerySource/0001/01.jpg" alt="测试图片" />
      </div>

      <div className="gallery-page">
        <FilmList films={filmData} onFilmSelect={setSelectedFilm} />
        <Gallery images={selectedFilm.images} />
      </div>
    </Layout>
  );
}

export default GalleryPage;

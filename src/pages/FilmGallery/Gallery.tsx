import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Gallery({ filmId }) {
  if (!filmId) {
    return <div className="gallery">Please select a film to view images.</div>;
  }

  // 定义一个图片路径生成函数
  const getImageUrl = (filmId, imageNumber) => {
    const imageName = `${filmId}_${String(imageNumber).padStart(2, '0')}`;
    return useBaseUrl(`/source-FilmGallery/${filmId}/${imageName}.jpg`);
  };

  // 生成图片路径
  const images = [];
  for (let i = 1; i <= 36; i++) {
    images.push(getImageUrl(filmId, i));
  }

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Film ${filmId} Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;

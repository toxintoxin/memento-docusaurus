import React from 'react';

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`照片 ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;

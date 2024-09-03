import useBaseUrl from '@docusaurus/useBaseUrl';

interface FilmData {
  id: string;
  name: string;
  images: string[];
}

export const films: FilmData[] = [
  { id: '0001', name: 'Film 0001', images: generateImagePaths('0001') },
  { id: '0002', name: 'Film 0002', images: generateImagePaths('0002') },
  { id: '0003', name: 'Film 0003', images: generateImagePaths('0003') },
];

function generateImagePaths(filmId: string): string[] {
  const images: string[] = [];
  for (let i = 1; i <= 36; i++) {
    const imageName = `${filmId}_${String(i).padStart(2, '0')}.jpg`;
    images.push(useBaseUrl(`/source-FilmGallery/${filmId}/${imageName}`));
  }
  return images;
}

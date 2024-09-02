interface FilmData {
  name: string;
  images: string[];
}

function generateImagePaths(folder: string, count: number = 36): string[] {
  const basePath = `/FilmGallerySource/${folder}/`;
  return Array.from({ length: count }, (_, i) => `${basePath}${String(i + 1).padStart(2, '0')}.jpg`);
}

export const filmData: FilmData[] = [
  {
    name: 'Kodak Portra 400 - Nikon F3 - 2024-09-01',
    images: generateImagePaths('0001'),  // 自动生成0001文件夹中的36张图片路径
  },
  {
    name: 'Fujifilm Superia 200 - Canon AE-1 - 2024-08-15',
    images: generateImagePaths('0002'),  // 自动生成0002文件夹中的36张图片路径
  },
  // 更多胶卷数据...
];

interface Photo {
  id: string;
  created_at: string; // i.e. 2024-03-14T16:19:33Z
  width: number;
  height: number;
  urls: {
    raw: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

interface SearchPhotos {
  total: number;
  total_pages: number;
  results: Photo[];
}

interface DetailPhoto extends Photo {
  tags: { title: string }[];
  downloads: number;
}

export type RandomPhotosResp = Photo[];
export type SearchPhotosResp = SearchPhotos;
export type DetailPhotoResp = DetailPhoto;

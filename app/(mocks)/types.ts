interface MockError {
  errors: string[];
}

export interface MockPhoto {
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

export interface MockSearchPhotos {
  total: number;
  total_pages: number;
  results: MockPhoto[];
}

export interface MockDetailPhoto extends MockPhoto {
  tags: { title: string }[];
  downloads: number;
}

export type RandomPhotosResponseBody = MockError | MockPhoto[];
export type SearchPhotosResponseBody = MockError | MockSearchPhotos;
export type DetailPhotoResponseBody = MockError | MockDetailPhoto;

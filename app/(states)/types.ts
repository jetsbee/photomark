export interface Photo {
  id: string;
  url: string;
}

export interface DetailPhoto {
  owner: string;
  url: string;
  width: number;
  height: number;
  created_at: string;
  download_cnt: number;
  keyword_tags: string[];
}

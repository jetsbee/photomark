import axios, { AxiosError, AxiosResponse } from "axios";
import { DetailPhotoResp, RandomPhotosResp, SearchPhotosResp } from "./types";

const API_ENDPOINT = "https://api.unsplash.com/";

const RANDOM_PHOTOS_PATH = "/photos/random";
const SEARCH_PHOTOS_PATH = "/search/photos";
const DETAIL_PHOTO_PATH = "/photos";

const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const client = (() => {
  const instance = axios.create({
    baseURL: API_ENDPOINT,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  instance.interceptors.response.use(
    (resp: AxiosResponse): AxiosResponse => resp,
    (err: AxiosError): Promise<AxiosError> => {
      if (err.response) {
        // Server responded with non 2xx code
        console.log("[LOG:Axios]err.response.data", err.response.data);
      } else if (err.request) {
        // Requested but no response received
        console.log("[LOG:Axios]err.request", err.request);
      } else {
        // Error setting up request
        console.log("[LOG:Axios]err.message", err.message);
      }

      return Promise.reject(err);
    }
  );

  return instance;
})();

export const getRandomPhotos = async (): Promise<RandomPhotosResp> => {
  const { data } = await client.get(RANDOM_PHOTOS_PATH, {
    params: { count: 20 },
  });

  return data;
};

export const getSearchPhotos = async (
  query: string,
  page: number
): Promise<SearchPhotosResp> => {
  const { data } = await client.get(SEARCH_PHOTOS_PATH, {
    params: { per_page: 20, query, page },
  });

  return data;
};

export const getDetailPhoto = async (id: string): Promise<DetailPhotoResp> => {
  const { data } = await client.get(`${DETAIL_PHOTO_PATH}/${id}`);

  return data;
};

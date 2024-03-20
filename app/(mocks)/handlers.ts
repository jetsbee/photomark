import { DefaultBodyType, http, HttpResponse, PathParams } from "msw";
import {
  getMockDetailPhoto,
  getMockRandomPhotos,
  getMockSearchPhotos,
} from "./mockData";
import {
  DetailPhotoResponseBody,
  RandomPhotosResponseBody,
  SearchPhotosResponseBody,
} from "./types";

const API_ENDPOINT = "https://api.unsplash.com";
const RANDOM_PHOTOS_PATH = `${API_ENDPOINT}/photos/random`;
const SEARCH_PHOTOS_PATH = `${API_ENDPOINT}/search/photos`;
const DETAIL_PHOTO_PATH = `${API_ENDPOINT}/photos/:id`;

const MOCK_ACCESS_KEY = "1234";
const MOCK_NON_EXIST_ID = "0000";

const mockAuth = (headers: Headers) => {
  const [authType = "", clientId = ""] = (
    headers.get("Authorization") ?? ""
  ).split(" ");

  if (authType === "Client-ID" && clientId === MOCK_ACCESS_KEY) return;

  return HttpResponse.json(
    {
      errors: ["OAuth error: The access token is invalid"],
    },
    {
      status: 401,
    }
  );
};

export const handlers = [
  http.get<
    PathParams,
    DefaultBodyType,
    RandomPhotosResponseBody,
    typeof RANDOM_PHOTOS_PATH
  >(RANDOM_PHOTOS_PATH, ({ request: { headers } }) => {
    const authErrRes = mockAuth(headers);
    if (authErrRes) return authErrRes;

    return HttpResponse.json(getMockRandomPhotos());
  }),

  http.get<
    PathParams,
    DefaultBodyType,
    SearchPhotosResponseBody,
    typeof SEARCH_PHOTOS_PATH
  >(SEARCH_PHOTOS_PATH, ({ request: { headers, url } }) => {
    const authErrRes = mockAuth(headers);
    if (authErrRes) return authErrRes;

    const urlObj = new URL(url);
    const page = +(urlObj.searchParams.get("page") ?? NaN);
    return HttpResponse.json(getMockSearchPhotos(page));
  }),

  http.get<
    PathParams,
    DefaultBodyType,
    DetailPhotoResponseBody,
    typeof DETAIL_PHOTO_PATH
  >(DETAIL_PHOTO_PATH, ({ request: { headers }, params }) => {
    const authErrRes = mockAuth(headers);
    if (authErrRes) return authErrRes;

    const { id } = params;
    if (id === MOCK_NON_EXIST_ID)
      return HttpResponse.json(
        { errors: ["Couldn't find Photo"] },
        { status: 404 }
      );

    return HttpResponse.json(getMockDetailPhoto());
  }),
];

"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { DetailPhoto } from "../types";
import { getDetailPhoto } from "./(_networking)/api";
import { DetailPhotoResp } from "./(_networking)/types";
import { getDetailPhotoQk } from "./(_react-query)/queryKeys";

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useDetailPhotoRespQuery = <T extends any = DetailPhotoResp>(
  id: string,
  select?: (data: DetailPhotoResp) => T,
  enabled?: boolean
) =>
  useQuery({
    queryKey: getDetailPhotoQk(id),
    queryFn: () => getDetailPhoto(id),
    select,
    enabled,
  });

export const useDetailPhotos = (id: string) =>
  useDetailPhotoRespQuery(
    id,
    useCallback(
      ({
        created_at,
        width,
        height,
        urls: { raw: url },
        user: { name: owner },
        downloads: download_cnt,
        tags,
      }: DetailPhotoResp): DetailPhoto => ({
        owner,
        url,
        width,
        height,
        created_at,
        download_cnt,
        keyword_tags: tags.map((tag) => tag.title),
      }),
      []
    )
  );

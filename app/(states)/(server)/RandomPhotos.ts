"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import type { Photo } from "../types";
import { getRandomPhotos } from "./(_networking)/api";
import { RandomPhotosResp } from "./(_networking)/types";
import { RANDOM_PHOTOS_QK } from "./(_react-query)/queryKeys";

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useRandomPhotosRespQuery = <T extends any = RandomPhotosResp>(
  select?: (data: RandomPhotosResp) => T,
  enabled?: boolean
) =>
  useQuery({
    queryKey: RANDOM_PHOTOS_QK,
    queryFn: getRandomPhotos,
    select,
    enabled,
  });

export const useRandomPhotos = () =>
  useRandomPhotosRespQuery(
    useCallback(
      (data: RandomPhotosResp): Photo[] =>
        data.map(({ id, urls: { regular } }) => {
          return {
            id,
            url: regular,
          };
        }),
      []
    )
  );

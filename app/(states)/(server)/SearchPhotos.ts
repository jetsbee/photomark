"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import type { Photo } from "../types";
import { getSearchPhotos } from "./(_networking)/api";
import { SearchPhotosResp } from "./(_networking)/types";
import { getSearchPhotosInfQk } from "./(_react-query)/queryKeys";

// typing - ref. https://github.com/TanStack/query/discussions/1195#discussioncomment-110896
const useSearchPhotosRespInfiniteQuery = <
  T extends any = InfiniteData<SearchPhotosResp>
>(
  query: string,
  select?: (data: InfiniteData<SearchPhotosResp>) => T,
  enabled?: boolean
) =>
  useInfiniteQuery({
    queryKey: getSearchPhotosInfQk(query),
    queryFn: ({ pageParam }) => getSearchPhotos(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.total_pages <= pages.length) return;

      return pages.length + 1;
    },
    select,
    enabled,
  });

export const useInfiniteSearchPhotos = (query: string) =>
  useSearchPhotosRespInfiniteQuery(
    query,
    useCallback(
      (data: InfiniteData<SearchPhotosResp>) => ({
        pages: data.pages.map((photos): Photo[] => {
          return photos.results.map((res) => ({
            id: res.id,
            url: res.urls.regular,
          }));
        }),

        pageParams: data.pageParams,
      }),
      []
    ),
    !!query
  );

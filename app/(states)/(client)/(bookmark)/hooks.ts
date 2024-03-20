"use client";

import { useContext } from "react";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { BookmarkContext } from "./context";
import { BookmarkState, bookmarkStoreWithoutInitProps } from "./store";

const useBookmarkStoreWithOrWithoutProvider = <T>(
  selector: (state: BookmarkState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T => {
  const store = useContext(BookmarkContext) ?? bookmarkStoreWithoutInitProps;
  return useStoreWithEqualityFn(store, selector, equalityFn);
};
// Ref 1. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#extracting-context-logic-into-a-custom-hook
// Ref 2. https://github.com/vercel/next.js/blob/canary/examples/with-zustand/src/lib/store.ts#L29

export const useBookmarkStore = () =>
  useBookmarkStoreWithOrWithoutProvider((_) => _);

import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface BookmarkProps {
  bookmark: {
    [id: string]: {
      url: string;
    };
  };
}

export interface BookmarkState extends BookmarkProps {
  addBookmark: (id: string, url: string) => void;
  removeBookmark: (id: string) => void;
  isInBookmark: (id: string) => boolean;
  reset: () => void;
}

export const createBookmarkStore = (initProps?: Partial<BookmarkProps>) => {
  const DEFAULT_PROPS: BookmarkProps = {
    bookmark: {},
  };

  return createStore<BookmarkState>()((set, get) => {
    storeResetFns.add(() => set(DEFAULT_PROPS));

    return {
      ...DEFAULT_PROPS,
      ...initProps,
      addBookmark: (id, url) =>
        set(({ bookmark }) => ({
          bookmark: { ...bookmark, [id]: { url } },
        })),

      removeBookmark: (id) =>
        set(({ bookmark }) => {
          const { [id]: removedItem, ...rest } = bookmark;
          return { bookmark: rest };
        }),

      isInBookmark: (id) => get().bookmark.hasOwnProperty(id),

      reset: () => set(DEFAULT_PROPS),
    };
  });
};

export type BookmarkStore = ReturnType<typeof createBookmarkStore>;

export const bookmarkStoreWithoutInitProps = createBookmarkStore();

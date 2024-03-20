import { createStore } from "zustand/vanilla";
import { storeResetFns } from "../(_zustand)/zustandWithResetFns";

export interface SearchProps {
  searchText: string;
}

export interface SearchState extends SearchProps {
  setSearchText: (text: string) => void;
  reset: () => void;
}

export const createSearchStore = (initProps?: Partial<SearchProps>) => {
  const DEFAULT_PROPS: SearchProps = {
    searchText: "",
  };

  return createStore<SearchState>()((set) => {
    storeResetFns.add(() => set(DEFAULT_PROPS));

    return {
      ...DEFAULT_PROPS,
      ...initProps,
      setSearchText: (text) => set({ searchText: text }),
      reset: () => set(DEFAULT_PROPS),
    };
  });
};

export type SearchStore = ReturnType<typeof createSearchStore>;

export const searchStoreWithoutInitProps = createSearchStore();

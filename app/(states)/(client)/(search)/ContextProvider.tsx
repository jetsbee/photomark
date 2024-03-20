import { useRef } from "react";
import { SearchContext } from "./context";
import {
  SearchProps,
  SearchStore,
  createSearchStore,
  searchStoreWithoutInitProps,
} from "./store";

// Provider wrapper
type SearchStoreProviderProps = React.PropsWithChildren<SearchProps>;

export const SearchStoreProvider = ({
  children,
  ...props
}: SearchStoreProviderProps) => {
  const storeRef = useRef<SearchStore>();
  if (!storeRef.current) {
    (searchStoreWithoutInitProps as any).persist?.clearStorage();
    storeRef.current = createSearchStore(props);
  }
  return (
    <SearchContext.Provider value={storeRef.current}>
      {children}
    </SearchContext.Provider>
  );
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#wrapping-the-context-provider

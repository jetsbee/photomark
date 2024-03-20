import { useRef } from "react";
import { BookmarkContext } from "./context";
import {
  BookmarkProps,
  BookmarkStore,
  bookmarkStoreWithoutInitProps,
  createBookmarkStore,
} from "./store";

// Provider wrapper
type BookmarkStoreProviderProps = React.PropsWithChildren<BookmarkProps>;

export const BookmarkStoreProvider = ({
  children,
  ...props
}: BookmarkStoreProviderProps) => {
  const storeRef = useRef<BookmarkStore>();
  if (!storeRef.current) {
    (bookmarkStoreWithoutInitProps as any).persist?.clearStorage();
    storeRef.current = createBookmarkStore(props);
  }
  return (
    <BookmarkContext.Provider value={storeRef.current}>
      {children}
    </BookmarkContext.Provider>
  );
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/initialize-state-with-props.md#wrapping-the-context-provider

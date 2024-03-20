import { useBookmarkStore } from "@/app/(states)/(client)/(bookmark)/hooks";

export const useBookmark = (id: string, url: string) => {
  const { isInBookmark, addBookmark, removeBookmark } = useBookmarkStore();

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(id);
    } else {
      addBookmark(id, url);
    }
  };

  const isBookmarked = isInBookmark(id);
  return { isBookmarked, toggleBookmark };
};

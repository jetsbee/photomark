import { useBookmarkStore } from "@/app/(states)/(client)/(bookmark)/hooks";
import { Photo } from "@/app/(states)/types";

export const useBookmarkedPhoto = (): Photo[] => {
  const { bookmark } = useBookmarkStore();
  const photos = Object.entries(bookmark).map(([id, { url }]) => ({ id, url }));

  return photos;
};

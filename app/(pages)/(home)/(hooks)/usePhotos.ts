import { useSearchStore } from "@/app/(states)/(client)/(search)/hooks";
import { useRandomPhotos } from "@/app/(states)/(server)/RandomPhotos";
import { useInfiniteSearchPhotos } from "@/app/(states)/(server)/SearchPhotos";
import { useEffect } from "react";

export const usePhotos = () => {
  const { data: randomPhotos } = useRandomPhotos();
  const { searchText, setSearchText } = useSearchStore();
  const { data } = useInfiniteSearchPhotos(searchText);

  const searchPhotos = data?.pages.flatMap((photos) => photos);

  useEffect(() => {
    return () => {
      setSearchText("");
    };
  }, [setSearchText]);

  return !!searchPhotos ? searchPhotos : randomPhotos;
};

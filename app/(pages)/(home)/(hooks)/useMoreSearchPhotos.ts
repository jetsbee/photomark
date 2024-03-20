import { useSearchStore } from "@/app/(states)/(client)/(search)/hooks";
import { useInfiniteSearchPhotos } from "@/app/(states)/(server)/SearchPhotos";

export const useMoreSearchPhotos = () => {
  const { searchText } = useSearchStore();
  const { hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteSearchPhotos(searchText);

  const isReadyToSearchMore = !isFetchingNextPage && hasNextPage;

  const requestMoreSearchPhotos = () => {
    if (isReadyToSearchMore) {
      fetchNextPage();
    }
  };

  return { isReadyToSearchMore, requestMoreSearchPhotos };
};

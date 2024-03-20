"use client";

import { PhotoList } from "@/app/(components)/(PhotoList)/PhotoList";
import { SearchForm } from "@/app/(components)/(SearchForm)/SearchForm";
import { useIntersectionObserver } from "./(hooks)/useIntersectionObserver";
import { useMoreSearchPhotos } from "./(hooks)/useMoreSearchPhotos";
import { usePhotos } from "./(hooks)/usePhotos";

export default function Home() {
  const photos = usePhotos();
  const { isReadyToSearchMore, requestMoreSearchPhotos } =
    useMoreSearchPhotos();
  const targetRef = useIntersectionObserver(requestMoreSearchPhotos);

  const propsForPhotoList = {
    photos: photos ?? [],
  };

  return (
    <main>
      <SearchForm />
      <PhotoList {...propsForPhotoList} />
      {isReadyToSearchMore && <div ref={targetRef} />}
    </main>
  );
}

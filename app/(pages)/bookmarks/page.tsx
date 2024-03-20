"use client";

import { PhotoList } from "@/app/(components)/(PhotoList)/PhotoList";
import Link from "next/link";
import { useBookmarkedPhoto } from "./(hooks)/useBookmarkedPhoto";
import styles from "./styles.module.css";

export default function Bookmarks() {
  const photos = useBookmarkedPhoto();
  const propsForPhotoList = { photos };

  return (
    <main>
      {photos.length === 0 && (
        <p className={styles["p"]}>
          Go grab your favorite photos on{" "}
          <Link href="/">
            <span className={styles["span"]}>main page!</span>
          </Link>
        </p>
      )}
      <PhotoList {...propsForPhotoList} />
    </main>
  );
}

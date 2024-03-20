import Image from "next/image";
import { createPortal } from "react-dom";
import { BookmarkControl } from "../(BookmarkControl)/BookmarkControl";
import { ImageDetailModal } from "../(ImageDetailModal)/ImageDetailModal";
import { useShowDetail } from "./(hooks)/useShowDetail";
import { Props } from "./PhotoItem.types";
import styles from "./styles.module.css";

export const PhotoItem = ({ id, url }: Props) => {
  const { showDetail, closeDetail, isShowDetail } = useShowDetail();

  const propsForBookmarkControl = {
    id,
    url,
  };

  const BookmarkBtn = () => <BookmarkControl {...propsForBookmarkControl} />;

  const propsForPhotoItem = {
    onClick: showDetail,
  };

  const propsForImageDetailModal = {
    id,
    BookmarkBtn,
    onClose: closeDetail,
  };

  return (
    <section {...propsForPhotoItem} className={styles["photo-item-container"]}>
      <div className={styles["image-container"]}>
        <Image
          className={styles["image"]}
          src={url}
          alt={id}
          fill={true}
          sizes="152px"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className={styles["bookmark-control-container"]}>
        <BookmarkBtn />
      </div>
      {isShowDetail &&
        createPortal(
          <ImageDetailModal {...propsForImageDetailModal} />,
          document.body
        )}
    </section>
  );
};

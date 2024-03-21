import { PhotoItem } from "../(PhotoItem)/PhotoItem";
import { Props } from "./PhotoList.types";
import styles from "./styles.module.css";

export const PhotoList = ({ photos }: Props) => {
  return (
    <ul className={styles["ul"]}>
      {photos.map(({ id, url }) => {
        const propsForPhotoItem = {
          id,
          url,
        };

        return (
          <li key={id} className={styles["li"]}>
            <PhotoItem {...propsForPhotoItem} />
          </li>
        );
      })}
    </ul>
  );
};

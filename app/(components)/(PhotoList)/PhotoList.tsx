import { PhotoItem } from "../(PhotoItem)/PhotoItem";
import { Props } from "./PhotoList.types";
import styles from "./styles.module.css";

export const PhotoList = ({ photos }: Props) => {
  return (
    <ul className={styles["grid-container"]}>
      {photos.map(({ id, url }) => {
        const propsForPhotoItem = {
          id,
          url,
        };

        return (
          <li key={id} className={styles["flex-container"]}>
            <PhotoItem {...propsForPhotoItem} />
          </li>
        );
      })}
    </ul>
  );
};

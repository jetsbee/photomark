import { useBookmark } from "./(hooks)/useBookmark";
import { Props } from "./BookmarkControl.types";
import styles from "./styles.module.css";

export const BookmarkControl = ({ id, url }: Props) => {
  const { isBookmarked, toggleBookmark } = useBookmark(id, url);

  const propsForButton = {
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.stopPropagation();
      toggleBookmark();
    },
  };
  return (
    <button {...propsForButton} className={styles["button"]}>
      {isBookmarked ? (
        <div className={styles["heart--fill"]} />
      ) : (
        <div className={styles["heart--line"]} />
      )}
    </button>
  );
};

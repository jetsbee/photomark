import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
export const GlobalHeader = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["col"]}>
        <Link href="/">
          <div className={styles["image-container"]}>
            <Image
              className={styles["logo-image"]}
              src="/logo.png"
              alt="Photomark"
              fill={true}
              sizes="60px"
            />
          </div>
        </Link>
      </div>
      <div className={styles["col"]}>
        <Link href="/bookmarks">
          <button className={styles["button"]}>Bookmarks</button>
        </Link>
      </div>
    </header>
  );
};

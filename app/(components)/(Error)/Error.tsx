"use client";

import { useEffect } from "react";
import styles from "./styles.module.css";

export const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles["container"]}>
      <h2 className={styles["h2"]}>Something went wrong!</h2>
      <button onClick={() => reset()} className={styles["button--reset"]}>
        Try again
      </button>
    </div>
  );
};

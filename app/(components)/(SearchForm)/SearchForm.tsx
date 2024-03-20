"use client";

import { useSearchForm } from "./(hooks)/useSearchForm";
import styles from "./styles.module.css";

export const SearchForm = () => {
  const { handleFormSubmit, textInputRef } = useSearchForm();
  return (
    <form onSubmit={handleFormSubmit} className={styles["form"]}>
      <input
        type="text"
        placeholder="Get photos!"
        ref={textInputRef}
        className={styles["text-input"]}
      />
      <input
        type="submit"
        value="PhotoSearch"
        className={styles["submit-input"]}
      />
    </form>
  );
};

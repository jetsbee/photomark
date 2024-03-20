import { GlobalHeader } from "../(GlobalHeader)/GlobalHeader";
import styles from "./styles.module.css";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["container"]}>
      <GlobalHeader />
      {children}
    </div>
  );
};

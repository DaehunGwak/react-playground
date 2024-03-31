import styles from "./styles/contents.module.css";
import React from "react";

export function Contents({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.contentsWrapper}>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  );
}

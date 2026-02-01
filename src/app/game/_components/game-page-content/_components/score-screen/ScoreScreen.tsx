import type { FC } from "react";

import styles from "./styles.module.css";
import type { ScoreScreenProps } from "./types";

export const ScoreScreen: FC<ScoreScreenProps> = ({ score }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__left}>
        <h2>{score}</h2>
      </div>
    </div>
  );
};

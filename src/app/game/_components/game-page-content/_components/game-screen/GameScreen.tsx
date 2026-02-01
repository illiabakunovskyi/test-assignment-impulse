import type { FC } from "react";

import styles from "./styles.module.css";
import type { GameScreenProps } from "./types";

import { Variant } from "./_components";

export const GameScreen: FC<GameScreenProps> = ({ question, options }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__left}>
        <h2>{question}</h2>

        <div>
          {options.map((option) => (
            <Variant key={option}>{option}</Variant>
          ))}
        </div>
      </div>

      <div className={styles.steps}></div>
    </div>
  );
};

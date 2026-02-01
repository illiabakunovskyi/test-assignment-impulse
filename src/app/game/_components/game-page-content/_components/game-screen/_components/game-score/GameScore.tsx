import type { FC } from "react";

import type { GameScoreProps } from "./types";
import styles from './styles.module.css';

import { Step } from "./_components";


export const GameScore: FC<GameScoreProps> = ({ score, stepsCount }) => {
  const steps = Array(stepsCount).fill(0);

  return (
    <div className={styles.wrapper}>
      {steps.map((_, index) => (
        <Step key={index} status={'current'} />
      ))}
    </div>
  );
};

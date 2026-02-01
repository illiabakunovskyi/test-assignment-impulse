import type { FC } from "react";

import type { GameScoreProps } from "./types";
import styles from "./styles.module.css";

import { Step } from "./_components";

export const GameScore: FC<GameScoreProps> = ({
  score,
  stepsCount,
  baseValue,
  currencySign,
  stepMultiplier,
}) => {
  const steps = Array.from(
    { length: stepsCount },
    (_, i) =>
      `${currencySign}${(baseValue * Math.pow(stepMultiplier, stepsCount - 1 - i)).toLocaleString()}`,
  );

  return (
    <div className={styles.wrapper}>
      {steps.map((item, index) => (
        <Step key={index} status={score === steps.length - index - 1 ? "current" : score > steps.length - index - 1 ? "previous" : "next"}>
          {item}
        </Step>
      ))}
    </div>
  );
};

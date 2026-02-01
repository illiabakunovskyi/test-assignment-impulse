import type { FC } from "react";

import styles from "./styles.module.css";
import type { GameScreenProps } from "./types";

import { GameScore, Variant } from "./_components";

export const GameScreen: FC<GameScreenProps> = ({
  question,
  options,
  onVariantClick,
  score,
  answer,
  stepsCount,
  baseValue,
  currencySign,
  stepMultiplier,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__left}>
        <h2 className={styles.content__left__question}>{question}</h2>

        <div className={styles.content__left__options}>
          {options.map((option, index) => (
            <Variant
              key={option}
              index={index}
              className={styles.content__left__options__variant}
              onClick={onVariantClick}
              value={option}
              status={answer === option ? "selected" : undefined}
            >
              {option}
            </Variant>
          ))}
        </div>
      </div>

      <GameScore
        score={score}
        stepsCount={stepsCount}
        baseValue={baseValue}
        currencySign={currencySign}
        stepMultiplier={stepMultiplier}
      />
    </div>
  );
};

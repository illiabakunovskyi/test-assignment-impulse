"use client";
import type { FC } from "react";
import styles from "./styles.module.css";
import type { GameScreenProps } from "./types";
import { GameScore, Variant } from "./_components";

type VariantStatus = "selected" | "correct" | "wrong" | "inactive";

const getVariantStatus = (
  option: string,
  answer: string | null,
  correctAnswer: string | string[],
  isAnswerRevealed: boolean,
): VariantStatus => {
  if (!isAnswerRevealed) {
    return answer === option ? "selected" : "inactive";
  }

  const isCorrectAnswer = Array.isArray(correctAnswer)
    ? correctAnswer.includes(option)
    : correctAnswer === option;

  const isUserAnswer = answer === option;

  if ((isCorrectAnswer && isUserAnswer) || (!isUserAnswer && isCorrectAnswer)) {
    return "correct";
  }

  if (isUserAnswer) {
    return "wrong";
  }

  return "inactive";
};

export const GameScreen: FC<GameScreenProps> = ({
  question,
  options,
  onVariantClick,
  score,
  answer,
  correctAnswer,
  stepsCount,
  baseValue,
  currencySign,
  stepMultiplier,
  isAnswerRevealed,
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
              status={getVariantStatus(
                option,
                answer,
                correctAnswer,
                isAnswerRevealed,
              )}
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

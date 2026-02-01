"use client";

import { useCallback, useState, type FC } from "react";

import type { GameScoreProps } from "./types";
import styles from "./styles.module.css";

import { Step } from "./_components";
import { IconButton } from "@/components";

export const GameScore: FC<GameScoreProps> = ({
  score,
  stepsCount,
  baseValue,
  currencySign,
  stepMultiplier,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGameScore = () => setIsOpen((prev) => !prev);

  const steps = Array.from(
    { length: stepsCount },
    (_, i) =>
      `${currencySign}${(baseValue * Math.pow(stepMultiplier, stepsCount - 1 - i)).toLocaleString()}`,
  );

  return (
    <>
      <div className={styles.wrapper__desktop}>
        {steps.map((item, index) => (
          <Step
            key={index}
            status={
              score === steps.length - index - 1
                ? "current"
                : score > steps.length - index - 1
                  ? "previous"
                  : "next"
            }
          >
            {item}
          </Step>
        ))}
      </div>

      <div className={`${isOpen ? styles.wrapper__mobile : ""}`}>
        <IconButton
          className={styles.toggle}
          name={isOpen ? "close" : "menu"}
          onClick={toggleGameScore}
          alt={isOpen ? "Close game score" : "Open game score"}
        />

        {isOpen &&
          steps.map((item, index) => (
            <Step
              key={index}
              status={
                score === steps.length - index - 1
                  ? "current"
                  : score > steps.length - index - 1
                    ? "previous"
                    : "next"
              }
            >
              {item}
            </Step>
          ))}
      </div>
    </>
  );
};

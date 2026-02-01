"use client";

import { type FC } from "react";

import type { GamePageContentProps } from "./types";
import { useGame } from "./use-game";
import styles from "./styles.module.css";
import { GameScreen, ScoreScreen } from "./_components";

export const GamePageContent: FC<GamePageContentProps> = ({ config }) => {
  const { questionNumber, answer, isOver } = useGame(config.questions);

  if (!config) {
    return <div>Questions are not available, try again later</div>;
  }

  return (
    isOver ? <ScoreScreen score={""} /> : <GameScreen question={config.questions[questionNumber].question} options={config.questions[questionNumber].options} />
  );
};

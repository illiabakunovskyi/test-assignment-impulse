"use client";

import { type FC } from "react";

import type { GamePageContentProps } from "./types";
import { useGame } from "./use-game";
import { GameScreen, ScoreScreen } from "./_components";

export const GamePageContent: FC<GamePageContentProps> = ({ config }) => {
  const {
    questionNumber,
    answer,
    correctAnswer,
    handleVariantClick,
    handleTryAgainClick,
    score,
    scoreLabel,
    isOver,
    isAnswerRevealed,
  } = useGame(config);

  if (!config) {
    return <div>Questions are not available, try again later</div>;
  }

  return isOver ? (
    <ScoreScreen
      scoreLabel={scoreLabel}
      onTryAgainClick={handleTryAgainClick}
    />
  ) : (
    <GameScreen
      question={config.questions[questionNumber].question}
      score={score}
      answer={answer}
      correctAnswer={correctAnswer}
      options={config.questions[questionNumber].options}
      onVariantClick={handleVariantClick}
      stepsCount={config.questions.length}
      currencySign={config.gratification.currencySign}
      baseValue={config.gratification.baseValue}
      stepMultiplier={config.gratification.stepMultiplier}
      isAnswerRevealed={isAnswerRevealed}
    />
  );
};

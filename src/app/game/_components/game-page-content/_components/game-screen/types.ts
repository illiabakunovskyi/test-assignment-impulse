import { MouseEventHandler } from "react";

export type GameScreenProps = {
  question: string;
  options: string[];
  onVariantClick: MouseEventHandler<HTMLButtonElement>;
  score: number;
  answer: string;
  correctAnswer: string | string[];
  stepsCount: number;
  baseValue: number;
  currencySign: string;
  stepMultiplier: number;
  isAnswerRevealed: boolean;
};

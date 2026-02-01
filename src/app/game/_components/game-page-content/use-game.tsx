import {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { GamePageContentProps } from "./types";

const TIMEOUT_DURATION = 3000;
const INITIAL_QUESTION_NUMBER = 0;

export const useGame = (config: GamePageContentProps["config"]) => {
  const [questionNumber, setQuestionNumber] = useState(INITIAL_QUESTION_NUMBER);
  const [answer, setAnswer] = useState("");
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const scoreLabel = useMemo(() => {
    const isPassedFirstRound =
      score * config.gratification.stepMultiplier !== 0;

    return isPassedFirstRound
      ? `${config.gratification.currencySign}${(score * config.gratification.baseValue).toLocaleString()} earned`
      : "nothing earned";
  }, [
    config.gratification.baseValue,
    config.gratification.currencySign,
    config.gratification.stepMultiplier,
    score,
  ]);

  const handleVariantClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      setAnswer(event.currentTarget.value);

      if (
        Array.isArray(config.questions[questionNumber].answer)
          ? config.questions[questionNumber].answer.includes(
              event.currentTarget.value,
            )
          : config.questions[questionNumber].answer ===
            event.currentTarget.value
      ) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsAnswerRevealed(true);
        }, TIMEOUT_DURATION);
      } else {
        setIsOver(true);
      }
    },
    [questionNumber, config],
  );

  const handleTryAgainClick = useCallback(() => {
    setQuestionNumber(INITIAL_QUESTION_NUMBER);
    setIsOver(false);
  }, []);

  useEffect(() => {
    if (isAnswerRevealed) {
      timeoutRef.current = setTimeout(() => {
        if (questionNumber + 1 < config.questions.length) {
          setQuestionNumber(questionNumber + 1);
          setScore((prev) => prev + 1);
        } else {
          setQuestionNumber(INITIAL_QUESTION_NUMBER);
          setIsOver(true);
        }
        setIsAnswerRevealed(false);
      }, TIMEOUT_DURATION);
    }
  }, [config.questions.length, isAnswerRevealed, questionNumber]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    questionNumber,
    answer,
    score,
    isAnswerRevealed,
    scoreLabel,
    handleVariantClick,
    isOver,
    handleTryAgainClick,
  };
};

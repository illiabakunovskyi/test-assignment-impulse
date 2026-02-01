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

  const scoreLabel = useMemo(
    () =>
      score === 0
        ? "nothing earned"
        : `${config.gratification.currencySign}${(config.gratification.baseValue * Math.pow(config.gratification.stepMultiplier, score)).toLocaleString()} earned`,
    [
      config.gratification.baseValue,
      config.gratification.currencySign,
      config.gratification.stepMultiplier,
      score,
    ],
  );

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
        timeoutRef.current = setTimeout(() => {
          setIsOver(true);
        }, TIMEOUT_DURATION);
      }
    },
    [config.questions, questionNumber],
  );

  const handleTryAgainClick = useCallback(() => {
    setQuestionNumber(INITIAL_QUESTION_NUMBER);
    setIsOver(false);
    setScore(0);
  }, []);

  useEffect(() => {
    if (isAnswerRevealed) {
      timeoutRef.current = setTimeout(() => {
        if (questionNumber + 1 < config.questions.length) {
          setQuestionNumber(questionNumber + 1);
          setScore((prev) => prev + 1);
          setAnswer("");
        } else {
          setQuestionNumber(INITIAL_QUESTION_NUMBER);
          setIsOver(true);
          setAnswer("");
        }

        setIsAnswerRevealed(false);

        try {
          (document.activeElement as HTMLElement).blur();
        } catch (error) {
          console.error(error);
        }
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

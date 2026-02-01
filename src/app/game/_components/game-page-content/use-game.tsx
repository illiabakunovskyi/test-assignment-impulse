import { useCallback, useEffect, useRef, useState } from "react";
import type { GamePageContentProps } from "./types";

const TIMEOUT_DURATION = 2000;
const INITIAL_QUESTION_NUMBER = 0;

export const useGame = (
  questions: GamePageContentProps["config"]["questions"],
) => {
  const [questionNumber, setQuestionNumber] = useState(INITIAL_QUESTION_NUMBER);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleAnswerClick = useCallback(
    (selectedAnswer: string) => {
      setAnswer(selectedAnswer);

      if (
        Array.isArray(questions[questionNumber].answer)
          ? questions[questionNumber].answer.includes(selectedAnswer)
          : questions[questionNumber].answer === selectedAnswer
      ) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          if (questionNumber + 1 < questions.length) {
            setQuestionNumber(questionNumber + 1);
            setScore(prev => prev + 1);
          } else {
            setQuestionNumber(INITIAL_QUESTION_NUMBER);
            setIsOver(true);
          }
        }, TIMEOUT_DURATION);
      } else {
        setIsOver(true);
      }
    },
    [questionNumber, questions],
  );

  const handleTryAgainClick = useCallback(() => {
    setQuestionNumber(INITIAL_QUESTION_NUMBER);
    setIsOver(false);
  }, []);

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
    handleAnswerClick,
    isOver,
    handleTryAgainClick,
  };
};

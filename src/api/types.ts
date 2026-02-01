type Question = {
  question: string;
  options: string[];
  answer: string | string[];
};

export type GameConfigResponseData = {
  questions: Question[];
  gratification: {
    baseValue: number;
    stepMultiplier: number;
    currencySign: string;
  };
};

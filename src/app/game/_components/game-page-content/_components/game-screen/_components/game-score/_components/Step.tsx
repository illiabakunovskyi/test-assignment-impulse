import type { FC } from "react";
import "./styles.css";
import type { StepProps, BackgroundProps } from "./types";

const Background: FC<BackgroundProps> = ({ status }) => {
  return (
    <svg
      width="320"
      height="32"
      viewBox="0 0 320 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 16H0" stroke="#D0D0D8" />
      <path d="M320 16H279" stroke="#D0D0D8" />
      <path
        d="M61.4941 0.5H258.506C261.475 0.500071 264.328 1.64821 266.47 3.7041L279.277 16L266.47 28.2959C264.328 30.3518 261.475 31.4999 258.506 31.5H61.4941C58.5255 31.4999 55.6718 30.3518 53.5303 28.2959L40.7217 16L53.5303 3.7041C55.6718 1.6482 58.5255 0.500064 61.4941 0.5Z"
        fill="white"
        stroke="#D0D0D8"
      />
    </svg>
  );
};

export const Step: FC<StepProps> = ({ status }) => {
  return (
    <div className="step">
      <Background status={status} />
    </div>
  );
};

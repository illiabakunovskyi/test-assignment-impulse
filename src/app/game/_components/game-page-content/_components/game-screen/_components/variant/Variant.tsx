import type { FC } from "react";

import type { BackgroundProps, VariantProps } from "./types";
import { ALPHABET } from "./constants";
import "./styles.css";

const Background: FC<BackgroundProps> = ({ status = 'inactive' }) => {
  return (
    <svg
      width="405"
      height="72"
      viewBox="0 0 405 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={status ? `background background--${status}` : "background"}
    >
      <path d="M388 36L405 36" className="background__line" />
      <path d="M0 36L17 36" className="background__line" />
      <path
        d="M48.0518 0.5H356.948C360.648 0.500069 364.122 2.27998 366.283 5.2832L388.383 36L366.283 66.7168C364.122 69.72 360.648 71.4999 356.948 71.5H48.0518C44.3519 71.4999 40.8777 69.72 38.7168 66.7168L16.6162 36L38.7168 5.2832C40.8777 2.27998 44.3519 0.500067 48.0518 0.5Z"
        fill="white"
        className="background__shape"
      />
    </svg>
  );
};

export const Variant: FC<VariantProps> = ({
  children,
  index,
  className,
  status,
  ...rest
}) => {
  return (
    <button {...rest} className={className ? `button ${className}` : "button"}>
      <Background status={status} />

      <p className="button__text">
        <span className="button__text__letter">
          {ALPHABET[index % ALPHABET.length]}
        </span>{" "}
        {children}
      </p>
    </button>
  );
};

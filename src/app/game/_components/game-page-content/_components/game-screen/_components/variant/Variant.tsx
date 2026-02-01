import type { FC } from "react";

import type { BackgroundProps, VariantProps } from "./types";
import { ALPHABET } from "./constants";
import "./styles.css";

const MobileBackground: FC<BackgroundProps> = ({ status = "inactive" }) => {
  return (
    <svg
      width="320"
      height="56"
      viewBox="0 0 320 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        status
          ? `mobile__background mobile__background--${status}`
          : "mobile__background"
      }
    >
      <path d="M303 28L320 28" className="mobile__background__line" />
      <path d="M0 28L17 28" className="mobile__background__line" />
      <path
        d="M42.1758 0.5H277.824C281.538 0.5 285.024 2.29338 287.183 5.31543L303.385 28L287.183 50.6846C285.024 53.7066 281.538 55.5 277.824 55.5H42.1758C38.4619 55.5 34.9761 53.7066 32.8174 50.6846L16.6143 28L32.8174 5.31543C34.9761 2.29338 38.4619 0.5 42.1758 0.5Z"
        fill="white"
        className="mobile__background__shape"
      />
    </svg>
  );
};

const Background: FC<BackgroundProps> = ({ status = "inactive" }) => {
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
      <MobileBackground status={status} />
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

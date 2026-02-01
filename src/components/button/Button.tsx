import type { FC } from "react";

import type { ButtonProps } from "./types";
import styles from "./styles.module.css";

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button {...rest} className={className ? `${className} ${styles.button}` : styles.button}>
    {children}
  </button>
);

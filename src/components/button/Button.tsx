import type { FC } from "react";

import type { ButtonProps } from "./types";
import styles from "./styles.module.css";

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
  <button {...rest} className={styles.button}>
    {children}
  </button>
);

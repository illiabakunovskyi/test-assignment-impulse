import type { FC } from "react";
import Image from "next/image";

import type { IconButtonProps } from "./types";

import styles from "./styles.module.css";

export const IconButton: FC<IconButtonProps> = ({ name, alt, className, ...rest }) => (
  <button {...rest} className={className ? `${styles.button} ${className}` : styles.button}>
    <Image width="16" height="16" src={`icons/${name}.svg`} alt={alt} />
  </button>
);

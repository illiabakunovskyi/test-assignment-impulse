import type { FC } from "react";
import Image from "next/image";

import type { IconButtonProps } from "./types";

import styles from "./styles.module.css";

export const IconButton: FC<IconButtonProps> = ({ name, alt, ...rest }) => (
  <button {...rest} className={styles.button}>
    <Image width="16" height="16" src={`../../public/${name}.svg`} alt={alt} />
  </button>
);

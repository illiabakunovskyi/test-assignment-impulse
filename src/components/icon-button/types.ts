import type { HTMLAttributes } from "react";

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  name: string;
  alt: string;
};

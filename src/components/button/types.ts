import type { HTMLAttributes, ReactNode } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

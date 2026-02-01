import type { ButtonHTMLAttributes, ReactNode } from "react";

export type VariantProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  index: number;
  status?: "inactive" | "wrong" | "correct" | "selected";
};

export type BackgroundProps = Pick<VariantProps, "status">;

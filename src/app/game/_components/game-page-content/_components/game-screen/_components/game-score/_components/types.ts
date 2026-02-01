import type { ReactNode } from "react";

export type StepProps = {
  children: ReactNode;
  status: "current" | "previous" | "next";
};

export type BackgroundProps = Pick<StepProps, "status">;

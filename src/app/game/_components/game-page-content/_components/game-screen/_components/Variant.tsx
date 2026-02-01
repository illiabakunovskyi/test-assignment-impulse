import type { FC, ReactNode } from "react"

type VariantProps = {
  children: ReactNode;
};

export const Variant: FC<VariantProps> = ({ children }) => {
  return <div>{children}</div>
}

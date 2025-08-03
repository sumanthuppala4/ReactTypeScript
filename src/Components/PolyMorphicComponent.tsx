import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type polymorphicComponentProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function PolyMorphicComponent<P extends ElementType>({
  as,
  children,
  ...props
}: polymorphicComponentProps<P>) {
  const Component = as || "div";

  return <Component {...props}>{children}</Component>;
}

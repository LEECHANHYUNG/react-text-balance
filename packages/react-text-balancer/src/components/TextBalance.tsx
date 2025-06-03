import React, { ElementType, useRef, useState } from "react";
import { useTextBalance } from "~/hooks/useTextBalance/useTextBalance";
import clsx from "clsx";
import { text } from "./TextBalance.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
export type TextBalanceProps<T extends ElementType = "span"> = {
  children: string;
  as?: T;
  className?: string;
  maxLines?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "children"> &
  RecipeVariants<typeof text>;

export const TextBalance = <T extends ElementType = "span">({
  children,
  as,
  className,
  maxLines,
  truncate = true,
  ...props
}: TextBalanceProps<T>) => {
  const Component = as || "span";
  const ref = useRef<HTMLElement | null>(null);
  const [balancedText, setBalancedText] = useState(children);
  const isClient = typeof window !== "undefined";

  useTextBalance({
    ref,
    text: children,
    onBalance: setBalancedText,
    maxLines,
  });

  return (
    <Component
      ref={ref}
      className={clsx(className, text({ truncate }))}
      {...props}
      suppressHydrationWarning
    >
      {isClient ? balancedText : children}
    </Component>
  );
};

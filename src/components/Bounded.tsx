import { ComponentPropsWithoutRef, ElementType } from "react";
import { createElement } from "react";
import clsx from "clsx";

type BoundedProps<C extends ElementType = "section"> = {
  as?: C;
  className?: string;
} & Omit<ComponentPropsWithoutRef<C>, "as" | "className">;

export function Bounded<C extends ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<C>) {
  return createElement(
    as ?? "section",
    {
      className: clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      ),
      ...restProps,
    },
    <div className="mx-auto w-full max-w-6xl">{children}</div>
  );
}

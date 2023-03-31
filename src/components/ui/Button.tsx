import type { HTMLAttributes } from "react";
import classNames from "classnames";
import React from "react";
import { LoadingSpiner } from "../layout/LoadingSpiner";
import { cn } from "~/lib/utils";

export interface IFProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}
export const Button = ({
  children,
  variant = "primary",
  size = "sm",
  iconStart,
  iconEnd,
  type,
  loading,
  className,
  ...props
}: IFProps) => {
  return (
    <button
      type={type}
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 font-medium antialiased focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2",
        variant === "primary" &&
          "border-transparent bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
        variant === "secondary" &&
          "border-stone-300 bg-transparent text-stone-700 hover:bg-stone-100 focus-visible:ring-stone-300",
        variant === "danger" &&
          "border-danger bg-danger/50 text-danger hover:bg-danger/20 focus-visible:ring-danger",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        className
      )}
    >
      {!loading &&
        iconStart &&
        React.cloneElement(iconStart, { className: "w-4 h-4" })}
      {loading && <LoadingSpiner />}
      {children}
      {!loading &&
        iconEnd &&
        React.cloneElement(iconEnd, { className: "w-4 h-4" })}
    </button>
  );
};

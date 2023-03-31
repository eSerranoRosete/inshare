import type { HTMLAttributes } from "react";
import React from "react";
import { LoadingSpiner } from "./LoadingSpiner";
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
          "border-transparent bg-primary text-onPrimary hover:bg-primary/90 focus-visible:ring-primary",
        variant === "secondary" &&
          "border-dark/50 bg-transparent hover:bg-dark/5 focus-visible:ring-dark dark:border-light/50 dark:hover:bg-light/10",
        variant === "danger" &&
          "hover:bg-danger/90 focus-visible:ring-danger border-transparent bg-rose-600 text-light hover:bg-rose-600/70",
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
      {loading && (
        <LoadingSpiner className={cn(variant === "danger" && "text-light")} />
      )}
      {children}
      {!loading &&
        iconEnd &&
        React.cloneElement(iconEnd, { className: "w-4 h-4" })}
    </button>
  );
};

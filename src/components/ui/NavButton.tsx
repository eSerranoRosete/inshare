import Link from "next/link";
import clsx from "clsx";
import { cloneElement } from "react";

interface IFProps {
  label: string;
  href: string;
  active?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  iconStart?: React.ReactElement;
  iconEnd?: React.ReactElement;
  onClick?: () => void;
}
export const NavButton = ({
  label,
  href,
  active,
  size = "sm",
  iconStart,
  iconEnd,
  onClick,
}: IFProps) => {
  return (
    <Link
      className={clsx(
        "inline-flex items-center gap-2 rounded-md px-4 py-2 font-medium transition-all duration-100 ",
        active ? "bg-accent" : "hover:bg-stone-100",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg"
      )}
      onClick={onClick}
      href={href}
    >
      {iconStart && cloneElement(iconStart, { className: "w-4" })}
      {label}
      {iconEnd && cloneElement(iconEnd, { className: "w-4" })}
    </Link>
  );
};

import { ArrowUp, ArrowDown } from "lucide-react";
import Link from "next/link";

interface IFProps {
  title: string;
  value: string;
  statLabel?: string;
  statLabelIcon?: "up" | "down";
  href: string;
}
export const StatCard = ({
  title,
  value,
  statLabel,
  statLabelIcon,
  href,
}: IFProps) => {
  return (
    <Link
      href={href}
      className="group/card flex h-28 cursor-pointer flex-col justify-center rounded-lg border border-dark/10 bg-dark/5 px-6 py-3 antialiased shadow-sm transition-colors duration-150 hover:bg-primary hover:text-dark dark:bg-light/5"
    >
      <h6 className="mb-2 truncate text-sm font-medium text-dark/80 dark:text-light/80 dark:group-hover/card:text-dark">
        {title}
      </h6>
      <div className="flex items-baseline">
        <p className="flex grow truncate text-3xl font-medium">{value}</p>
        {statLabel && (
          <span className="bg-accent flex items-center rounded-full border border-dark bg-primary px-3 py-0.5 text-sm font-semibold dark:text-dark">
            {statLabelIcon === "up" && <ArrowUp className="mr-1 w-3" />}
            {statLabelIcon === "down" && <ArrowDown className="mr-1 w-3" />}
            {statLabel}
          </span>
        )}
      </div>
    </Link>
  );
};

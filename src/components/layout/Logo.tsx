import { CubeIcon } from "@heroicons/react/24/solid";
import { cn } from "~/lib/utils";

interface IFProps {
  className?: string;
}
export const Logo = ({ className }: IFProps) => {
  return (
    <span className={cn("flex items-center gap-2 font-semibold", className)}>
      <CubeIcon className="w-6" />
      <span>Inshare</span>
    </span>
  );
};

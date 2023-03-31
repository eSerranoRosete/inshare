import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { cn } from "~/lib/utils";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <div className="rounded-md border border-dark/10 p-2 text-dark/50 hover:bg-dark/5 dark:border-light/10 dark:text-light/50 dark:hover:bg-light/10">
          <SunIcon className="w-4" />
        </div>
      ) : (
        <div
          className={cn(
            "rounded-md border border-dark/10 p-2 text-dark/50 hover:bg-dark/5 dark:border-light/10 dark:text-light/50 dark:hover:bg-light/10"
          )}
        >
          <MoonIcon className="w-4" />
        </div>
      )}
    </button>
  );
};

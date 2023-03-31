import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

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
        <div className="rounded-md border border-dark/10 p-2 dark:border-light/10 dark:hover:bg-light/10">
          <SunIcon className="w-4" />
        </div>
      ) : (
        <div className="rounded-md border border-dark/10 p-2 dark:border-light/10 dark:hover:bg-light/10">
          <MoonIcon className="w-4" />
        </div>
      )}
    </button>
  );
};

import { PageLayout } from "./PageLayout";
import { Navigation } from "../nav/Navigation";
import { config } from "~/config/AppConfig";
import { UserButton } from "@clerk/nextjs";
import { ToggleTheme } from "../ui/ToggleTheme";

interface IFProps {
  children: React.ReactNode;
}
export const AppShell = ({ children }: IFProps) => {
  return (
    <PageLayout>
      <Navigation
        logoHref="/dashboard"
        navItems={config.appNavigation}
        navActions={
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <UserButton afterSignOutUrl="/" />
          </div>
        }
      />
      {children}
    </PageLayout>
  );
};

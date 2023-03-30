import { PageLayout } from "./PageLayout";
import { Navigation } from "../nav/Navigation";
import { config } from "~/config/AppConfig";
import { UserDropdown } from "../nav/UserDropdown";
import { UserButton } from "@clerk/nextjs";

interface IFProps {
  children: React.ReactNode;
}
export const AppShell = ({ children }: IFProps) => {
  return (
    <PageLayout>
      <Navigation
        logoHref="/dashboard"
        navItems={config.appNavigation}
        navActions={<UserButton />}
      />
      {children}
    </PageLayout>
  );
};

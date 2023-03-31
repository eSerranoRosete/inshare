"use client";

import { NavButton } from "./../ui/NavButton";

import { useAppActions } from "~/context/context";
import { UserDropdown } from "./UserDropdown";
import Link from "next/link";
import { CubeIcon } from "@heroicons/react/24/solid";

import { IFNavItem } from "~/config/AppConfig";
import { useRouter } from "next/router";
import { Logo } from "../ui/Logo";

interface IFProps {
  navItems: IFNavItem[];
  logoHref: string;
  navActions?: React.ReactNode;
}
export const Navigation = ({ navItems, navActions, logoHref }: IFProps) => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  const actions = useAppActions();

  return (
    <div className="m-auto max-w-8xl">
      <nav className="flex items-center justify-between lg:justify-start">
        <Link
          onClick={() => actions.setCurrentPage("Home")}
          href={logoHref}
          className="lg:mr-20"
        >
          <Logo />
        </Link>
        <div className="flex items-center lg:grow">
          {navItems.map((item, i) => (
            <NavButton
              active={currentPage === item.alias}
              onClick={() => actions.setCurrentPage(item.alias)}
              key={i}
              label={item.name}
              href={item.path}
            />
          ))}
        </div>
        {navActions}
      </nav>
    </div>
  );
};

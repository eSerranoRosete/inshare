import React from "react";

import { Sidebar } from "../ui/Sidebar";

interface IFProps {
  children: React.ReactNode;
  sidebarContent: React.ReactNode;
}

export const WithSidebarLayout = ({ children, sidebarContent }: IFProps) => {
  return (
    <section className="mt-10 flex h-full w-full gap-5">
      <Sidebar>{sidebarContent}</Sidebar>
      <div className="h-full w-full rounded-md border border-stone-200 p-4 shadow-sm bg-dotted-spacing-4 bg-dotted-gray-200">
        {children}
      </div>
    </section>
  );
};

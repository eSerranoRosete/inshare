import React, { useRef } from "react";
import { Save } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../card-preview/Card";
import { useStudioActions } from "~/context/studio/studioContext";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { Sidebar } from "../ui/Sidebar";
import { StudioSidebarContent } from "../studioSidebar/StudioSidebarContent";

interface IFProps {
  children: React.ReactNode;
}

export const WithSidebarLayout = ({ children }: IFProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const { query } = router;

  const isCreateView = query.view === "create";

  return (
    <section className="mt-10 flex h-full w-full gap-5">
      <Sidebar>
        <StudioSidebarContent view={query.view as any} />
      </Sidebar>
      <div className="h-full w-full rounded-md border border-stone-200 p-4 shadow-sm bg-dotted-spacing-4 bg-dotted-gray-200">
        {isCreateView && <Card />}
      </div>
    </section>
  );
};

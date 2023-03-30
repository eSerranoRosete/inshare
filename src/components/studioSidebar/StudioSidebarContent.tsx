import * as Sidebar from "~/components/ui/Sidebar";
import { InitializeCardForm } from "../forms/InitializeCardForm";
import { useRef } from "react";

interface IFProps {
  view: "create" | "view-all";
}

export const StudioSidebarContent = ({ view }: IFProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  switch (view) {
    case "create":
      return (
        <>
          <Sidebar.Header
            title="Create a new card"
            description="create new card"
          />
          <Sidebar.Content>
            <InitializeCardForm />
          </Sidebar.Content>
        </>
      );
    case "view-all":
      return (
        <Sidebar.Header title="View all cards" description="view all cards" />
      );
    default:
      return null;
  }
};

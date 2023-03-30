import * as Sidebar from "~/components/ui/Sidebar";
import { InitializeCardForm } from "../forms/InitializeCardForm";
import { useRef } from "react";

interface IFProps {
  view: "create";
}

export const StudioSidebarContent = ({ view }: IFProps) => {
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
    default:
      return (
        <Sidebar.Header title="View all cards" description="view all cards" />
      );
  }
};

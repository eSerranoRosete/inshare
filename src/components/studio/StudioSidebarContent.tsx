import * as Sidebar from "~/components/ui/Sidebar";
import { IFStudioView } from "~/lib/AppTypes";

import { CreateCardSidebar } from "./CreateCard/CreateCardSidebar";
import { EditCardSidebar } from "./EditCard/EditCardSidebar";

interface IFProps {
  view: IFStudioView;
}

export const StudioSidebarContent = ({ view }: IFProps) => {
  switch (view) {
    case "create":
      return <CreateCardSidebar />;

    case "edit":
      return <EditCardSidebar />;

    default:
      return (
        <Sidebar.Header title="View all cards" description="view all cards" />
      );
  }
};

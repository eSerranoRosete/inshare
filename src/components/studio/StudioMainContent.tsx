import { IFStudioView } from "~/lib/AppTypes";
import { Card } from "../card-preview/Card";
import { AllCardsView } from "./AllCardsView";
import { EditCardView } from "./EditCard/EditCardView";
import { CreateCardView } from "./CreateCard/CreateCardView";

interface IFProps {
  view: IFStudioView;
}

export const StudioMainContent = ({ view }: IFProps) => {
  switch (view) {
    case "create":
      return <CreateCardView />;

    case "edit":
      return <EditCardView />;
    default:
      return <AllCardsView />;
  }
};

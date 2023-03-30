import { Card } from "../card-preview/Card";
import { ViewAllCards } from "./ViewAllCards";

interface IFProps {
  view: "create";
}

export const StudioMainContent = ({ view }: IFProps) => {
  switch (view) {
    case "create":
      return <Card />;
    default:
      return <ViewAllCards />;
  }
};

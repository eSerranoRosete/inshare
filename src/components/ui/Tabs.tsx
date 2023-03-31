import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface IFProps {
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const Tabs = ({ tabs }: IFProps) => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-fit divide-x divide-dark/20 overflow-hidden rounded-md border border-dark/20 dark:divide-light/20 dark:border-light/20">
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            className={({ selected }) =>
              classNames(
                "px-4 py-2 text-sm outline-none focus:outline-none",
                selected
                  ? "bg-dark text-light dark:bg-light dark:text-dark"
                  : "hover:bg-dark/5 dark:hover:bg-light/10"
              )
            }
          >
            {tab.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2 w-full">
        {tabs.map((tab, i) => (
          <Tab.Panel key={i}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

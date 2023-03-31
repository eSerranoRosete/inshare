import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { cn } from "~/lib/utils";

interface IFProps {
  items: IFExpandableItem[];
}

export interface IFExpandableItem {
  label: string;
  content: React.ReactNode;
}

export const SidebarExpandable = ({ items }: IFProps) => {
  return (
    <div className="w-ful">
      {items.map((item, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={cn(
                  "flex w-full justify-between rounded-lg bg-dark/5 px-4 py-2 text-left text-sm font-medium hover:bg-dark/10 focus:outline-none focus-visible:ring focus-visible:ring-dark focus-visible:ring-opacity-75 dark:bg-light/5 dark:hover:bg-light/10",
                  open &&
                    "bg-primary hover:bg-primary dark:bg-primary dark:text-dark dark:hover:bg-primary"
                )}
              >
                <span>{item.label}</span>
                <ChevronUpIcon
                  className={cn(
                    "h-5 w-5 transition-all",
                    open && "rotate-180 transform"
                  )}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2">
                {item.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

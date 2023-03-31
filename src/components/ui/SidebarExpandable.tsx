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
                  "flex w-full justify-between rounded-lg bg-stone-50 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-stone-100 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75",
                  open && "bg-accent hover:bg-accent"
                )}
              >
                <span>{item.label}</span>
                <ChevronUpIcon
                  className={cn(
                    "h-5 w-5 text-primary transition-all",
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

import { Transition, Dialog as HeadlessDialog } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

export interface IFProps {
  isOpen: boolean;
  title?: string;
  desc?: string;
  maxWidth?: "md" | "lg" | "xl";
  children?: React.ReactNode;
  onClose: () => void;
}

export const Dialog = ({
  isOpen,
  title,
  desc,
  maxWidth,
  children,
  onClose,
}: IFProps) => (
  <Transition appear show={isOpen} as={React.Fragment}>
    <HeadlessDialog as="div" className="relative z-10" onClose={onClose}>
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm dark:bg-light/5" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessDialog.Panel
              className={classNames(
                "w-full transform overflow-hidden rounded-lg bg-light p-6 text-left align-middle shadow-xl transition-all dark:bg-dark",
                maxWidth === "md" && "max-w-md",
                maxWidth === "lg" && "max-w-lg",
                maxWidth === "xl" && "max-w-xl"
              )}
            >
              {title && (
                <HeadlessDialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6"
                >
                  {title}
                </HeadlessDialog.Title>
              )}
              {desc && (
                <div className="mt-2">
                  <p className="text-sm text-dark/50">{desc}</p>
                </div>
              )}
              {children}
            </HeadlessDialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </HeadlessDialog>
  </Transition>
);

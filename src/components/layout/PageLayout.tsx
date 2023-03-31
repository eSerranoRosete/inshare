import React from "react";

interface IFProps {
  children: React.ReactNode;
  omitNavigation?: boolean;
}
export const PageLayout = ({ children, omitNavigation }: IFProps) => {
  return (
    <div>
      <main className="max-w-8xl m-auto w-full p-6">{children}</main>
    </div>
  );
};

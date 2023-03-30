import React from "react";

interface IFProps {
  children: React.ReactNode;
  omitNavigation?: boolean;
}
export const PageLayout = ({ children, omitNavigation }: IFProps) => {
  return (
    <div>
      <main className="container p-6">{children}</main>
    </div>
  );
};

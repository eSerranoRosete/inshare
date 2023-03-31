interface IFProps {
  children: React.ReactNode;
}
export const Sidebar = ({ children }: IFProps) => {
  return (
    <div className="flex h-full w-full max-w-sm flex-col rounded-md p-4">
      {children}
    </div>
  );
};

interface IFHeaderProps {
  title: string;
  description: string;
}
export const Header = ({ title, description }: IFHeaderProps) => {
  return (
    <div className="mb-5">
      <h6 className="mb-2 text-xl font-medium">{title}</h6>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
};

interface IFContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: IFContentProps) => {
  return <div className="flex-1">{children}</div>;
};

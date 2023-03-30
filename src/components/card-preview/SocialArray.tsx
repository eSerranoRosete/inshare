interface IFProps {
  socialItems: {
    link: string;
    type: string;
  }[];
}

export const SocialArray = ({ socialItems }: IFProps) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center rounded-t-3xl border-t border-slate-300 bg-white py-1">
      {socialItems.map((item) => (
        <a href={item.link} target="_blank">
          <img
            src={`/buttons/${item.type}.svg`}
            className="m-3 h-12 w-12"
            alt={`${item.type} button`}
          />
        </a>
      ))}
    </div>
  );
};

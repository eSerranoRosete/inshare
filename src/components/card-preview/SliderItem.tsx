interface IFProps {
  href?: string;
  img?: string;
}

export const SliderItem = ({ href, img }: IFProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="mr-5 h-56 w-72 shrink-0 snap-center overflow-hidden rounded-xl shadow-lg shadow-zinc-300"
    >
      <img src={img} className="h-full w-full object-cover object-center" />
    </a>
  );
};

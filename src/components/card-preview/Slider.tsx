import { SliderItem } from "./SliderItem";

interface IFProps {
  sliderTitle: string;
  sliderItems: {
    link: string;
    img: string;
  }[];
}

export const Slider = ({ sliderTitle, sliderItems }: IFProps) => {
  return (
    <>
      <h2 className="mt-10 text-center text-lg font-bold text-slate-800">
        {sliderTitle}
      </h2>
      <div className="flex items-center justify-center text-xs text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          ></path>
        </svg>
        <p>Desliza y presiona para más información</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          ></path>
        </svg>
      </div>
      <div className="scrollbar-hidden flex snap-x snap-mandatory overflow-x-auto py-4 px-20">
        {sliderItems.map((item) => {
          return <SliderItem href={item.link} img={item.img} />;
        })}
      </div>
    </>
  );
};

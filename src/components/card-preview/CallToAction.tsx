export interface IFProps {
  text?: string;
}

export const CallToAction = ({ text }: IFProps) => {
  return (
    <div className="m-auto w-5/6 px-3 py-6">
      <a
        className="m-auto mb-2 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2 text-sm text-white"
        target="_blank"
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-2 h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

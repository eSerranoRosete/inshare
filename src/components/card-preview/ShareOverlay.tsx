import { IFUserData } from "~/context/AppTypes";

export const ShareOverlay = ({ name, avatar, description }: IFUserData) => {
  return (
    <div
      id="qrOverlay"
      className="shadow-3xl absolute -bottom-full z-30 h-[95%] w-full rounded-t-3xl bg-white/75 py-10 text-center text-black drop-shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-end justify-center">
        <div>
          <div className="m-auto mt-10 h-20 w-20 overflow-hidden rounded-2xl bg-white shadow-xl">
            <img
              src={avatar}
              alt="Profile Image"
              className="h-full w-full rounded-md object-cover object-center"
            />
          </div>
          <h5 className="m-auto mt-4 w-44 text-center font-bold">{name}</h5>
          <p className="m-auto max-w-xs text-sm">{description}</p>
        </div>
      </div>
      <div className="m-auto mt-5 mb-5 flex h-52 w-52 items-center justify-center rounded-xl border-2 border-black p-2">
        <img src={""} className="rounded-xl bg-white p-1" />
      </div>
      <a
        id="share-button-sec"
        className="m-auto flex max-w-xs cursor-pointer items-center justify-center rounded-xl border border-slate-900 px-6 py-2 text-sm text-slate-900"
      >
        Share this card
      </a>
      <div className="flex items-end justify-center py-4 text-xs">
        <p>
          Powered by <b>Inteminer</b>
        </p>
      </div>
      <button
        id="closeBtn"
        className="text-md absolute right-5 top-5 text-black"
      ></button>
    </div>
  );
};

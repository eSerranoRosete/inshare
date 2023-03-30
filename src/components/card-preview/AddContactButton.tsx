export const AddContactButton = () => {
  return (
    <button className="m-auto mb-2 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2 text-sm text-white">
      Add to contacts
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        ></path>
      </svg>
    </button>
  );
};

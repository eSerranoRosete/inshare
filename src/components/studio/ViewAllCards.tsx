import { api } from "~/utils/api";

export const ViewAllCards = () => {
  const { data, isLoading } = api.card.getAll.useQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data) {
    return <>No data</>;
  }

  return (
    <div className="flex flex-col gap-3">
      {data.map((card) => (
        <div
          key={card.id}
          className="flex cursor-pointer rounded-md border border-stone-100 bg-stone-50 p-4 shadow-sm"
        >
          <div className="grow">
            <h1 className="text-xl font-semibold">{card.displayName}</h1>
            <h2 className="mb-1 text-sm">{card.displayTitle}</h2>
            <span className="rounded-md bg-accent px-4 py-0.5 text-xs font-bold">
              {card.org}
            </span>
          </div>
          <div>
            <span className="text-xs text-muted ">Last Edit: 30 days ago</span>
          </div>
        </div>
      ))}
    </div>
  );
};

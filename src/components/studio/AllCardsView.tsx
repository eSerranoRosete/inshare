import { api } from "~/utils/api";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";
import { formatDistance } from "date-fns";
import { NoCardsYet } from "../NoCardsYet";
export const AllCardsView = () => {
  const { data, isLoading } = api.card.getAll.useQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data) {
    return <>No data</>;
  }

  const getDaysSince = (date: Date) => {
    const days = formatDistance(date, new Date(), {
      addSuffix: true,
    });
    return days;
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {data?.length === 0 && (
        <div className="col-span-3">
          <NoCardsYet />
        </div>
      )}

      {data.map((card) => (
        <Link
          key={card.id}
          className="flex cursor-pointer rounded-md bg-dark/5 p-4 shadow-sm dark:bg-light/5"
          href={`/studio?view=edit&id=${card.id}`}
        >
          <div className="grow truncate">
            <h1 className="text-xl font-semibold">{card.displayName}</h1>
            <h2 className="mb-1 text-sm">{card.displayTitle}</h2>
            <span className="rounded-md bg-primary px-4 py-0.5 text-xs font-bold text-dark">
              {card.org}
            </span>
          </div>
          <div className="flex flex-col items-end justify-between">
            <span className="text-xs text-dark/50 dark:text-light/50 ">
              Last Edit: {getDaysSince(card.updatedAt)}
            </span>
            <Button
              variant="secondary"
              size="xs"
              iconEnd={<ArrowUpRight />}
              onClick={(e) => e.stopPropagation()}
              className="w-fit"
            >
              Open Live Card
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

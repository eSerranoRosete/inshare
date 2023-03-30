import { PlusCircle } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { StatCard } from "~/components/card/StatCard";

import { PageHeader } from "~/components/layout/PageHeader";

import { Tabs } from "~/components/ui/Tabs";

import { api } from "~/utils/api";

import { AppShell } from "~/components/layout/AppShell";
import { StatCardLoading } from "~/components/card/StatCardLoading";
import Link from "next/link";

const tabs = [
  {
    title: "View All",
    content: "",
  },
  {
    title: "Enrolled",
    content: "",
  },
  {
    title: "Active",
    content: "",
  },
  {
    title: "Unenrolled",
    content: "",
  },
];

const DashboardPage = () => {
  const { data, isLoading } = api.card.getAll.useQuery();

  return (
    <>
      <AppShell>
        <PageHeader
          title={
            <>
              Trending Cards
              <span className="ml-3 text-sm text-muted">
                {data?.length} / 3 cards in use
              </span>
            </>
          }
          actions={
            <div className="flex gap-3">
              <Link href="/studio?view=view-all">
                <Button
                  variant="secondary"
                  onClick={() => console.log("confetti")}
                >
                  View All
                </Button>
              </Link>
              <Link href="/studio?view=create">
                <Button variant="primary" iconEnd={<PlusCircle />}>
                  Create Card
                </Button>
              </Link>
            </div>
          }
        />
        <section className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
            {isLoading ? (
              <StatCardLoading numberOfCards={3} />
            ) : (
              data?.map((card) => (
                <StatCard
                  key={card.id}
                  title={card.displayTitle}
                  value={card.org}
                  statLabel="20%"
                  statLabelIcon="up"
                />
              ))
            )}
          </div>
        </section>
        <hr className="my-10" />
        <div>
          <h3 className="text-lg font-bold">Recent interactions</h3>
          <p className="mb-10 text-muted">
            Interactions recieved through your cards
          </p>
          <Tabs tabs={tabs} />
        </div>
      </AppShell>
    </>
  );
};

export default DashboardPage;

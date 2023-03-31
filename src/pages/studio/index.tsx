import { useMemo } from "react";

import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppShell } from "~/components/layout/AppShell";
import { PageHeader } from "~/components/layout/PageHeader";

import { WithSidebarLayout } from "~/components/layout/WithSidebarLayout";
import { StudioMainContent } from "~/components/studio/StudioMainContent";
import { StudioSidebarContent } from "~/components/studio/StudioSidebarContent";
import { Button } from "~/components/ui/Button";
import { StudioProvider } from "~/context/studio/studioContext";
import { cn } from "~/lib/utils";

export default function index() {
  const router = useRouter();
  // current view passed from the url query
  const { view } = router.query;

  const header = useMemo(
    () => (
      <div>
        <Link href="/studio" className={cn(view && "underline")}>
          Studio
        </Link>
        {view && (
          <span className="font-muted ml-3 text-lg text-muted">/{view}</span>
        )}
      </div>
    ),
    [view]
  );

  return (
    <StudioProvider>
      <AppShell>
        <PageHeader
          title={header}
          actions={
            <Link href="/studio?view=create">
              <Button variant="primary" iconEnd={<PlusCircle />}>
                Create Card
              </Button>
            </Link>
          }
        />
        <WithSidebarLayout
          sidebarContent={<StudioSidebarContent view={view as any} />}
        >
          <StudioMainContent view={view as any} />
        </WithSidebarLayout>
      </AppShell>
    </StudioProvider>
  );
}

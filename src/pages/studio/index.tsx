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

export default function index() {
  const router = useRouter();
  // current view passed from the url query
  const { view } = router.query;

  return (
    <StudioProvider>
      <AppShell>
        <PageHeader
          title="Studio"
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

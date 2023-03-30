import { AppShell } from "~/components/layout/AppShell";
import { PageHeader } from "~/components/layout/PageHeader";

import { WithSidebarLayout } from "~/components/layout/WithSidebarLayout";
import { StudioProvider } from "~/context/studio/studioContext";

export default function index() {
  return (
    <StudioProvider>
      <AppShell>
        <PageHeader title="Studio" />
        <WithSidebarLayout>
          <></>
        </WithSidebarLayout>
      </AppShell>
    </StudioProvider>
  );
}

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { LoadingPage } from "~/components/layout/LoadingPage";
import { PageLayout } from "~/components/layout/PageLayout";
import { Navigation } from "~/components/nav/Navigation";
import { Button } from "~/components/ui/Button";
import { config } from "~/config/AppConfig";

export default function index() {
  const router = useRouter();
  const auth = useAuth();

  if (auth.isSignedIn) {
    router.push("/dashboard");
    return <LoadingPage />;
  }

  return (
    <PageLayout omitNavigation>
      <Navigation
        logoHref="/"
        navItems={config.landingNavigation}
        navActions={
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button size="sm">Sign in</Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" variant="secondary">
                Register
              </Button>
            </Link>
          </div>
        }
      />
    </PageLayout>
  );
}

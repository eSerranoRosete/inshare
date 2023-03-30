import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { config } from "~/config/AppConfig";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppProvider } from "~/context/context";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        variables: {
          colorPrimary: config.appColors?.primary,
          colorDanger: config.appColors?.danger,
          colorSuccess: config.appColors?.success,
          borderRadius: "0.2rem",
        },
        elements: {
          modalBackdrop: "backdrop-blur-sm",
        },
      }}
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

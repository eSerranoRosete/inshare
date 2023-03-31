import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { config } from "~/config/AppConfig";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { AppProvider } from "~/context/context";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <ClerkProvider
        {...pageProps}
        appearance={{
          variables: {
            colorSuccess: config.appColors?.success,
            colorTextOnPrimaryBackground: config.appColors?.light,
            colorPrimary: config.appColors?.dark,
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
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);

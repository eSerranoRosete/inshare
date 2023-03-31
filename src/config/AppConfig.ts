export interface IFNavItem {
  name: string;
  alias: string;
  path: string;
}

export interface IFAppConfig {
  landingNavigation: IFNavItem[];
  appNavigation: IFNavItem[];
  appColors?: { [key: string]: string };
}

export const config: IFAppConfig = {
  landingNavigation: [
    {
      name: "Home",
      alias: "",
      path: "/",
    },
    {
      name: "About",
      alias: "about",
      path: "/about",
    },
  ],
  appNavigation: [
    {
      name: "Dashboard",
      alias: "dashboard",
      path: "/dashboard",
    },
    {
      name: "Studio",
      alias: "studio",
      path: "/studio",
    },
    {
      name: "Analytics",
      alias: "analytics",
      path: "/analytics",
    },
    {
      name: "Interactions",
      alias: "interactions",
      path: "/interactions",
    },
  ],
  appColors: {
    primary: "#C6EE4C",
    onPrimary: "#101010",
    muted: "#78716c",
    dark: "#101010",
    light: "white",
  },
};

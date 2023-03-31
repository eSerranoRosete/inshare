const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...colors,
        primary: "#C6EE4C",
        onPrimary: "#101010",
        muted: "#78716c",
        dark: "#101010",
        light: "white",
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        "8xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-dotted-background"),
  ],
};

module.exports = config;

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...colors,
        primary: "#0f172a",
        success: "#16a34a",
        muted: "#78716c",
        danger: "#e11d48",
        accent: "#D9F368",
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

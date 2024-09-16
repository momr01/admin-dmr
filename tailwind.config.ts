import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backDark: "var(--background-start-rgb)",
        backLight: "var(--background-end-rgb)",
        foreground: "var(--foreground)",
        primary: "rgb(var(--primary))",
        bluePrimary: "var(--bg)",
        blueSecondary: "var(--bgSoft)",
      },
    },
  },
  plugins: [],
};
export default config;

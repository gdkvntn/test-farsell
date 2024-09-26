import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "590px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inknutAntiqua)"],
      },
      colors: {
        brown: "#352d27",
        ["dark-beige"]: "#c1baac",
        ["light-beige"]: "#ded7c7",
      },
    },
  },
  plugins: [],
};
export default config;

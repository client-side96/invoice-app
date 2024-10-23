import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-league-spartan)"],
      },
      colors: {
        violet: {
          250: "#9277FF",
          500: "#7C5DFA",
        },
        navy: {
          400: "#373B53",
          500: "#252945",
          900: "#1E2139",
        },
        livid: {
          50: "#DFE3FA",
          500: "#888EB0",
          750: "#7E88C3",
          900: "#0C0E16",
        },
        alert: {
          50: "#FF9797",
          500: "#EC5757",
        },
        background: {
          light: "#F8F8FB",
          dark: "#141625",
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
        sans: ["Helvetica Now Display", "Helvetica", "Arial", "sans-serif"],
        serif: ["Martha", "Georgia", "serif"],
        mono: ["Martha", "monospace"],
      },
      colors: {
        black: "#050505",
        white: "#ffffff",
        cream: "#f5f5f0",
      },
    },
  },
  plugins: [],
};

export default config;

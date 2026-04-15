import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tesla-red": "#E31937",
        "tesla-dark": "#171717",
        "tesla-gray": "#393C41",
        "tesla-light": "#F4F4F4",
        // Midlife engineering inspired colors
        "midlife-bg": "#000000",
        "midlife-text": "#e0e0e0",
        "midlife-red": "#ff0000",
        "midlife-dark-gray": "#333333",
        "midlife-light-gray": "#cccccc",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        satoshi: ["Satoshi", "sans-serif"],
        termina: ["Termina", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

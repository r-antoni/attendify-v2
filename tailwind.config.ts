import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2488CA",
        primaryLight: "#EDF9FD",
        purple: "#CFCEFF",
        purpleLight: "#F1F0FF",
        yellow: "#FAE27C",
        yellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
} satisfies Config;

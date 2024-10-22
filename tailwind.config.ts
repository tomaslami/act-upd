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
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#1b4da1",
        blue2: "#1B4DA1",
        green: "#889A3A",
        greenlight: "#889A3A",
        purple: "#5E56A0",
        red: "#C73C20"
      },
      fontFamily: {
        'gotham-bold': ['var(--font-gotham-rounded-bold)', 'sans-serif'],
        'gotham-bold-italic': ['var(--font-gotham-rounded-bold-italic)', 'sans-serif'],
        'gotham-medium': ['var(--font-gotham-rounded-medium)', 'sans-serif'],
        'gotham-medium-italic': ['var(--font-gotham-rounded-medium-italic)', 'sans-serif'],
        'gotham-light': ['var(--font-gotham-rounded-light)', 'sans-serif'],
        'gotham-light-italic': ['var(--font-gotham-rounded-light-italic)', 'sans-serif'],
        'gotham-book': ['var(--font-gotham-rounded-book)', 'sans-serif'],
        'gotham-book-italic': ['var(--font-gotham-rounded-book-italic)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

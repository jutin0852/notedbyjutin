import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tiptap/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        notesOrange: "#FF7801",
      },
      listStyleType: {
        disc: "disc",
        decimal: "decimal",
        none: "none",
      },
    },
  },
  plugins: [],
} satisfies Config;

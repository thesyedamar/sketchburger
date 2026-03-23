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
        yellow: {
          DEFAULT: "#FFC500",
          light: "#FFD84D",
          bg: "#FFF8E1",
        },
        orange: "#FF6B00",
        green: {
          DEFAULT: "#4CAF50",
          dark: "#388E3C",
        },
        red: "#F44336",
        cream: "#FFF9F0",
        gray: {
          light: "#F5F5F5",
          DEFAULT: "#757575",
        },
        dark: "#1A1A1A",
        border: "#EEEEEE",
      },
      borderRadius: {
        xl: "12px",
        "2xl": "20px",
        "3xl": "30px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
        food: "0 20px 60px rgba(0,0,0,0.15)",
        yellow: "0 8px 25px rgba(255,197,0,0.4)",
        btn: "0 4px 15px rgba(255,197,0,0.3)",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
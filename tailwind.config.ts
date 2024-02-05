import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        copyright: "10px",
        copyright1: "8px",
        textDetail: ["10px", "12px"],
      },
      inset: {
        "253px": "253px",
        "66px": "66px",
        "80px": "80px",
        "-1px": "-1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#0f0f0f",
        background: "#f5f8ff",
        darkBackground: "#191919",
        textDark: "#0c0d0f",
        textLight: "#F7F5F2",
        darkActive: "#86A7FC",
        active: "#1C6DD0",
        helper: "#3f4247",
      },
    },
  },
  plugins: [],
};
export default config;

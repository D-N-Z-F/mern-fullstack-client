import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss")],
};

export default config;

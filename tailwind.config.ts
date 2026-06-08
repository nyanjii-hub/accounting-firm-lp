import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aoba: {
          navy: "#12355b",
          blue: "#1f5f99",
          sky: "#e8f2fb",
          ink: "#1f2937",
          mist: "#f6f8fb",
          green: "#517a62",
        },
      },
      boxShadow: {
        calm: "0 16px 40px rgba(18, 53, 91, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A2A5C",
          light: "#123A78",
          soft: "#31517E",
        },
        sand: {
          DEFAULT: "#FFF9EE",
          dark: "#F5EBD8",
        },
        coral: {
          DEFAULT: "#FDD76C",
          dark: "#EEC14A",
          soft: "#FFF1C6",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        tag: "0.9rem",
      },
      boxShadow: {
        soft: "0 18px 50px -28px rgba(10, 42, 92, 0.32)",
        card: "0 16px 34px -26px rgba(10, 42, 92, 0.24)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

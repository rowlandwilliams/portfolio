const defaultTheme = require("tailwindcss/defaultTheme");
const { safeList } = require("./tailwind/safeList");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [...safeList],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#0f111a",
        "chart-purple": "#C479FF",
        "chart-red": "#FF6868",
        "chart-yellow": "#facc15",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-in",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "stroke-indigo-400",
    "stroke-blue-800",
    "stroke-orange-400",
    "bg-indigo-400",
    "bg-blue-800",
    "bg-orange-400",
    "stroke-pink-400",
    "stroke-yellow-400",
    "bg-pink-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "border-blue-800",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#0f111a",
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

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
    "stroke-teal-400",
    'stroke-yellow-400','stroke-red-400'
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#0f111a",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

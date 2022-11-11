const defaultTheme = require("tailwindcss/defaultTheme");
const projectColors = [
  "indigo-600",
  "lime-400",
  "blue-800",
  "fuchsia-500",
  "orange-400",
];
const classPrefixes = ["stroke", "bg", "border", "hover:border"];
const projectColorClasses = projectColors
  .map((color) => classPrefixes.map((prefix) => `${prefix}-${color}`))
  .flat();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [...projectColorClasses],
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

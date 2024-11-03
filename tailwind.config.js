const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "header-transition": "width 0.3s ease, left 0.3s ease",
      colors: {
        primary: "indigo-900",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};


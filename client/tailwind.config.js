/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#363636",
          DEFAULT: "#000000",
        },
        purple: {
          100: "#8875FF",
          200: "#7B61FF",
          DEFAULT: "#8875FF",
        },
      },
      gray: {
        100: "#979797",
        200: "#C4C4C4",
        DEFAULT: "#979797",
      },
    },
  },
  plugins: [],
};

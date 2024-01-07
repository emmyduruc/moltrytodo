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
        purple: {
          100: "#8875FF",
          200: "#7B61FF",
          DEFAULT: "#8875FF",
        },
      },
    },
  },
  plugins: [],
};

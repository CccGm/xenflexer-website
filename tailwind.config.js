/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      app: {
        moss: "#4F7A21",
        moss200: "#CEEAB0",
        moss500: "#669F2A",
        moss700: "#3F621A",
        border: "#D0D5DD",
        gray: "#475467",
        gray900: "#101828",
      },
    },
  },
  plugins: [],
};

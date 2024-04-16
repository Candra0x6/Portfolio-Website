/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bayon: "Bayon",
        robotolight: "Roboto-Regular",
        robotobold: "Roboto-Bold",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Bayon",
          src: "url(/src/assets/fonts/Bayon-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Roboto-Regular",
          src: "url(/src/assets/fonts/Roboto-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Roboto-Bold",
          src: "url(/src/assets/fonts/Roboto-Bold.ttf)",
        },
      });
    }),
  ],
};

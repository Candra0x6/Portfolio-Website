import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
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
          src: "url(/fonts/Bayon-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Roboto-Regular",
          src: "url(/fonts/Roboto-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Roboto-Bold",
          src: "url(/fonts/Roboto-Bold.ttf)",
        },
      });
    }),
  ],
};
export default config;

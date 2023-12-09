/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        hero: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-animation": "hero 2s",
      },
    },
    colors: {
      white: "#fff",
      mainColor: "#e52f05",
      mainVariantColor: "#e52e05",
      mainDarkColor: "#323232",
    },
    backgroundImage: {
      "hero-one": "url(./images/airpods.png)",
      "hero-two": "url(./images/ipad.png)",
    },
  },
  plugins: [],
});

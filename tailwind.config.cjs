/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Robot: ["Roboto", "sans-serif"],
        FredokaOne: ["Fredoka One", "cursive"],
        LibreFranklin: ["Libre Franklin","sans-serif"],
        SingleDay: ["Single Day","cursive"]
      },
    },
  },
  plugins: [],
};

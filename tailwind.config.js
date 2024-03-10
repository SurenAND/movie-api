/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Figtree: ["Figtree"],
      },
      colors: {
        mygray: "#c8d6e5",
        myblack: "#181818",
        myyellow: "#fbc531",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-1/10": "rgba(255,255,255,0.09)",
      },
    },
    fontFamily: {
      comfortaa: "Comfortaa",
      nunito: "Nunito",
      playfair: "Playfair Display",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "bgNavbar" : "rgb(74 30 27 / 0.9)",
      "bg" : "rgb(32, 13, 1)",
      "bg2": "rgb(225, 223, 223)",
      "buttonColor" : "linear-gradient(rgb(74 30 27 / 0.9) , rgb(32, 13, 1))",
      "cardHover" : "rgb(118, 53, 12)",
      "testBg" : "rgb(252, 243, 238)",
      "lineBg" : "rgb(181, 142, 90)",
      
      
    },
  },
  plugins: [],
}
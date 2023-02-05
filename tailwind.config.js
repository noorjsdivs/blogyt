/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/().{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Satisfy", "cursive"],
      },
      colors: {
        bodyColor: "#09050D",
        textDesignColor: "#ECDEC5",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      rotate: {
        25: "25deg",
        13: "-13deg",
      },
    },
  },
  plugins: [],
};

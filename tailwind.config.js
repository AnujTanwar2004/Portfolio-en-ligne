/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Chakra Petch", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        night: "#070709",
      },
    },
  },
  plugins: [],
};

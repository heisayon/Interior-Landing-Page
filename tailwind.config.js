/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBg: "#181719",
      },
      fontFamily: {
        Lora: ["Lora", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        CrimsonPro: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
};

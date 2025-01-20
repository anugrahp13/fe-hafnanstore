/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1F509A",
        secondary: "#64748b",
        dark: "#0f172a",
        code: "#282c34",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        poppins: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};

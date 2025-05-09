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
        whatapp: "#25D366",
        shopee: "#ee4d30",
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#292421",
          burgundy: "#790D32",
          gold: "#C6A46A",
          cream: "#FAF7F2",
          muted: "#77716C",
          darkbg: "#1F1B1D",
          lighttext: "#F5EDE8",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};
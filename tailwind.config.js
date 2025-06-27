/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ["MuseoModerno", "cursive", "sans-serif"]
      },
      colors: {
        primary: "#00e0d3",
        secondary: "#1a1a2e",
        accent: "#ff6f61",
        background: "#232946"
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      },
      backdropBlur: {
        glass: '8px'
      }
    }
  },
  plugins: []
};

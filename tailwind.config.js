/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Vite entry HTML
    "./src/**/*.{js,ts,jsx,tsx}", // All React/TSX components
  ],
  theme: {
    extend: {
     keyframes: {
  moveUpDown: {
    "0%, 100%": { backgroundPosition: "center top" },
    "50%": { backgroundPosition: "center bottom" },
  },
},
animation: {
  moveUpDown: "moveUpDown 5s ease-in-out infinite",
},
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],   // modern clean
        pacifico: ["Pacifico", "cursive"],    // stylish handwritten
      },
      colors: {
        darkblue: "rgb(20,33,42)", // your custom color
      },
    },
  },
  plugins: [],
}

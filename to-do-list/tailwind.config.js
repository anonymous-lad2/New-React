/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#517FF6',
        'blue-dark': '#253663',
      },
    },
  },
  plugins: [],
}
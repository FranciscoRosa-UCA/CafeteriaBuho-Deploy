/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#14213D',
      },
      boxShadow: {
        'shadow': '0 0 20px 1px rgba(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
}

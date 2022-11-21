/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    require.resolve('react-widgets/styles.css'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

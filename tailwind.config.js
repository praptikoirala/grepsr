/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#f3f4f6ff',
        'grey-light': '#aba9a8ff',
        'grey-dark' : '#434549ff',
        'black': '#000000ff'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
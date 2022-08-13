/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'main' : '#206975',
        'compbg' : '#68B39F',
      }
    },
  },
  plugins: [],
}

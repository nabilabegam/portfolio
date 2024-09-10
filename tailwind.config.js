/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'purple',
        'secondary' : '#9e65cf',
      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

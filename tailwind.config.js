/** @type {import('tailwindcss').Config} */ 
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#2D2D2D',
        'kdarkgreen':'#1C8C64',
        'kgray':'#F9F9F9'
      },
      fontSize:{
        'kbody1':'48px',
        'kbody2':'24px',
        'kbody3':'20px',
        'kbody4':'16px',
        'kbody5':'14px',
        'kbody6':'12px'

      },
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
        serif:['Source Serif Pro', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}
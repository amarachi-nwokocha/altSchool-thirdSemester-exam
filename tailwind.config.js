/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
      colors:{
        purple: '#543EE0',
        red: '#FF1400',
      }
    },
  },
  plugins: [],
}


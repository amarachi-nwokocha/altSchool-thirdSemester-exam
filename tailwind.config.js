/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
    extend: {
      colors:{
        purple: '#543EE0',
        red: '#FF1400',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasFont: ['bebasFont', 'sans-serif'],
      },
      colors: {
        grayFooter: '#666666',
      },
      screens: {
        'xs': '470px',
      },
    },
  },
  plugins: [],
}
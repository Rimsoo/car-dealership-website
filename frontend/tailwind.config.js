/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasFont: ['bebasFont', 'sans-serif'],
        segoe: ['SegoeUI', 'sans-serif'],
      },      
      fontSize: {
          '17': '1.0625rem',
      },
      colors: {
        grayFooter: '#666666',
      },
      screens: {
        'xs': '470px',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
}
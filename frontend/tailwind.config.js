/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
          'spin-slow': 'spinner-spin 5s linear infinite',
      },
      colors: {
        grayFooter: '#666666',
      },
      fontFamily: {
        bebasFont: ['bebasFont', 'sans-serif'],
        segoe: ['SegoeUI', 'sans-serif'],
      },      
      fontSize: {
        '17': '1.0625rem',
      },
      keyframes: {
          'spinner-spin': {
              'from': { transform: 'rotate(0deg)' },
              'to': { transform: 'rotate(360deg)' },
          },
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
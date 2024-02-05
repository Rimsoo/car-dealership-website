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
      boxShadow: {
        'custom-shadow-green': '109.5px -110px hsl(120, 100%, 15%)',
        'custom-shadow-red': '109.5px -110px hsl(0, 100%, 40%)',
        'custom-shadow-yellow': '0px 70px hsl(39, 100%, 40%)',
      },
      colors: {
        grayFooter: '#666666',
        'custom-green': 'hsl(120, 100%, 15%)',
        'custom-red': 'hsl(0, 100%, 40%)',
        'custom-yellow': 'hsl(39, 100%, 40%)',
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
      },
      variants: {
        color: ['active']
      },
      zIndex: {
        '-1': '-1',
        '10': '10px',
      }
    },
  },
  plugins: [],
}
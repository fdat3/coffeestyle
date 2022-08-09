const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens : {
      'mm' : '375px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        Karla : ['Karla', 'sans-serif']
      },
      colors: {
        'coffee' : {
          50: '#a25f4b4d',
          200: '#C89F94',
          400: '#a25f4b',
          600: '#744838'
        }
      },
      keyframes: {
        slideDown: {
          '0%' : { transform: 'translateY(-100%)'},
          '100%' : { transform: 'translateY(0)'},
        },
        fadeIn : {
          from : { opacity: 0},
          to : { opacity: 1} 
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        fadeIn: 'fadeIn .4s ease-in-out',
      }
    }
  }, 
  plugins: [],
}

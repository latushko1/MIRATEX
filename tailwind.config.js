/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': {'max': '480px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'max': '1780px'},
      'ad':{'max':'360px'},
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#161616',
        bgModal: '#161616c4'

      },
    },


  },
  plugins: [],
}

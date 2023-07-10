/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bgpink' : '#FDCEDF',
        'bgpinkstrong' : '#F2BED1',
        'bgwhite' : '#F8E8EE',
        'bgwhitestrong' : '#F9F5F6'
      }
    },
  },
  plugins: [],
}


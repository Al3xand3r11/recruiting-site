/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['oswald ', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': 'url("assets/herobackground.png")'
      },
      colors: {
        'grey': '#737373'
      }
      
  },
},
  plugins: [],
}


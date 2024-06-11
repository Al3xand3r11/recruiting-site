/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['oswald ', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': 'url("assets/herobackground.png")',
        'top-section': 'url(assets/washington.png)',
        'bottom-section': 'url(assets/crowd.png)',
      },
      colors: {
        'grey': '#737373'
      }
      
  },
},
  plugins: [],
}


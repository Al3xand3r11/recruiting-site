/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['oswald ', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': 'url("assets/herobackground.jpeg")',
        'top-section': 'url(assets/washington.jpeg)',
        'bottom-section': 'url(assets/crowd.jpeg)',
        'employer-image': 'url("assets/employer.jpeg")',
        'seeker-image': 'url("assets/seekers.jpeg")'
      },
      colors: {
        'grey': '#737373',
        'yellow': '#EFCA08',
        'customblue': '#BBDEF0',
        'teal': '#00A6A6',
      },
      height: {
        'md': '60px',
        'lg': '700px', 
        'xl': '850px',
      }
      
  },
},
  plugins: [],
}


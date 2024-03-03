/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'main-white': 'var(--main-white)',
        'main-black': 'var(--main-black)',
        'main-color': 'var(--main-color)',
        'sec-color': 'var(--sec-color)',
        'dark-gray': 'var(--dark-gray)',
        'light-gray': 'var(--light-gray)',
        'th1-btn': 'var(--th1-btn)',
        'th2-btn': 'var(--th2-btn)',
        'th3-btn': 'var(--th3-btn)',
      },
      fontFamily: { 
        'roboto': 'var(--roboto)',
      },
      boxShadow: { 
        'card': 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
      },
      screens: { 
        '450': '450px',
        '550': '550px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}


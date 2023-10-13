/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}'],
  theme: {
    container:{
      padding: '20px',
      center: true,
    },
    colors:{
      color2: '#000000',
      color1: '#FFFFFF',
      color3: '#404040',
      color4: '#003D45',
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1028px',
      xl: '1440px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}


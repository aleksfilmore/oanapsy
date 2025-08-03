/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Permite activarea modului dark
  theme: {
    extend: {
      colors: {
        cream: '#FBF9F4',
        ivory: '#F5F1E9',
        'deep-earth': '#3D3A36',
        'charcoal-text': '#4A4642',
        'cream-text': '#EAE6DD',
        terracotta: '#B96D40',
        sage: {
          light: '#C8D1B8',
          DEFAULT: '#90A17D',
          dark: '#5A663D',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Asigură un font consistent
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin pentru stilizarea textului din blog
    require('@tailwindcss/forms'), // Plugin pentru stilizarea formularelor
  ],
}

export default config

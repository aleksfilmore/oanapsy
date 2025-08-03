/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Permite activarea modului dark
  theme: {
    extend: {
      colors: {
        // Primary warm palette - inspired by therapy warmth
        cream: '#FBF9F4',
        ivory: '#F8F4E6',
        'warm-beige': '#F5EFE7',
        'soft-yellow': '#F9F1C4',
        'golden-honey': '#E8C77F',
        
        // Earth tones for grounding
        'deep-earth': '#3D3A36',
        'rich-brown': '#8B6914',
        'charcoal-text': '#4A4642',
        'warm-gray': '#6B6B6B',
        
        // Accent colors
        'cream-text': '#EAE6DD',
        'terracotta': '#D17A47', // Made more vibrant
        'warm-orange': '#E88B4A',
        'soft-coral': '#F4A261',
        
        // Nature-inspired greens
        sage: {
          light: '#D4E2C2',
          DEFAULT: '#A8C686',
          dark: '#7A9B57',
          deep: '#5A7A3F',
        },
        
        // Calming blues for trust
        'soft-blue': '#A8C8EC',
        'trust-blue': '#7BA7D1',
        
        // Supporting neutrals
        'light-sand': '#F7F3E9',
        'warm-white': '#FEFCF7',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'], // For headings
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'warm': '0 4px 20px rgba(209, 122, 71, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin pentru stilizarea textului din blog
    require('@tailwindcss/forms'), // Plugin pentru stilizarea formularelor
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F09819',
        'amber': '#E8A838',
        'gold': '#D4A844',
        'gold-light': '#F5D68A',
        'gray-dark': '#515054',
        'gray': '#C4C4C4',
        'gray-light': '#F1F1F1',
        'surface': '#111111',
        'surface-light': '#1A1A1A',
        'surface-border': '#2A2A2A',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
        ultra: '.5em',
      },
      blur: {
        '5xl': '125px',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
          '2xl': '1024px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

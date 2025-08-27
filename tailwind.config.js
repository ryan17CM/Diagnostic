/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'nav': '950px',   // Breakpoint spécial pour la navbar
      },  // ← ici il manquait une virgule
      fontFamily: {
        inter: ['InterUI', 'sans-serif'],
      },
      colors: {
        primary: '#2AD07F',
        secondary: '#15803D',
        accent: '#0094B8',
        tertiary: '#F39F4A',
        blueAccent: '#2250A0',
      },
    },
  },
  plugins: [],
}

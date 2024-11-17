/** @type {import('tailwindcss').Config} */
export default {
  content: ["./indexedDB.html", "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      margin: {
        '224': '224px',
        '256': '256px',
        '500': '500px',
      },
      colors: {
        'navBarColor': '#3F5919',
        'galeryTankColor': '#3F5919',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          backgroundColor: '#b0b0b0', 
          color: '#fff',
          fontWeight: '600',
          padding: '1rem 1rem',
          borderRadius: '0.375rem', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out', 
        },
        '.btn:hover': {
          backgroundColor: '#999', 
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)', 
        },
      })
    }

  ],
}
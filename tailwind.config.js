/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0b1e36',
          dark: '#081426',
          primary: '#0d3880',
          accent: '#0284c7',
          sky: '#38bdf8',
          teal: '#0d9488',
          gold: '#d97706',
          surface: '#f8fafc',
          border: '#e2e8f0',
        },
        imd: {
          blue: '#1e40af',
          lightBlue: '#e0f2fe',
          orange: '#ea580c',
          green: '#16a34a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

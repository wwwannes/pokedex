/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#F2F2F2',
          300: '#A4A5A6',
          400: '#363638',
          500: '#2A2A2B',
          700: '#18191A',
          900: '#0B0C0D'
        }
      }
    }
  },
  plugins: []
}

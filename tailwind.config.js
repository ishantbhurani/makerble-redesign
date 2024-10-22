/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#333',
        secondary: '#555',
        tertiary: '#999',
        accent: '#0f766e',
      },
    },
  },
  plugins: [],
}

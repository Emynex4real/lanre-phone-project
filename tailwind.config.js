/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: 'rgb(189, 47, 102)',
          green: '#10b981',
        },
        background: {
          light: '#f8fafc',
          white: '#ffffff',
        },
        text: {
          dark: '#1f2937',
          light: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
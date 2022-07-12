/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#110F12',
          dark: '#181619',
          light: '#1C1C1C',
        },
        secondary: {
          main: '#2C2C9E',
        },
        text: {
          heading: '#F5F6F8',
          dark: '#807E81',
          light: '#B8B6B9',
        },
      },
      gridTemplateColumns: {
        '350px': 'min(350px) 1fr',
      },
    },
  },
  plugins: [],
}

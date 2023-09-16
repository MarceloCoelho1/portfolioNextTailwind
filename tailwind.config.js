/** @type {import('tailwindcss').Config} */

const tailwindcssDarkMode = require('tailwindcss-dark-mode');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js, ts, jsx, tsx, mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#333333', // Cor de fundo para dark mode
        light: '#ffffff', // Cor de fundo para light mode
      },
    },
  },
  plugins: [
    tailwindcssDarkMode
  ],
}

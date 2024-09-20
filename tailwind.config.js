/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      fontFamily: {
        chillax: ['Chillax', ...defaultTheme.fontFamily.sans],
        switzer: ['Switzer', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = ['./src/**/*.{html,ts}']
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Comfortaa'],
      serif: ['Comforter'],
    },
  },
}
export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('tailwindcss-animate'),
]

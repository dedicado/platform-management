/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const content = ['./src/**/*.{html,ts}']
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Comfortaa'],
    },
  },
}
export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('tailwindcss-animate'),
]

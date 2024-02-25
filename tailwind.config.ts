import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-comfortaa)'],
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}
export default config
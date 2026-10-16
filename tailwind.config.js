/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080d14', // Deep cyber navy
        navBg: 'rgba(8, 13, 20, 0.95)',
        heroBg: '#080d14',
        accent: '#0ae8d8', // Glowing teal
        accentSecondary: '#ffb700', // Tech amber
        textMain: '#e8e6df', // Cream/off-white
        textLight: '#ffffff',
        textMuted: '#7b8b9a', // Cool gray
        surface: '#0d1520', // Slightly lighter panel bg
        border: '#162a35' // Subtle tech border
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        display: ['"Teko"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
    },
  },
  plugins: [],
}

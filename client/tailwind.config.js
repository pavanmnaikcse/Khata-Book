/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./store.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Kalam"', 'cursive'],
      },
      colors: {
        cream: '#FAF8F3',
        brand: {
          dark: '#0E5A27',
          mid: '#136B30',
          light: '#228B44',
          deep: '#065724',
        },
        mint: {
          50: '#ECF7E7',
          100: '#E6F3DC',
          200: '#DCF1D3',
          300: '#D4EECF',
          bar: '#E2F1E3',
          divider: '#C5DAB4',
          wave: '#8BD491',
        },
        card: {
          pink: '#FDE4E4',
          green: '#E6F4DC',
          peach: '#FDEBD2',
          lavender: '#ECE3FA',
          pill: '#EFECE2',
        },
      },
    },
  },
  plugins: [],
};

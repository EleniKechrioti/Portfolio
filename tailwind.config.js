/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Ορίζουμε την JetBrains Mono ως την προεπιλεγμένη mono γραμματοσειρά
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
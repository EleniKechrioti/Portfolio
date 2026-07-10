/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        charcoal: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e0e0e0',
          700: '#434343',
          800: '#2a2a2a',
          900: '#1a1a1a',
          950: '#0f0f0f', 
        },
      },
    },
  },
  plugins: [],
};
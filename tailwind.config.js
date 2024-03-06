/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-1': {
          1: '#04364A',
          2: '#176B87',
          3: '#64CCC5',
          4: '#DAFFFB',
        },
      },
    },
  },
  plugins: [],
}


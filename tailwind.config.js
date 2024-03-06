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
          1: '#025464',
          2: '#E57C23',
          3: '#E8AA42',
          4: '#F8F1F1',
        },
      },
    },
  },
  plugins: [],
}


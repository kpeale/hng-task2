/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'peach-10': '#DCA47C',
        'pink-20': '#FFD3B6',
        'white-30': '#FCF8F3',
        'green-40': '#698474',
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
    screens: {
      esm: '300px',
      xs: '450px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};

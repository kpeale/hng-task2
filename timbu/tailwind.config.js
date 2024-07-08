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
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};

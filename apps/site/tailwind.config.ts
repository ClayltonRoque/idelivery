const theme = require('../../libs/config/src/lib/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: false,
  },
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        primary: ['open-sans', 'sans-serif'],
      },
    },
  },
};

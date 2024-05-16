/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: false,
  },

  theme: {
    extend: {
      colors: {
        cinnabar: {
          '50': '#fff2f1',
          '100': '#ffe3e0',
          '200': '#ffccc7',
          '300': '#ffa79f',
          '400': '#ff7468',
          '500': '#fa4939',
          '600': '#ea3f30',
          '700': '#c32012',
          '800': '#a11e13',
          '900': '#852017',
          '950': '#490b06',
        },
        malachite: {
          '50': '#f0fdf0',
          '100': '#dbfddd',
          '200': '#b9f9bc',
          '300': '#82f38a',
          '400': '#45e351',
          '500': '#26e134',
          '600': '#11a81d',
          '700': '#11841a',
          '800': '#13681a',
          '900': '#125519',
          '950': '#042f09',
        },
        white: '#ffffff',
        neutral: '#0b0a0b',
        success: '#26e134',
        caution: '#e2a83b',
        danger: '#ba2417',
        info: '#246fba',
      },

      fontFamily: {
        primary: ['open-sans', 'sans-serif'],
      },
    },
  },
};

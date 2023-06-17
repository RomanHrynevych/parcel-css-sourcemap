/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * FD content
   * **/
  content: ['./src/**/*.{html,js,ejs}'],

  /**
   * SD content
   * **/
  // content: ['./app/modules/**/*.php', './app/layout/**/*.php', './app/modules/!admin/**', './app/public/js/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#161616',
      },
    },
  },
  plugins: [],
};

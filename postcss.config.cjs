const path = require('path');
const ownFunctions = require('./config/pcss-functions.cjs');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-mixins')({
      mixinsDir: path.join(__dirname, '/src/styles/mixins'),
    }),
    require('postcss-extend'),
    require('postcss-functions')({
      functions: ownFunctions,
    }),
    require('postcss-custom-properties'),
    require('postcss-color-mod-function'),
    require('postcss-short')({
      features: {
        position: false,
      },
    }),
    require('cq-prolyfill/postcss-plugin.js'),
  ],
};

module.exports = config;

'use strict';

module.exports = {
  plugins: ['css-modules'],
  rules: {
    // https://github.com/atfzl/eslint-plugin-css-modules
    'css-modules/no-unused-class': ['error', { camelCase: true }],
    'css-modules/no-undef-class': ['error', { camelCase: true }]
  }
};

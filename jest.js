'use strict';

module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: ['jest'],
  rules: {
    'max-len': 'off',
    'no-magic-numbers': 'off',
    'no-console': 'off',

    // https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'warn'
  }
};

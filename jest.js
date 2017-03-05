'use strict';

module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  rules: {
    'max-len': 0,
    'no-magic-numbers': 0,
    'no-console': 0,

    // https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 1
  }
};

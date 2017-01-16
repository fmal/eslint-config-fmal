'use strict';

module.exports = {
  env: {
    jest: true
  },
  plugins: [
    'jest'
  ],
  rules: {
    'max-len': 0,
    'no-magic-numbers': 0,
    'no-console': 0,

    // https://github.com/jkimbo/eslint-plugin-jest
    'jest/no-exclusive-tests': 1,
    'jest/no-identical-title': 1
  }
};

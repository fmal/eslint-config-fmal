'use strict';

module.exports = {
  parser: 'babel-eslint',
  rules: {
    // ES6 modules do not require an explicit declaration of 'strict mode'
    strict: ['error', 'never'],
    'no-var': 'error',
    'prefer-const': 'error',
    'object-shorthand': 'warn'
  }
};

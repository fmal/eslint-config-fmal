'use strict';

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    // ES6 modules do not require an explicit declaration of 'strict mode'
    strict: ['error', 'never'],
    'object-shorthand': 'warn'
  }
};

'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: {
    // ES6 modules do not require an explicit declaration of 'strict mode'
    'strict': [2, 'never'],
    'no-var': 2,
    'prefer-const': 2,
    'generator-star-spacing': 0,
    'array-bracket-spacing': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,

    // https://github.com/babel/eslint-plugin-babel
    'babel/generator-star-spacing': [2, 'after'],
    'babel/object-curly-spacing': [1, 'always'],
    'babel/array-bracket-spacing': [1, 'never'],
    'babel/object-shorthand': [1, 'always'],
    'babel/arrow-parens': [1, 'as-needed']
  }
};

'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: {
    'strict': [2, 'never'],
    'generator-star-spacing': 0,
    'object-shorthand': 0,

    // https://github.com/babel/eslint-plugin-babel
    'babel/generator-star-spacing': [2, 'after'],
    'babel/object-curly-spacing': [1, 'always'],
    'babel/object-shorthand': [1, 'always']
  }
};

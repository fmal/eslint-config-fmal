'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: {
    'babel/generator-star-spacing': [2, 'after'],
    'babel/object-curly-spacing': [1, 'always'],
    'babel/object-shorthand': [1, 'always'],

    'generator-star-spacing': 0,
    'object-shorthand': 0,
    'strict': [2, 'never']
  }
};

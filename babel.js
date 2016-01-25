'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  ecmaFeatures: {
    'experimentalObjectRestSpread': true,
    'modules': true
  },
  env: {
    'es6': true
  },
  rules: {
    'prefer-const': 2,
    'babel/generator-star-spacing': [2, 'after'],
    'babel/object-curly-spacing': [1, 'always'],
    'babel/object-shorthand': [1, 'always'],
    'babel/arrow-parens': [2, 'as-needed']
  }
};

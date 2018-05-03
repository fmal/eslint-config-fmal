'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error'
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(css|scss)$',
      '.(jpg|png|gif|svg|html|txt|md|woff|woff2|ttf|eot)$'
    ]
  }
};

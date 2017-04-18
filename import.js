'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/imports-first': 'error',
    'import/newline-after-import': 'warn',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error'
  },
  settings: {
    'import/ignore': ['.css$']
  }
};

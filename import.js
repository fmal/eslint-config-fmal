'use strict';

module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/named': 2,
    'import/default': 2,
    'import/no-absolute-path': 2,
    'import/export': 2,
    'import/imports-first': 2,
    'import/newline-after-import': 1,
    'import/no-duplicates': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2
  },
  settings: {
    'import/ignore': [
      '.css$'
    ]
  }
};

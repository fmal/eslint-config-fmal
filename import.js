'use strict';

module.exports = {
  plugins: ['import'],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    // some of the rules are inherited from
    // https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json
    'import/named': 'error',
    'import/default': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/newline-after-import': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal'],
        pathGroups: [{ pattern: '{@/**,~/**}', group: 'internal' }],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '.json$',
      '.(css|scss)$',
      '.(jpg|png|gif|svg|html|txt|md|woff|woff2|ttf|eot)$'
    ],
    'import/external-module-folders': ['node_modules', '.yarn']
  }
};

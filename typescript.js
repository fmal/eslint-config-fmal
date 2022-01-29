'use strict';

module.exports = {
  parserOptions: {
    jsx: true
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    },
    // https://github.com/benmosher/eslint-plugin-import/issues/1525
    // https://github.com/import-js/eslint-plugin-import#importexternal-module-folders
    'import/external-module-folders': [
      '.yarn',
      'node_modules',
      'node_modules/@types'
    ]
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      parser: '@typescript-eslint/parser',
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array'
          }
        ],
        '@typescript-eslint/prefer-as-const': 'error',
        // Enforce camelCase naming convention and PascalCase class and interface names
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow'
          },
          {
            selector: 'default',
            filter: {
              match: true,
              // Allow double underscores and React UNSAFE_ (for lifecycle hooks that are to be deprecated)
              regex: '^(__|UNSAFE_).+$'
            },
            format: null
          },
          {
            selector: 'typeLike',
            format: ['PascalCase']
          }
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter'
          }
        ],
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never'
          }
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        // already supported by TS
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-shadow': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        // typedef files with multiple modules with export default
        'import/export': 'off'
      }
    }
  ]
};

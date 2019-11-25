'use strict';

module.exports = {
  extends: 'prettier/@typescript-eslint',
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
    'import/external-module-folders': ['node_modules', 'node_modules/@types']
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
        '@typescript-eslint/class-name-casing': 'error',
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
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never'
          }
        ],
        '@typescript-eslint/no-namespace': 'error',

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

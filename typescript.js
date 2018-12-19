'use strict';

module.exports = {
  plugins: ['typescript'],
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      parser: 'typescript-eslint-parser',
      rules: {
        // https://github.com/bradzacher/eslint-plugin-typescript
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/type-annotation-spacing': 'off', // defer to prettier
        'typescript/member-delimiter-style': 'off', // defer to prettier
        'typescript/no-array-constructor': 'error',
        'typescript/no-inferrable-types': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        // 'typescript/array-type': ['error', 'array-simple'],
        'typescript/no-var-requires': 'error',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-namespace': 'error',

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

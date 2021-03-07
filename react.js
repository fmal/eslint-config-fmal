'use strict';

const hasJsxRuntime = (() => {
  try {
    require.resolve('react/jsx-runtime.js');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = {
  extends: 'prettier/react',
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react
    ...(!hasJsxRuntime && {
      'react/jsx-uses-react': 'warn',
      'react/react-in-jsx-scope': 'error'
    }),
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-no-literals': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/no-danger': 'warn',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-deprecated': 'error',
    'react/no-unknown-property': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      rules: {
        'react/jsx-filename-extension': 'off'
      }
    }
  ]
};

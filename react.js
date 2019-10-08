'use strict';

module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-no-literals': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': 'warn',
    'react/no-danger': 'warn',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-deprecated': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'warn',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'warn'
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

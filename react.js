'use strict';

module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],

    // https://github.com/yannickcr/eslint-plugin-react
    'react/display-name': 2,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [1, { maximum: 3 }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-handler-names': 1,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-space-before-closing': 2,
    'react/jsx-no-bind': 1,
    'react/no-danger': 1,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-set-state': 0,
    'react/no-deprecated': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 2,
    'react/sort-comp': 1
  }
};

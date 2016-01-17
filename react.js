'use strict';

module.exports = {
  plugins: [
    'react'
  ],
  ecmaFeatures: {
    'jsx': true
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/display-name': [2, {'acceptTranspilerName': true}],
    'react/jsx-boolean-value': [1, 'never'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-max-props-per-line': [1, {'maximum': 2}],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 1,
    'react/require-extension': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 1,
    'react/wrap-multilines': 2
  }
};

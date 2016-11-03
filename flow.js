'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'flowtype-errors'
  ],
  rules: {
    // https://github.com/amilajack/eslint-plugin-flowtype-errors
    'flowtype-errors/show-errors': 2,

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/space-after-type-colon': [1, 'always'],
    'flowtype/space-before-type-colon': [1, 'never']
  },
  settings: {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    }
  }
};

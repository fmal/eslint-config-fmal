'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype', 'flowtype-errors'],
  rules: {
    // https://github.com/amilajack/eslint-plugin-flowtype-errors
    'flowtype-errors/show-errors': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/use-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'error'
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  }
};

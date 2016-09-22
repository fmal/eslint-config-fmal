'use strict';

var assert = require('assert');
var config = require('../');
var reactConfig = require('../react');
var babelConfig = require('../babel');
var importConfig = require('../import');

assert.deepEqual(config.extends, [
  'eslint:recommended',
  'semistandard'
]);
assert.equal(config.env.browser, true);

assert(~reactConfig.plugins.indexOf('react'));
assert(reactConfig.parserOptions.ecmaFeatures.jsx);

assert(babelConfig.parser === 'babel-eslint');
assert(~babelConfig.plugins.indexOf('babel'));

assert(~importConfig.plugins.indexOf('import'));

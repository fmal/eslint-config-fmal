'use strict';

var assert = require('assert');
var config = require('../');
var reactConfig = require('../react');
var babelConfig = require('../babel');
var flowConfig = require('../flow');
var importConfig = require('../import');
var mochaConfig = require('../mocha');
var jestConfig = require('../jest');
var cssModulesConfig = require('../css-modules');

assert.deepEqual(config.extends, ['standard', 'prettier']);
assert(~config.plugins.indexOf('prettier'));
assert(~Object.keys(config.rules).indexOf('prettier/prettier'));
assert.equal(config.env.browser, true);

assert(~reactConfig.plugins.indexOf('react'));
assert(reactConfig.parserOptions.ecmaFeatures.jsx);

assert(babelConfig.parser === 'babel-eslint');

assert(flowConfig.parser === 'babel-eslint');
assert(~flowConfig.plugins.indexOf('flowtype'));
assert(~flowConfig.plugins.indexOf('flowtype-errors'));

assert(~importConfig.plugins.indexOf('import'));

assert.equal(mochaConfig.env.mocha, true);
assert.equal(jestConfig.env['jest/globals'], true);

assert(~cssModulesConfig.plugins.indexOf('css-modules'));

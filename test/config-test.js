'use strict';

const assert = require('assert');
const config = require('../');
const reactConfig = require('../react');
const babelConfig = require('../babel');
const flowConfig = require('../flow');
const importConfig = require('../import');
const mochaConfig = require('../mocha');
const jestConfig = require('../jest');
const cssModulesConfig = require('../css-modules');

assert.deepEqual(config.extends, ['standard', 'prettier', 'prettier/standard']);
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

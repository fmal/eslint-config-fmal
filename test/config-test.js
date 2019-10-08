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
const typescriptConfig = require('../typescript');

assert.deepStrictEqual(config.extends, [
  'standard',
  'prettier',
  'prettier/standard'
]);
assert(~config.plugins.indexOf('prettier'));
assert(~Object.keys(config.rules).indexOf('prettier/prettier'));
assert.strictEqual(config.env.browser, true);

assert(~reactConfig.plugins.indexOf('react'));
assert(reactConfig.parserOptions.ecmaFeatures.jsx);

assert(babelConfig.parser === 'babel-eslint');

assert(flowConfig.parser === 'babel-eslint');
assert(~flowConfig.plugins.indexOf('flowtype'));
assert(~flowConfig.plugins.indexOf('flowtype-errors'));

assert(~importConfig.plugins.indexOf('import'));

assert.strictEqual(mochaConfig.env.mocha, true);
assert.strictEqual(jestConfig.env['jest/globals'], true);

assert(~cssModulesConfig.plugins.indexOf('css-modules'));

assert(~typescriptConfig.plugins.indexOf('@typescript-eslint'));
assert(typescriptConfig.overrides && typescriptConfig.overrides.length > 0);
assert(typescriptConfig.overrides[0].parser === '@typescript-eslint/parser');

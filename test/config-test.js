'use strict';

var assert = require('assert');
var config = require('../');
var reactConfig = require('../react');
var babelConfig = require('../babel');

assert.equal(config.env.node, true);

assert((reactConfig.plugins || []).indexOf('react') > -1);
assert(reactConfig.ecmaFeatures.jsx);
assert(reactConfig.rules['react/jsx-no-undef'], 2);

assert(babelConfig.parser === 'babel-eslint');
assert(babelConfig.env.es6);
assert(babelConfig.ecmaFeatures.modules);

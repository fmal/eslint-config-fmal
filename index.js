'use strict';

const path = require('path');
const fs = require('fs');

const content = fs.readFileSync(
  path.join(__dirname, '.eslintrc.json'),
  'utf-8'
);
const config = JSON.parse(content);

module.exports = config;

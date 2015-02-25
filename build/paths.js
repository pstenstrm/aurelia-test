var path = require('path');

var appRoot = 'src/js';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'src/styl/**/*.styl',
  styl: 'src/styl/*.styl',
  stylDest: 'css/',
  output: 'dist/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
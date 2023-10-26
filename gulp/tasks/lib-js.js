const { src, dest } = require('gulp');
const path = require('../config/path.js');
const include = require('gulp-include');

module.exports = function libJs() {
  return src(path.libJs.src)
    .pipe(include())
    .pipe(dest(path.libJs.build))
}
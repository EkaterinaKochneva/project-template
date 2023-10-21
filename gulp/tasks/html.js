const { src, dest } = require('gulp');
const path = require('../config/path.js');
const browserSync = require('browser-sync');
const fileInclude = require('gulp-file-include');

module.exports = function html() {
  return src(`${path.html.src}`)
    .pipe(fileInclude())
    .pipe(dest(`${path.html.build}`))
}
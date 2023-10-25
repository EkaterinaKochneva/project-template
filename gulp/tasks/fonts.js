const { src, dest } = require('gulp');
const path = require('../config/path.js');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

module.exports = function fonts() {
  return src(path.fonts.src)
    .pipe(newer(path.fonts.build))
    .pipe(fonter({
      formats: ['ttf','woff']
    }))
    .pipe(dest(path.fonts.build))
    .pipe(ttf2woff2())
    .pipe(dest(path.fonts.build))
}
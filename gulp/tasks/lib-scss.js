const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const sass = require('gulp-sass')(require('sass'));

module.exports = function libScss() {
  return src(path.libScss.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(dest(path.libScss.build))
}
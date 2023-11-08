const { src, dest } = require('gulp');
const path = require('../config/path.js');
const fileInclude = require('gulp-file-include');
const rename = require('gulp-rename');

module.exports = function html() {
  return src(path.html.src)
    .pipe(fileInclude())
    .pipe(rename(function (path) {
      return {
        basename: path.dirname.replace("/index", ""),
        dirname: "",
        extname: ".html"  
      };
    })) 
    .pipe(dest(path.html.build))
}
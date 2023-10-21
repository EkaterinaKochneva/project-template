const { src, dest } = require('gulp');
const path = require('../config/path.js');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const groupCssMediaQueries = require('gulp-group-css-media-queries');

module.exports = function style() {
  return src(`${path.styles.src}`)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(groupCssMediaQueries())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(dest(`${path.styles.build}`)) //Раскомментировать если нужен не сжатый дубль файла стилей
    .pipe(cleanCss())    
    .pipe(concat('style.min.css'))
    .pipe(dest(`${path.styles.build}`))
}
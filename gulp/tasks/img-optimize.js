const { src, dest } = require('gulp');
const path = require('../config/path.js');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

module.exports = function imgOptimize() {
  return src(`${path.imgOptimize.src}`)
    .pipe(newer(`${path.imgOptimize.build}`))
    .pipe(webp())
    .pipe(dest(`${path.imgOptimize.build}`))
    .pipe(src(`${path.imgOptimize.src}`))
    .pipe(newer(`${path.imgOptimize.build}`))
    .pipe(imagemin({    
      progressive: true,
      scgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    }))
    .pipe(dest(`${path.imgOptimize.build}`))
}
const gulp = require('gulp');
const browserSync = require('browser-sync');
const path = require('./gulp/config/path.js');

//Сервер
const server =() => {
	browserSync.init({
		server: {
			baseDir: `${path.buildFolder}`,
			serveStaticOptions: {
        extensions: ['html'],
      },
		},
		notify: false,
    port: 3000,
    open: true,
	});
}

// Задачи
const html = require('./gulp/tasks/html.js')
const style = require('./gulp/tasks/style.js')

exports.html = html;
exports.style = style;
exports.server = server;

//Сборка

exports.default = gulp.series(
  html,
  style,
  server
)
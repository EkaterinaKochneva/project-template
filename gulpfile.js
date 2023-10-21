const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
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
const clear = require('./gulp/tasks/clear.js')
const html = require('./gulp/tasks/html.js')
const style = require('./gulp/tasks/style.js')


//Наблюдатель
const watcher = () => {
  watch(`${path.html.watch}`, html).on('all', browserSync.reload);
  watch(`${path.styles.watch}`, style).on('all', browserSync.reload);
}

exports.clear = clear;
exports.html = html;
exports.style = style;
exports.server = server;
exports.watcher = watcher;

//Сборка
exports.default = series(
  clear,
  parallel(html, style),
  parallel(watcher, server)
)
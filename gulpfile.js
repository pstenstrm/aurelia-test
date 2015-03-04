(function () {
	"use strict";

	var
		gulp = require("gulp"),
		jshint = require("gulp-jshint"),
		jhStylish = require("jshint-stylish"),
		chokidar = require("glob-chokidar"),
		stylus = require("gulp-stylus"),
		nib = require("nib"),
		chalk = require("chalk"),
		fs = require("fs"),
		inlineSvg = require('stylus-inline-svg'),
		jshintrc = JSON.parse(fs.readFileSync("./.jshintrc", "utf-8")),
		paths = {
			js: {
				listen: ["src/js/**/*.js"]
			},

			css: {
				listen: ["src/styl/**/*.styl"],
				source: ["src/styl/*.styl"],
				dest: "css"
			}
		};

	/* Style */
	require('require-dir')('build/tasks');

	gulp.task("cssExtraWatch", ["styl"], function() {
		chokidar(paths.css.listen, function(ev, path) {
			console.log("[" + chalk.green("glob-chokidar") + "] File event '" + chalk.cyan(ev) + "' in file: " + chalk.magenta(path));

			gulp.start("styl");
		});
	});

	gulp.task("styl", function() {
		return gulp.src(paths.css.source)
			.pipe(stylus({
				use: [nib()],
				define: {
					url: inlineSvg({paths: ['src/styl']})
				}
			})
			.on('error', stylError))
			.pipe(gulp.dest(paths.css.dest));
	});

	/* Scripts */

	gulp.task("jsExtraWatch", function() {
		chokidar(paths.js.listen, function(ev, path) {
			console.log("[" + chalk.green("glob-chokidar") + "] File event '" + chalk.cyan(ev) + "' in file: " + chalk.magenta(path));

			gulp.src(path)
				.pipe(jshint(jshintrc))
				.pipe(jshint.reporter(jhStylish));
		});
	});

	gulp.task("ExtraWatch", ["jsExtraWatch", "cssExtraWatch"]);

	gulp.task("default", ["ExtraWatch", 'watch']);

	function stylError(err) {
		console.log(err.message);
		//console.log(err.stack);

		this.emit('end');
	}
})();
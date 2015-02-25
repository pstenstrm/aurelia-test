var gulp = require('gulp');
var paths = require('../paths');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('build-stylus', function () {
	return gulp.src(paths.styl)
		.pipe(stylus({use: [nib()]})
		.on('error', stylError))
		.pipe(gulp.dest(paths.stylDest));
});

function stylError(err) {
	console.log(err.message);
	//console.log(err.stack);

	this.emit('end');
}
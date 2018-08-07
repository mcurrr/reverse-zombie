var gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	livereload = require('gulp-livereload'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify');

gulp.task('scripts', function() {
	return browserify('./public/js/game.js')
			.bundle()
			.pipe(source('canvas.js'))
			.pipe(gulp.dest('public/build/'))
			.pipe(livereload());
});

gulp.task('watch', function() {

	gulp.watch('public/js/*.js', ['scripts']);

	livereload.listen();

	gulp.watch('*').on('change', livereload.changed);
	gulp.watch('*/*').on('change', livereload.changed);
});

gulp.task('default', ['scripts', 'watch']);
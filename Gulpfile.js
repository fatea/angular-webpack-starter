var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var del = require('del');
//var named = require('vinyl-named');

var paths = {scripts: ['app/**/*.js']};

gulp.task('clean', () => {
  return del(['dist/*', '!dist/views']);
});

gulp.task('copy-index-html', () => {
  return gulp.src(['./app/test.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-views', () => {
  return gulp.src(['./app/views/*'])
    .pipe(gulp.dest('dist/views'));
});

gulp.task('webpack', function () {
  return gulp.src(['babel-polyfill', './app/test.js'])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});


gulp.task('build', ['clean', 'copy-index-html', 'webpack']);

gulp.task('watch', () => {
  gulp.watch(paths.scripts, ['build']);
});

gulp.task('default', ['build', 'watch']);

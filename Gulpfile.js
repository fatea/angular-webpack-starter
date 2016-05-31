var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var named = require('vinyl-named');

gulp.task('default', function () {
  return gulp.src(['babel-polyfill', './app/test.js'])
  .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

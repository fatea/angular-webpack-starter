var gulp = require('gulp');
var webpack = require('webpack-stream');
var watch = require('gulp-watch');
var del = require('del');

var paths = {scripts: ['app/**/*.js']};
//var named = require('vinyl-named');

gulp.task('clean', () => {
  return del(['dist/*', '!dist/views']);
});


gulp.task('webpack', function () {
    //return gulp.src(['./app/test.js'])
  return gulp.src(['babel-polyfill', './app/test.js'])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  gulp.watch(paths.scripts, ['clean, webpack']);
});

gulp.task('default', ['clean', 'webpack']);

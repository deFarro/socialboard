'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var server = require('browser-sync').create();
var del = require('del');
var jest = require('gulp-jest').default;

gulp.task('build', ['clean'], () => {
  return gulp.src('src/js/index.js')
    .pipe(gulpWebpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-prod', ['build'], () => {
  gulp.src('dist/bundle.js')
    .pipe(uglify())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['build'], () => {
  server.init({server: {baseDir: "./"}});
  gulp.watch('src/**/*', ['build'])
  gulp.watch('dist/bundle.js').on('change', server.reload);
});

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('test', () => {
  process.env.NODE_ENV = 'test';
  return gulp.src('test')
    .pipe(jest(require('./jest.config.js')));
});

gulp.task('default', ['serve']);

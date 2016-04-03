'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var ngConfig = require('gulp-ng-config');

gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

function buildScripts() {
  gulp.src(conf.paths.src + '/config/index.constants-env.json')
  .pipe(ngConfig('sheaker', {
    environment: conf.options.mode,
    createModule: false,
    wrap: '(function () {\n    \'use strict\';\n\n<%= module %>\n})();'
  }))
  .pipe(gulp.dest(conf.paths.src + '/app/'));

  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};

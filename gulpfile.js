const gulp = require('gulp');
const path = require('path');
const pump = require('pump');
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

var jsfolder = path.join(__dirname, 'js/');
var jsfiles = [
  'source.js'
].map((file) => {return jsfolder + file;});

var cssfolder = path.join(__dirname, 'style/');
var cssfiles = [
  'style.less'
].map((file) => {return cssfolder + file;});

gulp.task('js', (cb) => {
  pump([
    gulp.src(jsfiles),
    sourcemaps.init(),
    concat('scripts.js'),
    uglify(),
    sourcemaps.write(),
    gulp.dest(jsfolder)
  ], cb);
});

gulp.task('css', (cb) => {
  pump([
    gulp.src(cssfiles),
    sourcemaps.init(),
    less(),
    cleanCSS(),
    concat('style.css'),
    sourcemaps.write(),
    gulp.dest(cssfolder)
  ], cb);
});

gulp.task('watch', () => {
  gulp.watch(jsfiles, ['js']);
  gulp.watch(cssfiles, ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);

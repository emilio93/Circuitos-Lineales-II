/* Copyright 2016 Emilio Rojas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gulp =       require('gulp');
const path =       require('path');
const pump =       require('pump');
const less =       require('gulp-less');
const concat =     require('gulp-concat');
const uglify =     require('gulp-uglify');
const htmlmin =    require('gulp-htmlmin');
const cleanCSS =   require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

var distfolder = 'dist';
var debugfolder = 'debug';

var jsfolder = 'js';
var jsfiles = [
  'marked.js',
  'jquery.touchwipe.min.js',
  'source.js'
].map((file) => {return path.join(__dirname, jsfolder, file);});

var cssfolder = 'style';
var cssfiles = [
  'variables.less',
  'mixins.less',
  'style.less',
  'header.less',
  'section.less'
].map((file) => {return path.join(__dirname, cssfolder, file);});

var htmlfiles = [
  'index.html'
].map((file) => {return path.join(__dirname, file);});

gulp.task('js', (cb) => {
  pump([
    gulp.src(jsfiles),
    concat('scripts.js'),
    uglify(),
    gulp.dest(distfolder)
  ], cb);
});

gulp.task('js-debug', (cb) => {
  pump([
    gulp.src(jsfiles),
    sourcemaps.init(),
    concat('scripts.js'),
    uglify(),
    sourcemaps.write(),
    gulp.dest(path.join(__dirname, debugfolder, distfolder))
  ], cb);
});

gulp.task('css', (cb) => {
  pump([
    gulp.src(cssfiles),
    less(),
    cleanCSS(),
    concat('style.css'),
    gulp.dest(distfolder)
  ], cb);
});

gulp.task('css-debug', (cb) => {
  pump([
    gulp.src(cssfiles),
    sourcemaps.init(),
    less(),
    cleanCSS(),
    concat('style.css'),
    sourcemaps.write(),
    gulp.dest(path.join(__dirname, debugfolder, distfolder))
  ], cb);
});

gulp.task('html', (cb) => {
  pump([
    gulp.src(htmlfiles),
    gulp.dest(debugfolder)
  ], cb);
});

gulp.task('debug-readmes', (cb) => {
  pump([
    gulp.src(path.join(__dirname, 'readmes', '*')),
    gulp.dest(path.join(__dirname, debugfolder, 'readmes'))
  ], cb);
});

gulp.task('debug-img', (cb) => {
  pump([
    gulp.src(path.join(__dirname, 'img', '*')),
    gulp.dest(path.join(__dirname, debugfolder, 'img'))
  ], cb);
});

gulp.task('debug-license', (cb) => {
  pump([
    gulp.src(path.join(__dirname, 'LICENSE')),
    gulp.dest(path.join(__dirname, debugfolder))
  ], cb);
});

gulp.task('watch', () => {
  gulp.watch(jsfiles, ['js', 'js-debug']);
  gulp.watch(cssfiles, ['css', 'css-debug']);
  gulp.watch(htmlfiles, ['html']);
});

gulp.task('all', [
  'js',
  'js-debug',
  'css',
  'css-debug',
  'html',
  'debug-readmes',
  'debug-img',
  'debug-license'
]);

gulp.task('default', ['all', 'watch']);

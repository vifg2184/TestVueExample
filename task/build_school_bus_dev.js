/**
 * tareas gulp para agilizar desarrollo
 **/

const gulp = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const clean = require('gulp-rimraf');
const gulpIgnore = require('gulp-ignore');
const inject = require('gulp-inject');
const replace = require('gulp-replace');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const cacheBuster = require('gulp-cache-bust');

var filesToMovieDev = [
    './src/**/*.*',
    './task/**/*.*'
];

var name_distributed = 'TestVueExample';
var ip_enviroment ='http://54.202.10.0/';


//mover carpetas
gulp.task('structure_dev', function () {
    return gulp.src(filesToMovieDev, {base: './'})
        .pipe(gulp.dest('dist/'+name_distributed));
});

gulp.task('concat_files',function(){

    return gulp.src('src/*.js')
        .pipe(concat('commons.js'))
        .pipe(gulp.dest('dist/' + name_distributed + '/src/'));

});
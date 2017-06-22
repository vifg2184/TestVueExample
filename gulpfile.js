/**
 * Created by VladimirIlich on 22/6/2017.
 */
/**
 * Created by VladimirIlich on 31/7/2016.
 * sistema de automatizacion de tareas
 */

const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const requireDir = require('require-dir');

requireDir('./task', {recurse: true });

//task ambiente desarrrollo para empaquetar school bus
gulp.task('mode_dev',gulpsync.sync([
    'structure_dev',
    'concat_files']));


const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const pump = require('pump');

module.exports = function({source, options, file, destination}){
    var prefixes = options && options.autoprefixer ? options.autoprefixer : {};
    var task = [gulp.src(source)];

    if (options && typeof options.sourcemaps === true){
        task = task.concat([
            sourcemaps.init(),
            sass().on('error', sass.logError),
            sourcemaps.write(),
        ]);
    }else{ task = task.concat([ sass().on('error', sass.logError) ]); }

    return function(){
        return pump(task.concat([
            autoprefixer(prefixes),
            plumber(),
            cssnano(),
            rename(file),
            gulp.dest(destination),
        ]));
    }
};
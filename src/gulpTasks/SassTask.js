const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

module.exports = function({source, options, file, destination}){
    return function(){
        return sass(source, options)
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename(file))
        .pipe(gulp.dest(destination));
    };
};
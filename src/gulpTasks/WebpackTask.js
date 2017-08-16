const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');

module.exports = function({source, config, destination}){
    return function(){
        return gulp.src(source)
                   .pipe(plumber())
                   .pipe(webpackStream(config, webpack))
                   .pipe(gulp.dest(destination));
    }
}
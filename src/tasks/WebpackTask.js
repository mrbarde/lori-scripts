const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const plumber = require('gulp-plumber');

module.exports = function(options){
    options.callback = options.callback || function() {};
    return function(){
        console.log(options);
        gulp.src(options.source)
            .pipe(plumber())
            .pipe(webpackStream(options.config, webpack, options.callback))
            .pipe(gulp.dest(options.destination));
    }
}
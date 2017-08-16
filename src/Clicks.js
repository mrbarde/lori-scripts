var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Generates helpers and default configs for lori
 */
class Clicks {

    constructor(options){
        //
        this.isProduction = process.env.NODE_ENV === 'production';
        this.serverPort = options.serverPort || 9000;
        this.syncPort = options.syncPort || 8080;
        this.baseDir = options.baseDir || './';
        this.publicDir = options.publicDir || path.join(this.baseDir, 'public');
        this.devDir = options.devDir || path.join(this.baseDir, 'src');
    }

    init(){
        this.setCSSExtractors();
    }

    setBaseDirectory(dir){
        this.baseDir = path.join(dir);
    }

    setPublicDirectory(dir){
        this.publicDir = path.join(this.baseDir, dir);
    }

    setDevDirectory(dir){
        this.devDir = path.join(this.baseDir, dir);
    }

    setCSSExtractors(){

        this.extractLess = new ExtractTextPlugin({ 
            filename: '../../src/styles/app.scss',
            allChunks: true
        });

        this.extractScss = new ExtractTextPlugin({ 
            filename: '../../src/styles/app.scss',
            allChunks: true
        });
    }

};

module.exports = Clicks;
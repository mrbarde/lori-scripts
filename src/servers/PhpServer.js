const connect = require('gulp-connect-php');

class PhpServer{

    constructor(options, cb){
        this.server = null;
        this.options = options;
        this.cb = cb || function(){};
    }

    start(){
        this.server = connect.server(this.options, this.cb);
        // close server on process close
        process.on('close', this.server.closeServer);
    }
}

module.exports = PhpServer;
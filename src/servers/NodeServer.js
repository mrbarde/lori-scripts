const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || function(){};
    }

    start(){
        this.server = exec(this.command, this.execCb.bind(this));
    }

    execCb(err, stdout, stderr) {
        if(err instanceof Error){
            console.log(err);
            throw err;
        }

        if(stderr){
            console.log(stderr);
        }
        
        if(stdout){
            console.log(stdout);
        }

        this.cb();
    }
}

module.exports = NodeServer;
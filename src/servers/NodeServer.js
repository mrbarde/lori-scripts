const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || null;
    }

    start(){
        this.server = exec(this.command, this.execCb.bind(this, this.cb));
    }

    execCb(callback, err, stdout, stderr) {
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
        console.log(callback);
        if(callback){
            callback();
        }
    }
}

module.exports = NodeServer;
const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || null;
    }

    start(){
        this.server = exec(this.command, {stdio: 'inherit'});
        if(this.cb){
            this.cb();
        }
    }
}

module.exports = NodeServer;
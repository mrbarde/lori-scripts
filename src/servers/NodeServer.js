const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || null;
    }

    start(){
        this.server = exec(this.command, {stdio: 'inherit'}, this.execCb.bind(this, this.cb));
    }

    execCb(callback, e, out, err){
        if(e instanceof Error){
            console.log(e);
            throw e;
        }
        
        console.log(err);
        console.log(out);
        if(callback){
            callback();
        }
    }
}

module.exports = NodeServer;
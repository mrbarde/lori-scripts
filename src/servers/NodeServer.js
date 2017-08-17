const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || null;
    }

    start(){
        var callback = this.cb;
        this.server = exec(this.command, (e, out, err) => {
            if(e instanceof Error){
                console.log(e);
                throw e;
            }

            if(err){
                console.log(err);
            }
            
            if(out){
                console.log(out);
            }

            if(callback){
                callback();
            }
        });
    }
}

module.exports = NodeServer;
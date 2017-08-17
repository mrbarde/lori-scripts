const {exec} = require('child_process');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
        this.cb = cb || null;
    }

    start(){
        this.server = exec(this.command, (error, stdout, stderr) => {
            
            console.log(stdout);

            if(stderr){
                console.log(stderr);
            }

            if (error !== null) {
                console.log('exec error: ', error);
            }

        });
        if(this.cb){
            this.cb();
        }
    }
}

module.exports = NodeServer;
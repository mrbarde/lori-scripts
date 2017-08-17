const spawnSync = require('spawn-sync');

class NodeServer{

    constructor(file, cb){
        this.server = null;
        this.file = file;
        this.command = "node";
        this.args = [this.file]
        this.cb = cb || null;
    }

    start(){
        
        this.server = spawnSync(this.command, this.args);

        if (this.server.status !== 0) {
            process.stderr.write(this.server.stderr);
            process.exit(this.server.status);
        }
        else {
            process.stdout.write(this.server.stdout);
            process.stderr.write(this.server.stderr);
            
            if(this.cb){
                this.cb();
            }
        }
    }
}

module.exports = NodeServer;
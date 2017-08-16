const {execSync} = require('child_process');

class NodeServer{

    constructor(file){
        this.server = null;
        this.file = file;
        this.command = "node "+this.file;
    }

    start(){
        this.server = execSync(this.command);
    }
}

module.exports = NodeServer;
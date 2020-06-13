
const fs = require('fs');
const child_process = require('child_process');

class MicroserviceManager {
  constructor(source, config) {
    this.source = source;
    this.config = config;
    this.services = {};
  }

  setup() {
    const namesOfServices = fs.readFileSync(this.config).toString().split('\n');
    namesOfServices.forEach((s) => {
      this.services[s] = child_process.fork(`${__dirname}/${s}`);
    });
  }
}

module.exports = MicroserviceManager;

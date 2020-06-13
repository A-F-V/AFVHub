const cluster = require('cluster');
const os = require('os');

class Bullet {
  constructor() {
    this.test = 'YES';
  }

  static async setup() {
    return new Bullet();
  }
}


if (cluster.isMaster) {
  const size = os.cpus().length;
  Bullet.setup().then((s) => {
    for (let x = 0; x < size; x++) {
      cluster.fork();
    }
  });
} else {
}

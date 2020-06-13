const cluster = require('cluster');
const os = require('os');
const express = require('express');

const app = express();
const port = 1612;

class Bullet {
  constructor() {
    this.test = 'YES';
  }

  static async setup() {
    return new Bullet();
  }
}

let bullet;
if (cluster.isMaster) {
  const size = os.cpus().length;

  Bullet.setup().then((s) => {
    bullet = s;
    for (let x = 0; x < size; x++) {
      cluster.fork();
    }
  });
  Object.values(cluster.workers).forEach((worker) => { worker.bullet = bullet; });
} else {
  app.get('/', (req, res) => {
    res.send(`Handled by${process.pid} Done with Bullet`);
  });
  app.listen(port);
}

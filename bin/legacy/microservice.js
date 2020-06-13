const cluster = require('cluster');
const os = require('os');

let thisService;
function start(service) {
  if (cluster.isMaster) {
    thisService = service;
    const clusters = os.cpus().length;
    console.log(`Using ${clusters} clusters.`);
    cluster.setupMaster({ exec: service });
    for (let i = 0; i < clusters; i++) {
      cluster.fork();
    }
  }
}

function test() {
  console.dir(cluster.workers, { depth: 0 });
}

function setupListener() {
  process.on('message', (msg) => {
    if (msg.type === 'init') {
      cluster.send;
    }
    if (msg.type === 'start') {
      start(msg.param);
    } else if (msg.type === 'test') {
      test();
    }
  });
}


setupListener();

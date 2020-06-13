
/*
const bookRouter = express.Router();
bookRouter.route('/books').get((req, res) => {
  const response = { hello: 'This is my API' };
  res.json(response);
});

app.get('/', (req, res) => {
  res.send('Hello there');
});
app.use('/api', bookRouter);
app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
*/
// microservice.send({ type: 'start', param: `${__dirname}/microservices/bullet` });
// microservice.send({ type: 'test' });
// microservice2.send({ type: 'test' });
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const http = require('http');
const MicroserviceManager = require('./microservices/msm');

const app = express();
const port = process.env.PORT || 1611;
let msm;

if (cluster.isMaster) {
  msm = new MicroserviceManager(`${__dirname}/microservices`, './config/microservices.txt');
  msm.setup();
  const size = os.cpus().length;
  for (let x = 0; x < size; x++) {
    cluster.fork();
  }
  Object.values(cluster.workers).forEach((worker) => { worker.msm = msm; });
} else {
  console.log('TESt');
  app.get('/', (req, res) => {
    if (req.headers.type === 'bullet') {
      http.get({ hostname: 'localhost', port: 1612 }, (r) => {
        r.on('data', (data) => { res.send(data.toString()); });
      });
    }
  });
  app.listen(port);
}

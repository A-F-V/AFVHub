// const express = require('express');
// const app = express();
// const port = process.env.PORT || 1611;
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

const MicroserviceManager = require('./microservices/msm');

const msm = new MicroserviceManager(`${__dirname}/microservices`, './config/microservices.txt');
msm.setup();

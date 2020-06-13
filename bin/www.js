const express = require('express');
const cluster = require('cluster');
const child_process = require('child_process');
const msm = require('./microservices/msm');


const app = express();
const port = process.env.PORT || 1611;
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

const express = require('express');
const m = require('./mongoServerTest');

const app = express();
const port = process.env.PORT || 3000;

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

m.main();

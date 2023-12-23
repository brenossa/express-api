const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const authorization = require('./middleware/authorization');
app.use('/api', authorization);

const products = require('./routes/products');
app.use('/api/products', products);

app.get('/', (req, res) => {
  res.status(200).send('<h1> Welcome to my page </h1><br><a href="/api/products/1">Click here to see my first product</a>');
})

app.all('*', (req, res) => {
  res.status(404).send('Error 404');
})

app.listen(8000, () => {
  console.log('Listening on 8000');
})

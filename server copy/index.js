const express = require('express');
const app = express();

const products = require('../products.json');
const getProducts = require('./getProducts')

const port = 4040;
app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)



app.listen(port, () => console.log('Server running on 4040'));
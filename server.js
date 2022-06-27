'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/mypath', (req, res) => {
  res.send('Hello My Path');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

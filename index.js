const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.get('/login', (req, res) => {
  res.end('Here is the login page!');
});

app.get('*', (req, res) => {
  res.end('Not Found.');
});

app.listen(3000, function(){
  console.log('Servidor funcionanado...');
});

const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('appName', 'Mi primer server');

// middlewares
app.use(morgan('dev'));
app.use(function(req, res, next){
  console.log('request url: ' + req.url);
  next();
})




// routes
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
  console.log('Nombre de la App: ' + app.get('appName'));
});

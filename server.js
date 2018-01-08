const express = require('express');

var app = express();

app.get('/',(req, res) => {
  res.send({
    name: 'Javier',
    likes: ['Tacos', 'Pizza!']
  });
});

app.get('/about',(req, res) => {
  res.send('About page');
});


app.listen(3001);

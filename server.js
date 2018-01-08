const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
  res.send({
    name: 'Javier',
    likes: ['Tacos', 'Pizza!']
  });
});

app.get('/about',(req, res) => {
  res.send('About page');
});

app.get('/bad',(req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(3001, ()=>{
  console.log('server is up on port 3001');
});

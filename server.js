const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/',(req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my page',
  });
});

app.get('/about',(req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About page',
  });
});

app.get('/bad',(req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(3001, ()=>{
  console.log('server is up on port 3001');
});

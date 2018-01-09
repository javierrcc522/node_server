const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3001;

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
hbs.registerHelper('getCurrentYear',() => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
});

app.set('view engine', 'hbs');
// using middle ware


app.use((req, res, next)=>{
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err)=>{
    if (err) {
      console.log('Unable to append to server.log');
    }
  });

 next();
});
// when logging data \n moves to the next line
//bottom line cuts all the pages and only renders maintance
// app.use((req, res, next)=>{
//   res.render('maintance.hbs');
// });
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


app.listen(port, ()=>{
  console.log(`server is up on port 3001 ${port}`);
});

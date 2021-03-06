const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.url}`;
  
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res) => {
//   res.render('maintenance');
// });

app.use(express.static(`${__dirname}/public`));
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hompage',
    message: 'Welcome home!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Couple Projs'
  });
});

app.listen(port, () => console.log('server running on', port));

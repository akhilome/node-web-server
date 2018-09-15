const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')
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

app.listen(3000, () => console.log('server running on 3000'));

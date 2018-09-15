const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hompage',
    year: new Date().getFullYear(),
    message: 'Welcome home!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page',
    year: new Date().getFullYear()
  });
});

app.listen(3000, () => console.log('server running on 3000'));

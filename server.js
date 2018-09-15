const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to express'
  });
});

app.listen(3000, () => console.log('server running on 3000'));

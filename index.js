const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

let pLanguages = [];

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.render('index', { pLan: pLanguages });
});
app.get('/contact', (req, res) => {
  // res.send('Hello World!');
  res.render('contact', {});
});

app.post('/', (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

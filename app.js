const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log('http server is listening on port 3000');
});


app.get('/divide', (req, res) => {
  let dividend = req.query.dividend;
  let divisor = req.query.divisor;
  try {
    let quotient = dividend / divisor;
    res.status(200).send(JSON.stringify(quotient));
  } catch (e) {
    res.status(400).send(e.message);
  }
});


app.use(bodyParser.json()); // for parsing(req.body) content-type application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing(req.body) content-type application/x-www-form-urlencoded
app.post('/add', (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  res.status(200).send(JSON.stringify(num1 + num2));
});

//app.use(express.static('public'));
// app.use('/static', express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

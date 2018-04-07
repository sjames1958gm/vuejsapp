const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use(cors());

app.get('/status', (req, res) => {
  res.json({ test: true });
});

app.post('/register', (req, res) => {
  res.send({
    message: `Your user was registered: ${req.body.email}`
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.warn('started');
});

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Awesome TDD + ES6 app listening on port 3000!');
});

module.exports = app;
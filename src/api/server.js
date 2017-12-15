var express = require('express'),
app = express(),
port = process.env.PORT || 3001;

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

require('./src/routes')(app, {});
app.listen(port, () => {
  console.log('todo list RESTful API server started on: ' + port);
});
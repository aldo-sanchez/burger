// require express and body-parser
var express = require('express');
var bodyParser = require('body-parser');

const PORT = 8080;
// initialize express
var app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Require Routes

// listener
app.listen(PORT, function(){
  console.log('App listening on PORT: ' + PORT);
});
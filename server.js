// require express and body-parser
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars'); 

const PORT = 8080;
// initialize express
var app = express();

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Require Routes
(require('./controllers/burgers_controller.js'))(app);
// (require('./controllers/htmlRoutes.js'))(app);

// listener
app.listen(PORT, function(){
  console.log('App listening on PORT: ' + PORT);
});
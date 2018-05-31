var express = require('express');
var app = express();

var routes = require('./routes/index.js');
var handlebars = require('express-handlebars');


app.engine("handlebars", handlebars({defaultLayout:'main.handlebars'}));
app.set('view engine', "handlebars");


app.use('/', routes);


app.listen(3000);
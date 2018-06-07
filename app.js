var express = require('express');
var app = express();
// var mongoose = require('mongoose');
const config = require('./config');

// const db = mongoose.connect(config.database.url, (err)=>{
//     if(err)
//         console.error(err);
// }); 

var pageModel = require('./models/models');

var routes = require('./routes/index.js');
var handlebars = require('express-handlebars');


app.engine("handlebars", handlebars({defaultLayout:'main.handlebars'}));
app.set('view engine', "handlebars");


app.use('/', routes);


app.listen(3000);
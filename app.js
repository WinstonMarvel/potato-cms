var express = require('express');
var app = express();
// var mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect(config.database.url);

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', ()=>{
    console.log("connected to db");
});

app.use(bodyParser.urlencoded({extended: true}));
// const db = mongoose.connect(config.database.url, (err)=>{
//     if(err) 
//         console.error(err);
// }); 

// var pageModel = require('./models/models'); 

var routes = require('./routes/index.js');
var handlebars = require('express-handlebars');

// handlebars.registerPartials(__dirname + 'views/partials');

app.engine("handlebars", handlebars({defaultLayout:'main.handlebars', partialsDir: __dirname + '/views/partials/' }));
app.set('view engine', "handlebars");


app.use('/', routes);


app.listen(config.port);
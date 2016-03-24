var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookApi');
var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);
app.get('/', function(req, res){
  res.send('Welcome to my api');
});

app.listen(port, function(){
  console.log('gulp running book-api on port: ' + port);
});

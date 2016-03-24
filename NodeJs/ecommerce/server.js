var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
  var name = "bert";
  res.json("My name is " + name);
});

app.listen(4000, function(err){
  if(err) throw err;
  console.log("server is running on port 4000");
});
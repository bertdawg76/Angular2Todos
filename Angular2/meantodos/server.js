var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 8600;

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();
//app.use(express.static(__dirname + "/node_modules"));
// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', index);
app.use('/api/v1/', todos);

app.listen(PORT, function(){
  console.log('server started on port ' + PORT);
});
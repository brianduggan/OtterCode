var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use( express.static('./public') );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/otter_db01');

app.get('/', function(req, res){
  res.render('index');
})

var port = 8080;
app.listen(port, function(){
  console.log('...the magic is happening on port ' + port);
});

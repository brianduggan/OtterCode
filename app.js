var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var dbLink = proccess.env.MONGOLAB_URI || 'mongodb://localhost/otter_db01';

app.use( express.static('./public') );
app.use( bodyParser.urlencoded({extended: true}) );
app.use( bodyParser.json() );
app.set('view engine', 'ejs');
mongoose.connect(dbLink);

app.get('/', function(req, res){
  res.render('index');
})

var postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

var port = proccess.env.PORT || 8080;
app.listen(port, function(){
  console.log('...the magic is happening on port ' + port);
});

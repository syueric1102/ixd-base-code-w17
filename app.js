
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var analysis = require('./routes/analysis');
var search = require('./routes/search');
var homepage = require('./routes/homepage');
var classInfo = require('./routes/classInfo');
/*
var fs = require('fs');
var Analyzer = require('./analyzer-v3');

module.exports = Analyzer;
var analyzer = new Analyzer('a371a3f6-55d6-4d4d-aab4-9b5c296483e1');
*/

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/analysis', analysis.view);
app.get('/search', search.view);
app.get('/homepage', homepage.view);
app.get('/classInfo', classInfo.view);
app.get('/classInfo/:id', classInfo.view);
//app.post('/classInfo/:id', classInfo.analyze);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/*
var audio = './audioedited/0edited.wav';
analyzer.analyze(fs.createReadStream(audio),function(err,analysis){
	console.log(JSON.stringify(analysis));
});
*/



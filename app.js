
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , session = require('client-sessions');

var qbo=require('./routes/qbo');
var yelp=require('./routes/yelp');
var emerapi=require('./routes/emerapi');
var ejs = require("ejs");


var app = express();

// all environments
app.use(session({   
	  
	cookieName: 'session',    
	secret: 'cmpe273_test_string',    
	duration: 30 * 60 * 1000,    //setting the time for active session
	activeDuration: 5 * 60 * 1000,  })); // setting time for the session to be active when the window is open // 5 minutes set currently
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/admin', qbo.qboConnect);
app.get('/srequest', qbo.qboConnectt);
app.get('/yelp', yelp.index);
app.get('/emergency', emerapi.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

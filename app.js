
/**
 * Module dependencies.
 */ 

var express = require('express')
  , routes = require('./routes/index')
  , http = require('http')
  , path = require('path')
  , arDrone = require('ar-drone');;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/land', routes.land);
app.get('/takeoff', routes.takeoff);
app.get('/clockwise', routes.clockwise);
app.get('/counterClockwise', routes.counterClockwise);
app.get('/image', routes.image);
app.get('/goup', routes.goUp);
app.get('/godown', routes.goDown);
app.get('/stop', routes.stop);
app.get('/front', routes.goFront);
app.get('/back', routes.goBack);
app.get('/left', routes.goLeft);
app.get('/right', routes.goRight);


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
}); 

//var io = require('socket.io').listen(server);

/*io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'worldz' });
  socket.on('control', function (data) {
    console.log(data);
    if(data.command == 'goLeft') {
      //
    }
  });
});*/




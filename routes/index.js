var arDrone = require('ar-drone');
var http = require('http');
var client  = arDrone.createClient();


exports.index = function(req, res){  
  res.render('index', { message: 'Parrot Index' });
};

exports.takeoff = function(req, res){  
  client.takeoff();
  res.render('index', { message: 'We have Takeoff!' });
};

exports.land = function(req, res){
  client.land();
  res.render('index', { message: 'Landing...? Plz...' });
};

exports.clockwise = function(req, res){
  client.clockwise(1.0);
  res.render('index', { message: 'rotating clockwise' });
};

exports.counterClockwise = function(req, res){
  client.counterClockwise(1.0);
  res.render('index', { message: 'rotating counterclockwise'})
}

exports.goUp = function(req, res){
  client.up(1.0);
  res.render('index', { message: 'up up and away....' });
};

exports.goDown = function(req, res){
  client.down(1.0);
  res.render('index', { message: 'coming down..' });
};

exports.goLeft = function(req, res){
  client.left(0.2);
  res.render('index', { message: 'going left..' });
};

exports.goRight = function(req, res){
  client.right(0.2);
  res.render('index', { message: 'going right..' });
};

exports.goFront = function(req, res){
  client.front(0.2);
  res.render('index', { message: 'going forward..' });
};

exports.goBack = function(req, res){
  client.back(0.2);
  res.render('index', { message: 'going backwards..' });
};

exports.stop = function(req,res){
  client.stop();
  res.render('index', { message: 'stop'});
}

exports.demoClient = function(req,res) {
  res.render('demoClient', { message: '' });
}



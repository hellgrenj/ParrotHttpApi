
/*
 * GET home page.
 */
var arDrone = require('ar-drone');
var http = require('http');
var client  = arDrone.createClient();
//var pngStream = arDrone.createPngStream();
var lastPng; 


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
  res.render('index', { message: 'kind of rotating?' });
};

exports.goUp = function(req, res){
  client
  .after(1, function() {
    this.up(0.5);
  })
  .after(1000, function() {
    this.stop();
  });
  res.render('index', { message: 'up up and away....' });
};

exports.goDown = function(req, res){
  client
  .after(1, function() {
    this.down(0.5);
  })
  .after(1000, function() {
    this.stop();
  });
  res.render('index', { message: 'coming down..' });
};

// Fetch png stream and store in lastPng
/*pngStream
  .on('error', console.log)
  .on('data', function(pngBuffer) {
    lastPng = pngBuffer;
    console.log(lastPng);
  });

exports.image = function(req, res){  
  res.writeHead(200, {'Content-Type': 'image/png'});
  res.end(lastPng);
};*/ 


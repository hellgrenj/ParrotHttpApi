
/*
 * GET home page.
 */
var arDrone = require('ar-drone');

exports.index = function(req, res){
  var client  = arDrone.createClient();
  client.takeoff();
  res.render('index', { title: 'Express' });
};
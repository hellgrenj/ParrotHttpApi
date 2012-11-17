var arDrone = require('ar-drone');

exports.land = function(req, res){
  var client  = arDrone.createClient();
  client.land();
  res.render('land', { title: 'Express' });
};
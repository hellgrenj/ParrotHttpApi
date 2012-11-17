// main.js
$(function() {

	if(typeof($('#cameraImage') != 'undefined ' && $('#cameraImage').length) {
		setInterval(function({
			var source = $('#cameraImage').prop('src');
			$('#cameraImage').prop('src', source);
		}, 1000));
	}

	function rndNum() {
		return Math.floor((Math.random()*10000)+1);
	}
});
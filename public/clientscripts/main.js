// main.js
$(function() {

	if(typeof($('#cameraImage') != 'undefined ' && $('#cameraImage').length)) {
		

		var source = $('#cameraImage').prop('src');

		var interval = setInterval(function() {	
			//console.log('updating image source');
			$('#cameraImage').attr('src', source);
		}, 1000);
	}

	function rndNum() {
		return Math.floor((Math.random()*10000)+1);
	}

    var socket = io.connect('http://localhost:3000');
	
	socket.on('news', function (data) {
		console.log(data);
	});

	var leftTriggered = false,
		rightTriggered = false,
		frontTriggered = false,
		backTriggered = false;

		// TODO skicka array med control commands

	$(document).keydown(function(event) {
		if (event.which == 37) {
			event.preventDefault();
			if(leftTriggered == false) {
				console.log('Flying left');
				//socket.emit('control', { command: 'goLeft' });
				$.get('/left');
				leftTriggered = true;
			}
		}
		if (event.which == 38) {
			event.preventDefault();
			if(frontTriggered == false) {
				console.log('Flying forward');
				//socket.emit('control', { command: 'goFront' });
				$.get('/front');
				frontTriggered = true;
			}
		}
		if (event.which == 39) {
			event.preventDefault();
			if(rightTriggered == false) {
				console.log('Flying right');
				//socket.emit('control', { command: 'goRight' });
				$.get('/right');
				rightTriggered = true;
			}
		}
		if (event.which == 40) {
			event.preventDefault();
			if(backTriggered == false) {
				console.log('Flying backwards');
				//socket.emit('control', { command: 'goBack' });
				$.get('/back');
				backTriggered = true;
			}
		}
	});

	$(document).keyup(function(event) {
		// stop!
		leftTriggered = false,
		rightTriggered = false,
		frontTriggered = false,
		backTriggered = false;
		//socket.emit('control', { command: 'stop' });
		$.get('/stop');
		console.log('stopping..');
	});
});
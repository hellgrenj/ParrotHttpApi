// main.js
$(function() {

	/*if(typeof($('#cameraImage') != 'undefined ' && $('#cameraImage').length)) {
		

		var source = $('#cameraImage').prop('src');

		var interval = setInterval(function() {	
			//console.log('updating image source');
			$('#cameraImage').attr('src', source);
		}, 1000);
	}*/

	function rndNum() {
		return Math.floor((Math.random()*10000)+1);
	}
/*
    var socket = io.connect('http://localhost:8081');
	
	socket.on('news', function (data) {
		console.log(data);
	});
	
	socket.on('newImage', function () {
		var source = $('#cameraImage').prop('src');
		$('#cameraImage').attr('src', source);
	});
	*/
	var leftTriggered = false,
		rightTriggered = false,
		frontTriggered = false,
		backTriggered = false;

		// TODO skicka array med control commands

	var keyLeft = 37;
	var keyRight = 39;
	var keyFront = 38;
	var keyBack = 40;
	var keyW = 87;
	var keyA = 65;
	var keyS = 83;
	var keyD = 68;
	
	$(document).keydown(function(event) {
		if (event.which == keyLeft) {
			event.preventDefault();
			if(leftTriggered == false) {
				console.log('Flying left');
				//socket.emit('control', { command: 'goLeft' });
				$.ajax({
					url: '/left',
					type: 'get',
					success: function(data) {
						//console.log(data);
					},
					cache: false
				});
				leftTriggered = true;
			}
		}
		if (event.which == keyFront) {
			event.preventDefault();
			if(frontTriggered == false) {
				console.log('Flying forward');
				//socket.emit('control', { command: 'goFront' });
				$.ajax({
					url: '/front',
					type: 'get',
					success: function(data) {
						//console.log(data);
					},
					cache: false
				});
				frontTriggered = true;
			}
		}
		if (event.which == keyRight) {
			event.preventDefault();
			if(rightTriggered == false) {
				console.log('Flying right');
				//socket.emit('control', { command: 'goRight' });
				$.ajax({
					url: '/right',
					type: 'get',
					success: function(data) {
						//console.log(data);
					},
					cache: false
				});
				rightTriggered = true;
			}
		}
		if (event.which == keyBack) {
			event.preventDefault();
			if(backTriggered == false) {
				console.log('Flying backwards');
				//socket.emit('control', { command: 'goBack' });
				$.ajax({
					url: '/back',
					type: 'get',
					success: function(data) {
						//console.log(data);
					},
					cache: false
				});
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
		$.ajax({
					url: '/stop',
					type: 'get',
					success: function(data) {
						//console.log(data);
					},
					cache: false
				});
		console.log('stopping..');
	});
});
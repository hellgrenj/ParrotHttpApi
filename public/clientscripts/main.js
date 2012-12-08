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

	var controlArray = array(
		{
			name: 'left',
			key: keyLeft,
			action; '/left',
			isTriggered: false
		},
		{
			name: 'right',
			key: keyRight,
			action; '/right',
			isTriggered: false
		},
		{
			name: 'front',
			key: keyW,
			action; '/front',
			isTriggered: false
		},
		{
			name: 'back',
			key: keyS,
			action; '/back',
			isTriggered: false
		},
		{
			name: 'clockwise',
			key: keyW,
			action; '/clockwise',
			isTriggered: false
		},
		{
			name: 'counterclockwise',
			key: keyD,
			action; '/counterclockwise',
			isTriggered: false
		},
		{
			name: 'up',
			key: keyFront,
			action; '/up',
			isTriggered: false
		},
		{
			name: 'down',
			key: keyBack,
			action; '/down',
			isTriggered: false
		}
	);

	function getcontrolByKey(key) {
		for(var i = 0; i < controlArray.length; i++) {
			if(controlArray[i].key === key) {
				return controlArray[i];
			}
		}
	}
	
	$(document).keydown(function(event) {

		// Get which command to run based on the pressed key
		var control = getcontrolByKey(event.which);

		if(typeof(control) !== 'undefined' && control != '') {
			// Prevent default event
			event.preventDefault();

			// If not previously triggered, run the command
			if(!control.isTriggered) {
				control.isTriggered = true;
				console.log('Calling control ' + control.name);
				$.ajax({
					url: control.action,
					type: 'get',
					success: function(data) {},
					cache: false
				});
			}
		}

	});


	$(document).keyup(function(event) {

		for(var i = 0; i < controlArray.lenght; i++) {
			controlArray[i].isTriggered = false;
		}

		$.ajax({
			url: '/stop',
			type: 'get',
			success: function(data) {},
			cache: false
		});

		console.log('stopping..');
	});
});
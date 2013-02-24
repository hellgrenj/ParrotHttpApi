$(function() {

	
	var keyLeft = 37;
	var keyRight = 39;
	var keyUp = 38;
	var keyDown = 40;
	var keyW = 87;
	var keyA = 65;
	var keyS = 83;
	var keyD = 68;
	var keyT = 84;
	var keyL = 76;
	
	var recordedCommands = new Array();

	var controlArray = new Array(
		{
			name: 'land',
			key: keyL,
			action: '/land',
			isTriggered: false
		},
		{
			name: 'takeoff',
			key: keyT,
			action: '/takeoff',
			isTriggered: false
		},
		{
			name: 'left',
			key: keyA,
			action: '/left',
			isTriggered: false
		},
		{
			name: 'right',
			key: keyD,
			action: '/right',
			isTriggered: false
		},
		{
			name: 'front',
			key: keyW,
			action: '/front',
			isTriggered: false
		},
		{
			name: 'back',
			key: keyS,
			action: '/back',
			isTriggered: false
		},
		{
			name: 'clockwise',
			key: keyRight,
			action: '/clockwise',
			isTriggered: false
		},
		{
			name: 'counterclockwise',
			key: keyLeft,
			action: '/counterclockwise',
			isTriggered: false
		},
		{
			name: 'up',
			key: keyUp,
			action: '/goUp',
			isTriggered: false
		},
		{
			name: 'down',
			key: keyDown,
			action: '/goDown',
			isTriggered: false

		}
	);



	function getcontrolByKey(key) {
		for(var i = 0; i < controlArray.length; i++) {
			if(controlArray[i].key === key) {
				return controlArray[i];
			}
		}
		return false;
	}

	$("#play").click(function(){
		playRecordedCommands();
	})
	
	$(document).keydown(function(event) {


		console.log(event.which);
		// Get which command to run based on the pressed key
		var control = getcontrolByKey(event.which);

		
		
		if(typeof(control) !== 'undefined' && control != '') {
			// Prevent default event
			event.preventDefault();

			// If not previously triggered, run the command
			if(!control.isTriggered) {
				recordedCommands.push({action:control.action, timestamp: (new Date()).getTime()});
				listRecordedCommands();
				control.isTriggered = true;
				// Set button state to active
				$('#' + control.name).addClass('active');
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

	function listRecordedCommands(){

		for(var i=0; i < recordedCommands.length; i++)
		{

			console.log("recorded command: "  + recordedCommands[i].action + " " + recordedCommands[i].timestamp);
		}
	}

	function playRecordedCommands(){


		for(var i=0; i < recordedCommands.length; i++)
		{
			/*console.log("i=" + i);
			var sleepTime = 0;
			if(i !== (recordedCommands.length - 1)){
				var j = i+1;
				console.log("j = " + j);
				console.log(recordedCommands[j].timestamp);
				sleepTime = recordedCommands[j].timestamp - recordedCommands[i].timestamp;
			}*/
			

			setTimeout(function(){

				$.ajax({
						url: recordedCommands[i].action,
						type: 'get',
						success: function(data) {},
						cache: false
					});

				console.log("requested " + recordedCommands[i].action);
						
			},100);
		}



	}


	$(document).keyup(function(event) {
	
		recordedCommands.push({action:'/stop', timestamp: (new Date()).getTime()});
		listRecordedCommands();
		
	
		for(var i = 0; i < controlArray.length; i++) {
			
			controlArray[i].isTriggered = false;
		}
		
		$.ajax({
			url: '/stop',
			type: 'get',
			success: function(data) {},
			cache: false
		});

		$('a.active').removeClass('active');

		console.log('stopping..');
	});
});
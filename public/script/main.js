main = function() {
	var socket = io.connect('http://localhost:3232');
	
	var setupSocketEvents = function() {
		socket.on('message', function(msg){
			var li = $('<li>').html(msg);

			$('#container ul').append(li)
		});
	};

	var setupUIEvents = function() {
		$('#btn').click(function(){
			var val = $('#text').val();
			socket.emit('change-to', val);
		});
	};

	var start = function() {
		setupUIEvents();
		setupSocketEvents();	
	};

	var exports = {};
	exports.start = start;

	return exports;
}();
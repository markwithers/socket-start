main = function() {
	var socket = io.connect('http://localhost:3232');
	
	var setupSocketEvents = function() {

	};

	var setupUIEvents = function() {
		
	};

	var start = function() {
		setupUIEvents();
		setupSocketEvents();	
	};

	var exports = {};
	exports.start = start;

	return exports;
}();
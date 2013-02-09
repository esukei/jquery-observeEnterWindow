(function ($) {

	$(function () {
		
		var
			$logger = $('#logger'),
			logStatus = function (messages) {
				var _messages = $logger.text().split('\n');
				_messages.unshift(messages);
				if(_messages.length > 10) _messages.pop();
				$logger.text(_messages.join('\n'));
			},
			enterWindowHandler = function (event) {
				logStatus('Entered.');
			},
			enterWindowStartHandler = function (event) {
				logStatus('Start Entering.');
			},
			enterWindowEndHandler = function (event) {
				logStatus('Entered Completely.');
			},
			leaveWindowHandler = function (event) {
				logStatus('Left.');
			},
			leaveWindowStartHandler = function (event) {
				logStatus('Start Leaving.');
			},
			leaveWindowEndHandler = function (event) {
				logStatus('Left Completely.');
			},
			moveWindowFrameHandler = function (event) {
				logStatus('Moving on window frame.');
			};
		
		$('.test')
			.on('enterwindow', enterWindowHandler)
			.on('enterwindowstart', enterWindowStartHandler)
			.on('enterwindowend',   enterWindowEndHandler)
			.on('leavewindow', leaveWindowHandler)
			.on('leavewindowstart', leaveWindowStartHandler)
			.on('leavewindowend',   leaveWindowEndHandler)
			.on('movewindowframe',  moveWindowFrameHandler)
			.observeEnterWindow();
	});

})(jQuery);
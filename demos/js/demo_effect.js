(function ($) {

	$(function () {
		
		var
			enterWindowEndHandler = function (event) {
				$(this).animate({opacity: 1})
			},
			leaveWindowStartHandler = function (event) {
				$(this).animate({opacity: 0})
			};
		
		$('.test')
			.css({opacity: 0})
			.on('enterwindowend',   enterWindowEndHandler)
			.on('leavewindowstart', leaveWindowStartHandler)
			.observeEnterWindow();
	});

})(jQuery);
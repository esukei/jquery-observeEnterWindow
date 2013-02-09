/**
 * jQuery observeEnterWindow v0.1.0
 * https://github.com/esukei/jquery-observeEnterWindow
 * Copyright 2013 Satoru Kawahara
 * Licensed under MIT(http://www.opensource.org/licenses/MIT)
 */
(function(window, $, undefined) {
	var
		observeTargets = $(),//empty jQuery object
		$win = $(window),
		windowLeft,
		windowTop,
		windowWidth,
		windowHeight,
		windowOX,
		windowOY,
		getWindowProperties = function() {
			windowLeft = $win.scrollLeft();
			windowTop = $win.scrollTop();
			windowWidth = $win.innerWidth();
			windowHeight = $win.innerHeight();
			windowOX = windowLeft + windowWidth / 2;
			windowOY = windowTop + windowHeight / 2;
		},
		checkEnterWindow = function(i) {
			var
				$this = $(this),
				isEnterWindow = $this.data('isEnterWindow'),
				isMovingWindowFrame = $this.data('isMovingWindowFrame'),
				offset = $this.offset(),
				targetLeft = offset.left,
				targetTop = offset.top,
				targetWidth = $this.outerWidth(),
				targetHeight = $this.outerHeight(),
				targetOX = targetLeft + targetWidth / 2,
				targetOY = targetTop + targetHeight / 2,
				distanceX = Math.abs(windowOX - targetOX),
				distanceY = Math.abs(windowOY - targetOY),
				halfWidth = (windowWidth + targetWidth) / 2,
				halfHeight = (windowHeight + targetHeight) / 2,
				deltaWidth = Math.abs(windowWidth - targetWidth) / 2,
				deltaHeight = Math.abs(windowHeight - targetHeight) / 2,
				eventString;

			if(distanceX > halfWidth || distanceY > halfHeight) {
				//completely leave
				if(isEnterWindow === true || isMovingWindowFrame === true) {
					eventString = 'leavewindowend';
					$this.data({
						isEnterWindow: false,
						isMovingWindowFrame: false
					});
				}
			} else {
				if(distanceX <= deltaWidth && distanceY <= deltaHeight) {
					//completely enter
					if(isEnterWindow === false || isMovingWindowFrame === true) {
						eventString = 'enterwindowend';
						$this.data({
							isEnterWindow: true,
							isMovingWindowFrame: false
						});
					}
				} else {
					//target on some window frame
					if(isMovingWindowFrame === true) {
						eventString = 'movewindowframe';
					} else {
						if(isEnterWindow === true) {
							eventString = 'leavewindowstart';
						} else {
							eventString = 'enterwindowstart';
						}
						$this.data({
							isMovingWindowFrame: true
						});
					}
				}
			}
			if(eventString === undefined) return;
			$this.trigger(eventString);
			
			if(isEnterWindow === false && isMovingWindowFrame === false)
			{
				if($this.data('isEnterWindow') === true || $this.data('isMovingWindowFrame') === true) $this.trigger('enterwindow');
			} else {
				if($this.data('isEnterWindow') === false && $this.data('isMovingWindowFrame') === false) $this.trigger('leavewindow');
			}
			
		},
		checkEnterWindowHandler = function(event) {
			getWindowProperties();
			observeTargets.each(checkEnterWindow);
		};

	$.fn.extend({
		observeEnterWindow: function() {
			
			this
				.data({
					isEnterWindow: false,
					isMovingWindowFrame: false
				});

			getWindowProperties();
			this.each(checkEnterWindow);
			
			//add
			observeTargets = observeTargets.add(this);
			return this;
		}
	});

	$(function() {
		$win
			.on('scroll.observeenterwindow', checkEnterWindowHandler);
	});

})(this, jQuery);
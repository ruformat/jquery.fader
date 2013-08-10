(function($){

	// cache window as variable
	var $window = $(window);

	// plugin function
	$.fn.fader = function(options){
	
		// settings
		var settings = $.extend({
			delay: 200,
			duration: 600,
			offset: 70,
			showPlace: 470,
			elements: null
		}, options);

		// install for each items
		this.each(function(){
	
			// root block
			var $block = $(this),
			    isReady = false;

			// elements
			var $sectionShow = (settings.elements==null) ? $block : $block.find(settings.elements);

			// hide elements
			$sectionShow.css({ opacity: 0, top: settings.offset });
			
			// {func} show elements
			var show = function(){
				isReady = true;
				$sectionShow.each(function(index){
					$(this).delay(index*settings.delay).animate({ opacity:1, top: 0 }, settings.duration);
				});
			};

			// {func} process scroll 
			var scroll = function(){
				if (!isReady) {
					if ($window.scrollTop()-$block.offset().top > -settings.showPlace) show();
				}	
			};

			// init
			scroll();

			// {event} window scrolling
			$window.scroll(scroll);

		});

		return this;

	};

})(jQuery);

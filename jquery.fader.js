(function($){
	var $window = $(window);
	$.fn.fader = function(options){
	
		// settings
		var settings = $.extend({
			delay: 200,
			duration: 600,
			offset: 70,
			showPlace: 470,
			elements: null
		}, options);

		// install filterSlider for each items
		this.each(function(){
	
			// root block
			var $block = $(this),
				isReady = false;
			
			if (settings.elements == null){
				var $sectionShow = $block;
			} else {
				var $sectionShow = $block.find(settings.elements);
			}

			if($sectionShow.data('show') !=0){
				$sectionShow.css({'opacity': 0, 'top': settings.offset}).data('show', 0);
			};
			
			var scroll = function(){
				var top = $window.scrollTop();
				if (!isReady && (top - $block.offset().top) > -settings.showPlace){
					isReady = true;
					$sectionShow.each(function(index){
						$(this).delay(index*settings.delay).animate({opacity:'1', top: '0'}, settings.duration);
					});
				}
			};
			scroll();
			$window.scroll(scroll);
			
			

		});

		return this;

	};

})(jQuery);
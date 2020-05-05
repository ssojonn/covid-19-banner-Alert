(function ($) {
    "use strict";
    
	// anno__dismiss init
	$(window).on('load', function () {
		$('.anno__dismiss').on('click', function() {
			var anno__wrap = $(this).parent('.anno__wrap');
			anno__wrap.css('opacity',0);
			$('body').removeClass('anno__overlay');
			setTimeout(function(){anno__wrap.remove()},300);
		});
	});
	
})(jQuery);
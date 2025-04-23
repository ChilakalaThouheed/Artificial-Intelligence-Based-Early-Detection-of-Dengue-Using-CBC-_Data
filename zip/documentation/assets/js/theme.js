(function($) {
    'use strict';
	
	/*----------------------
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "1199",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });
	
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });		
$('html').smoothScroll(500);	

})(jQuery);
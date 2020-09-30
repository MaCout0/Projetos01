/**
*
*script do layout
*
*Autor Code Universe
*
**/
(function($, URL, Helpers) {

	var hamburger = function() {
		$('body').on('click', '.hamburger', function() {
			$('.links').toggle();
		})
	}

	$( document ).ready(function() {
		hamburger();
	})

})($, URL, Helpers)
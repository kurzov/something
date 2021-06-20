jQuery(document).ready(function($){
	$('html').toggleClass('no-js js');

	// animate
	$(window).on('scroll', function(){
		scrollTop = $(window).scrollTop();
		
		$(".anim").each(function(key){
			if (scrollTop > ($(this).offset().top + $(this).height() )) {
				$(this).removeClass('animated');
			} else if (scrollTop > ($(this).offset().top - ($(window).height() - ($(window).height() / 10)) )) {
				$(this).addClass('animated');
			}else{
				$(this).removeClass('animated');
			}
		});
	});
	
	$(window).trigger('scroll');
});
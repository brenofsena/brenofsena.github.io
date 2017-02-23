$(document).ready(function(){
	$('.open-nav').click(function(){
		$('.header').addClass('menu-active');
	});
	$('.close-nav').click(function(){
		$('.header').removeClass('menu-active');
	});
});
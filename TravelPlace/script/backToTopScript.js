var amountScrolled = 30;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back_to_top').fadeIn('slow');
	} 
	else {
		$('a.back_to_top').fadeOut('slow');
	}
});

$('a.back_to_top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
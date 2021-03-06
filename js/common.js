$(function() {

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.head-menu').slideToggle();
	});

	$(".tabs .tab").click(function() {
		$(".tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.popup-content').magnificPopup({
		type:'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('.theory-section:not(:first-child)').attr('style', 'display: none;')
	
	$('.theory-sections').mixItUp();

	$('.theory-filter li').click(function() {
		$('.theory-filter li').removeClass('active');
		$(this).addClass('active');
	});

	$('.reviews-carosel').owlCarousel({
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: true,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 600,
		autoplaySpeed: 800,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600,
		autoHeight: true
	});
});

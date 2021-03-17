$(document).ready(function () {
	//Анимация меню
	// var lastProduct;
	// $('nav div').mouseenter(function () {
	// 	$('.main-menu__desktop.' + lastProduct).css({
	// 		opacity: 0,
	// 		top: -300 + 'px'
	// 	});
	// 	var product = $(this).attr('data-menu');
	// 	$('.main-menu__desktop.' + product).css({
	// 		opacity: 1,
	// 		top: 74 + 'px'
	// 	});
		// $(this).children('.select').css('bottom', -16 + 'px').children('.select_left').css('transform', 'rotate(-45deg)');
		// $(this).children('.select').children('.select_right').css('transform', 'rotate(45deg)');
	});
	$('nav div').mouseleave(function () {
		lastProduct = $(this).attr('data-menu');
	});
	$('header').mouseleave(function () {
		$('.main-menu__desktop').css({
			opacity: 0,
			top: -300 + 'px'
		});
	});

	//Скроллинг видео
	$(window).on('scroll', function () {
		var scrollCoef = 0.0035;
		$('.main-screen__overlay').css({
			opacity: 1 - $(window).scrollTop() * scrollCoef
		})
		$('.main-screen video').css({
			opacity: 1 - $(window).scrollTop() * scrollCoef
		})
	});

	//Открытие поп-апа
	$('.popup-opener').on('click', function () {
		let popup = '.' + $(this).attr('data-popup');
		$('body').addClass('active');
		$(popup).fadeIn(300);
	});
	//Закрытие поп-апа
	$('.overlay').on('click', function() {
		$(this).parents('.popup').fadeOut(300);
		$('body').removeClass('active');
	});
	$('.popup-close').on('click', function() {
		$(this).parents('.popup').fadeOut(300);
		$('body').removeClass('active');
	});
});
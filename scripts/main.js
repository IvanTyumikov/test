$(document).ready(function () {
	//Анимация меню
	var lastProduct;
	$('nav div').mouseenter(function () {
		$('.main-menu__desktop.' + lastProduct).css({
			opacity: 0,
			top: -300 + 'px'
		});
		$('.' + lastProduct).children('.select').css('opacity', 0);
		$('.' + lastProduct).children('.arrow').css({
			transform: 'rotate(135deg)',
			'margin-top': -4 + 'px',
			'border-top': 3 +'px solid #000',
			'border-right': 3 +'px solid #000'
		});
		$('.' + lastProduct).children('.item-name').css('color', '#000');
		var product = $(this).attr('data-menu');
		$('.main-menu__desktop.' + product).css({
			opacity: 1,
			top: 74 + 'px'
		});
		$('.' + product).children('.select').css('opacity', 1);
		$('.' + product).children('.arrow').css({
			transform: 'rotate(-45deg)',
			'margin-top': 3 + 'px',
			'border-top': 3 +'px solid #F08B98',
			'border-right': 3 +'px solid #F08B98'
		});
		$('.' + product).children('.item-name').css('color', '#F08B98');
	});
	$('nav div').mouseleave(function () {
		lastProduct = $(this).attr('data-menu');
	});
	$('header').mouseleave(function () {
		$('.main-menu__desktop').css({
			opacity: 0,
			top: -300 + 'px'
		});
		$('.select').css('opacity', 0);
		$('.arrow').css({
			transform: 'rotate(135deg)',
			'margin-top': -4 + 'px',
			'border-top': 3 +'px solid #000',
			'border-right': 3 +'px solid #000'
		});
		$('nav .item-name').css('color', '#000');
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
	$('.overlay').on('click', function () {
		$(this).parents('.popup').fadeOut(300);
		$('body').removeClass('active');
	});
	$('.popup-close').on('click', function () {
		$(this).parents('.popup').fadeOut(300);
		$('body').removeClass('active');
	});

	//Маска для телефона (через плагин)
	$('#client_phone').mask("+7(999) 999-9999");

	//Валидация формы
	var validTokenName;
	$('#client_name').focusout(function () {
		if ($('#client_name').val().length != 0) {
			$('.callback-form__field.name .ico-error').css('display', 'none');
			$('.callback-form__field.name .label_error').css('display', 'none');
			$('.callback-form__field.name .ico-ok').css('display', 'block');
			validTokenName = 1;
		} else {
			$('.callback-form__field.name .ico-error').css('display', 'block');
			$('.callback-form__field.name .label_error').css('display', 'block');
			$('.callback-form__field.name .ico-ok').css('display', 'none');
			validTokenName = 0;
		}
		if (validTokenName && validTokenPhone && validTokenEmail && validTokenCheck) {
			submitBtn.removeAttr('disabled');
		} else {
			submitBtn.attr('disabled', 'disabled');
		}
	});
	var validTokenPhone;
	$('#client_phone').focusout(function () {
		if ($('#client_phone').val().indexOf('_') == -1) {
			$('.callback-form__field.phone .ico-error').css('display', 'none');
			$('.callback-form__field.phone .label_error').css('display', 'none');
			$('.callback-form__field.phone .ico-ok').css('display', 'block');
			validTokenPhone = 1;
		} else {
			$('.callback-form__field.phone .ico-error').css('display', 'block');
			$('.callback-form__field.phone .label_error').css('display', 'block');
			$('.callback-form__field.phone .ico-ok').css('display', 'none');
			validTokenPhone = 0;
		}
		if (validTokenName && validTokenPhone && validTokenEmail && validTokenCheck) {
			submitBtn.removeAttr('disabled');
		} else {
			submitBtn.attr('disabled', 'disabled');
		}
	});
	var validTokenEmail;
	$('#client_mail').focusout(function () {
		if ($('#client_mail').val().indexOf('@') != -1 && $('#client_mail').val().indexOf('.') != -1) {
			$('.callback-form__field.mail .ico-error').css('display', 'none');
			$('.callback-form__field.mail .label_error').css('display', 'none');
			$('.callback-form__field.mail .ico-ok').css('display', 'block');
			validTokenEmail = 1;
		} else {
			$('.callback-form__field.mail .ico-error').css('display', 'block');
			$('.callback-form__field.mail .label_error').css('display', 'block');
			$('.callback-form__field.mail .ico-ok').css('display', 'none');
			validTokenEmail = 0;
		}
		if (validTokenName && validTokenPhone && validTokenEmail && validTokenCheck) {
			submitBtn.removeAttr('disabled');
		} else {
			submitBtn.attr('disabled', 'disabled');
		}
	});

	//Активация/деактивация checked
	var checkBox = $('.data-processing input');
	var submitBtn = $('.callback-form__input .submitBtn');
	var validTokenCheck;
	$('.data-processing label').on('click', function () {
		if (checkBox.hasClass('checked')) {
			checkBox.removeAttr('checked');
			checkBox.removeClass('checked');
			validTokenCheck = 0;
		} else {
			checkBox.attr('checked', 'checked');
			checkBox.addClass('checked');
			validTokenCheck = 1;
		}
		if (validTokenName && validTokenPhone && validTokenEmail && validTokenCheck) {
			submitBtn.removeAttr('disabled');
		} else {
			submitBtn.attr('disabled', 'disabled');
		}
	});
});
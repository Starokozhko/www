// $(function () {
	// console.log($('#in-admin'));

	$(".in-admin").click( function() {

		// console.log($(this)[0].id);

		//затемненная подложка
		$("<div/>", {
			"class": "bg-full",
			click: function(){
				$('.bg-full').remove();
			}
		}).appendTo("body");
		// сомо модальное окно
		$("<div/>", {
			"class": "modalWindow",
		}).appendTo(".bg-full");

		//определяем что выбранно (вход или регистрация)
		if ($(this)[0].id == 'in-admin') {

		// форма отправки
		$("<form/>", {
			"class": "formInAdmin",
			action: "#"
		}).appendTo(".modalWindow");
		// крестик для закрытия + функция закрытия
		$("<span/>", {
			"class": "form-close",
			text: "x",
			click: function(){
				$('.bg-full').remove();
			}
		}).appendTo(".formInAdmin");
		// Заглавный текст
		$("<h2/>", {
			"class": "form-title",
			text: "Форма входа в админ панель"
		}).appendTo(".formInAdmin");
		// строка ввода логина
		$("<input/>", {
			"class": "form-input",
			id: "login",
			"required": "required",
			"placeholder": "Логин",
			type: "text"
		}).appendTo(".formInAdmin");
		// строка ввода пароля
		$("<input/>", {
			"class": "form-input",
			id: "pass",
			"required": "required",
			"placeholder": "Пароль",
			type: "password"
		}).appendTo(".formInAdmin");
		// кнопка отправки
		$("<input/>", {
			"class": "form-button",
			id: "button-send",
			type: "submit",
			value: "Отправить"
		}).appendTo(".formInAdmin");


	} else {

		$('.modalWindow').css({
			'height': '620px',
			'margin': "20px auto"
		});


		// форма отправки
		$("<form/>", {
			"class": "formRegistretion",
			action: "#"
		}).appendTo(".modalWindow");
		// крестик для закрытия + функция закрытия
		$("<span/>", {
			"class": "form-close",
			text: "x",
			click: function(){
				$('.bg-full').remove();
			}
		}).appendTo(".formRegistretion");

		// Заглавный текст
		$("<h2/>", {
			"class": "form-title",
			text: "Форма регистрации пользователя"
		}).appendTo(".formRegistretion");

		// строка ввода имя
		$("<input/>", {
			"class": "form-input",
			id: "fitstName",
			"required": "required",
			"placeholder": "Имя",
			type: "text"
		}).appendTo(".formRegistretion");

		// строка ввода фамили
		$("<input/>", {
			"class": "form-input",
			id: "lastName",
			"required": "required",
			"placeholder": "Фамилия",
			type: "text"
		}).appendTo(".formRegistretion");

		// строка ввода номер телефона
		$("<input/>", {
			"class": "form-input",
			id: "numPhone",
			"required": "required",
			"placeholder": "Номер телефона",
			type: "text"
		}).appendTo(".formRegistretion");

		// строка ввода почта
		$("<input/>", {
			"class": "form-input",
			id: "email",
			"required": "required",
			"placeholder": "E-mail",
			type: "email"
		}).appendTo(".formRegistretion");

		$("<input/>", {
			"class": "form-input",
			id: "password-one",
			"required": "required",
			"placeholder": "Введите ваш пароль",
			type: "password"
		}).appendTo(".formRegistretion");

		$("<input/>", {
			"class": "form-input",
			id: "password-tow",
			"required": "required",
			"placeholder": "Повторите ваш пароль",
			type: "password"
		}).appendTo(".formRegistretion");

		$("<div/>", {
			id: "radioset",
		}).appendTo(".formRegistretion");


		$("<input/>", {
			id: "radio1",
			name: "radio",
			checked: "checked",
			type: "radio"
		}).appendTo("#radioset");

		$("<label/>", {
			"for": "radio1",
			text: "Гость"
		}).appendTo("#radioset");

		$("<input/>", {
			id: "radio2",
			name: "radio",
			type: "radio"
		}).appendTo("#radioset");

		$("<label/>", {
			"for": "radio2",
			text: "Администратор"
		}).appendTo("#radioset");



		// кнопка отправки
		$("<input/>", {
			"class": "form-button",
			id: "button-send",
			type: "submit",
			value: "Отправить"
		}).appendTo(".formRegistretion");


	}

});

		// вывод полного текста статьи
		$(".item").click(function(){
			$(".item").find(".shortText").css('display', 'block');
			$(".item").find(".allText").css('display', 'none');

			
				$(this).find(".shortText").css('display', 'none');
				$(this).find(".allText").css('display', 'block');
			
		});


// })();
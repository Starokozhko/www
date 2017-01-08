// $(function () {
	// console.log($('#in-admin'));

	$(".in-admin").click( function() {

		// console.log($(this)[0].id);

		//затемненная подложка
		$("<div/>", {
			"class": "bg-full",
			
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
var news = {
	id: '',
	title: '',
	shortText: '',
	text: '',
	idAuthor: '',
	view:'',
	coments: '',
	datecreate: ''
	}

var post = {
	posts: [],
	getPost: function(){
			// var xmlhttp = getXmlHttp();
			var valSearch = 'SELECT * FROM post';

			// 	xmlhttp.open("POST", 'http://softgroup/adminca/getPost.php?q=' + valSearch, true); //q=' + valSearch
			// 	xmlhttp.send('q=' + valSearch);
			// 	xmlhttp.onreadystatechange = function() {

			// 		if (xmlhttp.readyState == 4) {
			// 			if(xmlhttp.status == 200) {
			// 				var answerServ = JSON.parse(xmlhttp.responseText);
			// 				var picture = {};
			// 				alert('ok');

			// 				// for(var i = 0; i < answerServ.hits.length; i++) {
			// 				// 	var rand = Math.floor(Math.random() * (answerServ.hits.length - 1) + 1);

			// 				// 	document.getElementById('b' + (i +1 )).style.backgroundImage = "url('" + answerServ.hits[rand].webformatURL + "')";
			// 				// 	document.getElementById('b' + (i +1 )).childNodes[1].innerHTML = answerServ.hits[rand].tags;

			// 				// }	
			// 			}
			// 		}
			// 	}


			var data = $.ajax({
				async: true,
				type: 'POST',
				url: 'http://softgroup/adminca/getPost.php', //?q=' + valSearch,
				// dataType: 'jsonp',
				data: 'func=1',
				success: function(data){
					console.log('ok!!!');
					// console.log(data);
					var json = $.parseJSON(data);

						// console.log(json + ' первый');
						var count = 0;
						for( var id in json  ) {
								 // var value = json[id];
							this.news = news;
							this.news.id = json[id].id;
							this.news.title = json[id].title;
							this.news.shortText = json[id].shortText;
							this.news.text = json[id].text;
							this.news.idAuthor = json[id].isAutor;
							this.news.view = json[id].view;
							this.news.coments = json[id].coments;
							this.news.datecreate = json[id].datecreate;
							
							console.log(this.news);
							post.posts[count] = this.news;
							count++;
						}

						console.log(json);
						return json;
				},
				error: function(){console.log('Problem');}
			}).responseJSON;

// console.log(data);
console.log(this.posts);
},
add: function(){},
correct: function(){},
deleted: function(){}
}
$('#getpost').click(function(){
	// console.log('Proverka');
	post.getPost();
	console.log(post);
});

		// вывод полного текста статьи
		// $(".item").click(function(){
		// 	$(".item").find(".shortText").css('display', 'block');
		// 	$(".item").find(".allText").css('display', 'none');


		// 		$(this).find(".shortText").css('display', 'none');
		// 		$(this).find(".allText").css('display', 'block');

		// });


// })();
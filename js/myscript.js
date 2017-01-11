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


var post = {
	posts: [],
	getPost: function(){

		var data = $.ajax({
			async: true,
			type: 'POST',
				url: 'http://softgroup/adminca/getPost.php', //?q=' + valSearch,
				// dataType: 'jsonp',
				data: 'func=1',
				success: function(data){
					// console.log('ok!!!');
					// console.log(data);
					var self = this;
					var json = $.parseJSON(data);
					post.posts = json; 
					// console.log(post.posts);
					// console.log(post.posts[1]['id']);
					for(var prop in post.posts) {
						// console.log(prop);
						setAdminList(post.posts[prop]['id'], post.posts[prop]['title']);
					}

				},
				error: function(){console.log('Problem');}
			}).responseJSON;

		window.setTimeout(dellNews, 500);
		window.setTimeout(editionNews, 500);
	},
	addNews: function(title, shortText, text, idAuthor){
		// alert("Сюда зашло!!!");
		var data = $.ajax({
			async: true,
			type: 'POST',
				url: 'http://softgroup/adminca/reload.php', //?q=' + valSearch,
				// dataType: 'jsonp',
				data: {
					func: 2,
					title: title,
					shortText: shortText,
					text: text,
					idAuthor: 1
				},
				success: function(data){

					
				},
				error: function(){console.log('Problem');}
			});

	},
	getOne: function(id) {

		var data = $.ajax({
			async: true,
			type: 'POST',
				url: 'http://softgroup/adminca/getPost.php', //?q=' + valSearch,
				// dataType: 'jsonp',
				data: {
						func: 5,
						news: id,
				},
				success: function(data){
					// console.log('ok!!!');
					// console.log(data);

					// var self = this;
					// var json = $.parseJSON(data);
					// post.posts = json; 
					// console.log(post.posts[0][id]);
					// console.log(post.posts[1]['id']);
					for(var prop in post.posts) {
						// console.log(prop);
						// console.log(post.posts[prop]['id']);
						$('input[name="add-title"')[0].value = post.posts[id]['title'];
						$('input[name="add-shortText"')[0].value = post.posts[id]['shortText'];
						$('textarea[name="add-text"')[0].value = post.posts[id]['text'];
						// console.log(post.posts[prop]['title']);
					}

				},
				error: function(){console.log('Problem');}
			}).responseJSON;

		// debugger;
						// $('input[name="add-title"')[0].value = post.posts[id]['title'];
						
	},
	correct: function(id){

		post.getOne(id);

	},
	deleted: function(id){
		var data = $.ajax({
			async: true,
			type: 'POST',
				url: 'http://softgroup/adminca/getpost.php', //?q=' + valSearch,
				// dataType: 'jsonp',
				data: {
					func: 3,
					idnews: id,
				},
				success: function(data){

					document.location.replace('../adminca/index_admin.php');
				},
				error: function(){console.log('Problem');}
			});
	}
}


var countID = 1;

function setAdminList (id, text) {
	var crRow = document.createElement("tr"),
	oneCell = document.createElement("td"),
	twoCell = document.createElement("td"),
	threeCell = document.createElement("td"),
	fourCell = document.createElement("td"),
	span = document.createElement("span"),
	span2 = document.createElement("span");

			//первая ячейка
			oneCell.setAttribute('class', 'table-id-row'); 
			oneCell.innerHTML = countID; 

			//вторая ячейка
			twoCell.setAttribute('class', "table-title-row"); 
			twoCell.innerHTML = text;

			//трейтья ячейка
			threeCell.setAttribute('id', "table-cor_" + id); 
			threeCell.setAttribute('class', "ui-state-default ui-corner-all table-button-cor");  
			span.setAttribute('class', "ui-icon ui-icon-pencil");
			threeCell.appendChild(span);

			//четвертая ячейка 
			fourCell.setAttribute('id', 'table-del_' + id);
			fourCell.setAttribute('class', 'ui-state-default ui-corner-all table-button-del'); 
			span2.setAttribute('class', 'ui-icon ui-icon-trash');
			fourCell.appendChild(span2);

		


			crRow.appendChild(oneCell);
			crRow.appendChild(twoCell);
			crRow.appendChild(threeCell);
			crRow.appendChild(fourCell);

			$('.table').append(crRow);
			countID++;
		}


		$('#table-add').click(function(){
			location.href = 'add.php';
		});

		$('#addNews').click(function(){

		var title = $('input[name="add-title"]')[0].value;
		var shortText = $('input[name="add-shortText"]')[0].value;
		var text = $('textarea[name="add-text"]')[0].value;
		var idAuthor = 1;
		post.addNews(title, shortText, text, idAuthor);

		document.location.href = "index_admin.php?add=added";
	});

		// удаление статьи
		function dellNews () {
			$('td[class="ui-state-default ui-corner-all table-button-del"').click(function(){

				var idnews = $(this).attr('id');
				console.log(idnews);
				var idNews = idnews.split('_');
				post.deleted(idNews[1]);
				// console.log(q[1]);
			});
		}
				// корректировка статьи
				function editionNews () {
					$('td[class="ui-state-default ui-corner-all table-button-cor"').click(function(){

						var idnews = $(this).attr('id');
						console.log(idnews);
						var idNews = idnews.split('_');
						$('.content-index').css('display', 'none');
						$('.content-edition').css('display', 'block');
						post.correct(idNews[1]);
				// console.log(q[1]);
			});
				}


				function setPage () {
					post.getPost();
				}

				setPage();




// })();
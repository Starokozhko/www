<?php

include("header_admin.php");

?>


<div class="wrapper">
	<aside class="sidebar">
		<ul class="sidebar-list">
			<li>Записи</li>
			<li>Коментарии</li>
			<li>Пользователи</li>
		</ul>
	</aside>


	<div class="content">
		<div class="content-index">

			<div class="admin-add">
				<h2 class='admin-add-h2'>СТАТЬИ</h2>
			</div>
			<table class="table">

				<tr>
					<th class="table-id">№</th>
					<th class="table-title">Название статьи</th>
					<th colspan="2" id="table-add" class="ui-state-default ui-corner-all table-button-plus"><span class="ui-icon ui-icon-plusthick"></span></th>

				</tr>


			</table>
			

		</div>

		<div class="content-edition">

			<div class="admin-red">
				<h2 class='admin-add-h2'>Редактирование статьи:</h2>
			</div>
			<form id="editing" action="index_admin.php" method='POST'>
				<a href="index_admin.php" class='right-close'>X</a>
				<input name="add-title" class="form-add form-add-title" type="text" placeholder="Название статьи"/>
				<input name="add-shortText" class="form-add form-add-shortTexe" type="text" placeholder="Начальный текст"/>
				<textarea class="add-text" name="add-text" >Полный текст статьи...</textarea>
				<button class="form-add form-add-button" id="aditionNews">Сохранить изменение</button>
			</form>

		</div>

	</div>

	<?php

	include("../adminca/footer_admin.php");


	?>
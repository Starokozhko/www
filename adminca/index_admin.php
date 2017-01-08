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
		<h2>Статьи:</h2>

		<table class="table">
			
				<tr>
					<th class="table-id">№</th>
					<th class="table-title">Название статьи</th>
					<th></th>
					<th></th>
				</tr>
				<tr>
					<td class="">1</td>
					<td class="">Первая статься</td>
					<td id="table-cor" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-pencil"></span></td>
					<td id="table-del" class="ui-state-default ui-corner-all"><span class="ui-icon ui-icon-trash"></span></td>
				</tr>

			
		</table>

<a id="getpost" href="#">Proverka</a>
	</div>


</div>






<?php

include("../adminca/footer_admin.php");


?>
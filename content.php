<?php
include('conect.php');
$stmt = $pdo->query('SELECT * FROM post WHERE idPost = '.$content);
$stmt2 = $pdo->query('SELECT * FROM coments');
$back = $_SERVER['HTTP_REFERER'];
while ($row = $stmt->fetch())
{

	echo "<div class='content-item'>";
	echo "<a class='content-link' href='".$back."'> < назад </a>";
	echo "<ul id='icons' class='ui-widget ui-helper-clearfix right'>";
	echo "<li class='ui-state-default ui-corner-all' title='.ui-icon-person'><span class='ui-icon ui-icon ui-icon-person'></span>".$row['view']."</li>";
	echo "<li class='ui-state-default ui-corner-all' title='.ui-icon-comment'><span class='ui-icon ui-icon-comment'></span>".$row['coments']."</li>";
	echo "</ul>";
	echo "<h2 class='content-titel'>".$row['titlePost']."</h2>";
	echo "<p  class='content-text'>".$row['text']."</p>";

	echo "<h4>Коментарии:</h4>";
	echo "<div class='content-coments'>";
	echo "</div>";
	echo "</div>";
}
?>

<!-- <div class="page-item">
	<ul id="icons" class="ui-widget ui-helper-clearfix right">
		<li class="ui-state-default ui-corner-all" title=".ui-icon-person"><span class="ui-icon ui-icon ui-icon-person"></span>51</li>
		<li class="ui-state-default ui-corner-all" title=".ui-icon-comment"><span class="ui-icon ui-icon-comment"></span>15</li>
	</ul>
	<h2 class="page-titel">Название статьи 0</h2>
	<p class="page-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolorem repellendus eum eveniet illum mollitia!</p>
	 -->
	
<!-- 	<div class="page-coments">
		
	</div> -->
<!-- </div> -->
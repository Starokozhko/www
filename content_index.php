
<?php
				// ==============================================     =============================================

include('conect.php');
$stmt = $pdo->query('SELECT * FROM post');

while ($row = $stmt->fetch())
{
	echo "<a href='?content=".$row['idPost']."' class='item'>";
	echo "<h2>".$row['titlePost']."</h2>";
	echo "<p class='shortText'>".$row['shortText']."</p>";
	echo "<p class='allText'>".$row['text']."</p>";
	echo "<ul id='icons' class='ui-widget ui-helper-clearfix'>";
	echo "<li class='ui-state-default ui-corner-all' title='.ui-icon-person'><span class='ui-icon ui-icon ui-icon-person'></span>".$row['view']."</li>";
	echo "<li class='ui-state-default ui-corner-all' title='.ui-icon-comment'><span class='ui-icon ui-icon-comment'></span>0</li>";
	echo "</ul>";
	echo "</a>";
}

				// ==============================     ======================================
?>
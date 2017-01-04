</div>


			<script src="js/jquery-ui.js"></script>
			<script src="js/myscript.js"></script>

			<script>



				$( "#button" ).button();
				$( "#button-icon" ).button({
					icon: "ui-icon-gear",
					showLabel: false
				});



				$( "#radioset" ).buttonset();



				$( "#controlgroup" ).controlgroup();



				$( "#tabs" ).tabs();



				$( "#dialog" ).dialog({
					autoOpen: false,
					width: 400,
					buttons: [
					{
						text: "Ok",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "Cancel",
						click: function() {
							$( this ).dialog( "close" );
						}
					}
					]
				});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});




$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
	);
</script>

<?php
// ==============================================     =============================================

// $host = 'localhost';
// $db = 'softgroup';
// $charset = "utf8_bin";
// $user = 'adminbd';
// $pass = 'adm';





// $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
// $opt = array(
// 	PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
// 	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
// 	);
// $pdo = new PDO($dsn, $user, $pass, $opt);



// $stmt = $pdo->query("SET NAMES 'utf8'");
// $stmt = $pdo->query("set character_set_client='utf8'");
// $stmt = $pdo->query("set character_set_connection='utf8'");
// $stmt = $pdo->query("set character_set_results='utf8'");
// $stmt = $pdo->query("set character_set_database='utf8'");
// $stmt = $pdo->query("set collation_connection='utf8_bin'");
// $stmt = $pdo->query('SELECT * FROM newpost');

// while ($row = $stmt->fetch())
// {
// 	echo $row['titlePost'] . "\n <br>";
// 	echo $row['shortText'] . "\n";
// }

// ==============================     ======================================

	// // подключение к бзе данных
	// $db = mysql_connect('localhost','adminbd','adm');
	// // выбираем нужную нам базу данных
	// mysql_select_db('softgroup', $db);

//mysql_query("SET NAMES 'utf8'");
//mysql_query ("set character_set_client='utf8'");
//mysql_query ("set character_set_connection='utf8'");
//mysql_query ("set character_set_results='utf8'");
//mysql_query ("set character_set_database='utf8'");
//mysql_query ("set collation_connection='utf8_bin'");

	// //выбираем все из тпблицы user
	// $result = mysql_query('SELECT * FROM post', $db);

	// //преобразовывает в ассоциативный масив
	// $row = mysql_fetch_array($result);
	// do {
	// 	echo "<h2>$row[titlePost]</h2>";
	// }
	// while($row = mysql_fetch_array($result));






?>
</body>
</html>
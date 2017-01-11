<?php
// echo $_POST['title'];
include('../conect.php');


	if ($_POST['func'] == 2) {
		// echo "YES";
		$querys = 'INSERT INTO post (titlePost, shortText, text, idAuthor) 
		VALUES ("'.$_POST["title"].'", "'.$_POST["shortText"].'", "'.$_POST["text"].'", 1)';
		$stmt = $pdo->query($querys);
		return 'ok';
	} else {
		echo "No((";
	}

?>
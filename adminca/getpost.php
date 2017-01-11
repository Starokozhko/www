<?php
include('../conect.php');


if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

	if($_POST['func'] == 1) {

		$querys = 'SELECT * FROM post';//$_POST['q'];

		$stmt = $pdo->query($querys);


		while ($row = $stmt->fetch())
		{

			$arrays[$row['idPost']]= array( 'id' => $row['idPost'],
				'title' => $row['titlePost'],
				'shortText' => $row['shortText'],
				'text' => $row['text'],
				'isAutor' => $row['isAutor'],
				'view' => $row['view'],
				'coments' => $row['coments'],
				'datecreate' => $row['datecreate'],
				);

		};

		// echo $arrays[1][];
		$json = json_encode($arrays);
		echo $json;
		return $json;

	} else if ($_POST['func'] == 3) {
		echo "YES";
		$querys = 'DELETE FROM post WHERE idPost = "'.$_POST["idnews"].'"';
		$stmt = $pdo->query($querys);

	// }  else if ($_POST['func'] == 4) {

	// 	echo "YES";
	// 	$querys = 'UPDATE post SET titlePost = "'.$_POST['titlePost'].'", shortText="'.$_POST['shortText'].'", text="'.$_POST['text'].'"';
	// 	$stmt = $pdo->query($querys);

	}  else if ($_POST['func'] == 5) {

		$querys = 'SELECT * FROM post WHERE idPost="'.$_POST['id'].'"';
		$stmt = $pdo->query($querys);

			while ($row = $stmt->fetch())
		{

			$arrays[$row['idPost']]= array( 'id' => $row['idPost'],
				'title' => $row['titlePost'],
				'shortText' => $row['shortText'],
				'text' => $row['text'],
				'isAutor' => $row['isAutor'],
				'view' => $row['view'],
				'coments' => $row['coments'],
				'datecreate' => $row['datecreate'],
				);

		};
		$json = json_encode($arrays);
		echo $json;
		return $json;

	} else {
		echo "No((";
	}

	exit;
}
//Если это не ajax запрос
echo 'Это не ajax запрос!';



// echo ($_POST);


?>
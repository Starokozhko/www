<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Yuriy Starokozhko">
	<link rel="shortcut icon" href="../images/favicon.ico" type="image/png">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>test Blog</title>
	<script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	
	<link rel="stylesheet" href="../css/jquery-ui.css">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/admin-style.css">
</head>
<body>
<?php  
	include('../conect.php');

?>
	<header>
		<h1>Test Blog</h1>
		<div class="account">
			<button id="register" class="ui-button ui-corner-all ui-widget in-admin">
				<span class="ui-icon ui-icon ui-icon-person"></span>
				<?php echo 'Юзер' ?> </button>

				<button id="out-admin" class="ui-button ui-corner-all ui-widget in-admin">
					<span class="ui-icon ui-icon ui-icon-home"></span>
					Выход </button>


				</div>
			</header>
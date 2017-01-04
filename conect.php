<?php

$host = 'localhost';
$db = 'softgroup';
$charset = "utf8_bin";
$user = 'adminbd';
$pass = 'adm';
$url = $_SERVER['HTTP_REFERER'];

// echo $url;



$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = array(
	PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	);
$pdo = new PDO($dsn, $user, $pass, $opt);



$stmt = $pdo->query("SET NAMES 'utf8'");
$stmt = $pdo->query("set character_set_client='utf8'");
$stmt = $pdo->query("set character_set_connection='utf8'");
$stmt = $pdo->query("set character_set_results='utf8'");
$stmt = $pdo->query("set character_set_database='utf8'");
$stmt = $pdo->query("set collation_connection='utf8_bin'");

?>
<?php
	include(__DIR__ . '/../vendor/autoload.php');
	require __DIR__ . '/../version.php';
	$loader = new Twig_Loader_Filesystem(__DIR__ . '/../template/');
	$twig = new Twig_Environment($loader, array(
		'cache'       => __DIR__ . '/../cache',
		'auto_reload' => true
	));
	exit($twig->render($data['tag'].".tmpl", ['page' => $data, 'version' => RES_VERSION]));
	
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$myObj = new \stdClass();
$myObj->name = "Maija Möttönen";
$myObj->age = 30;
$myObj->city = "Helsinki";

$myJSON = json_encode($myObj);

echo $myJSON;
?>

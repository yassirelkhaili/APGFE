<?php 
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *"); 
header("Content-Type: application/json"); 

$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 

switch($method) {
    case "POST": 
        $data = json_decode($data_json); 
        echo json_encode($data->email); 
        break; 
}


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
        $input = json_decode($data_json); 
        $sql = "SELECT * FROM phpcrud.etudiant"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $userdata = $stmt->fetchAll(pdo::FETCH_OBJ); 
        foreach ($userdata as $user) {
            if ($user->email === $input->email && $user->password === $input->password) {
                echo json_encode("success");
                exit(); 
            } 
        }
        echo json_encode("failure");
        break; 
}
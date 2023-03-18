<?php 
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type: application/json");
header("Access-Control-Allow-Methods: POST"); 

$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 

switch($method) {
    case "POST": 
        $input = json_decode($data_json); 
        $sql = "SELECT * from phpcrud.users"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $users = $stmt->fetchAll(pdo::FETCH_OBJ); 
        foreach ($users as $user) {
            if (password_verify($input->password,$user->password) && $user->email === $input->email) {
                echo json_encode("login_success"); 
                exit(); 
            }
        }
        echo json_encode("login_failure"); 
        break; 
}


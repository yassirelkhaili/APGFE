<?php 
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST"); 
header("Content-Type: application/json"); 
$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 
switch($method) {
    case "POST": 
        $sql = "SELECT * FROM phpcrud.users"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $users = $stmt->fetchAll(pdo::FETCH_OBJ); 
        $input = json_decode($data_json); 
        foreach ($users as $user) {
            if ($user->email === $input->email) {
                echo json_encode("duplicate_email"); 
                exit(); 
            } else if ($user->identifiant === $input->identifiant) {
                if (!empty($user->password) || !empty($user->email)) {
                echo json_encode("user_exists"); 
                exit(); 
                } else {
                $hashedPassword = password_hash($input->password, PASSWORD_DEFAULT); 
                $sql = "UPDATE phpcrud.users SET email=:email,password=:password WHERE identifiant=:identifiant"; 
                $stmt = $conn->prepare($sql); 
                echo json_encode($stmt->execute([":email"=>$input->email,":password"=>$hashedPassword,"identifiant"=>$input->identifiant]) ? "auth_success" : "SQL Error");  
                exit();  
                }
            }
        }
        echo json_encode("auth_failure"); 
        break; 
}
exit(); 
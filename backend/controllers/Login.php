<?php 
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST"); 
header("Content-Type: application/json"); 
$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 
class Response {
    public $message; 
    public $admin; 
    }
switch($method) {
    case "POST": 
        $input = json_decode($data_json); 
        $sql = "SELECT * from phpcrud.users"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $users = $stmt->fetchAll(pdo::FETCH_OBJ);  
        foreach ($users as $user) {
            if (password_verify($input->password,$user->password) && $user->email === $input->email) {
                $response = new Response; 
                $response->message = "login_success"; 
                $response->admin = false; 
                echo json_encode($response);
                exit(); 
            }
        }
        $sql_admin = "SELECT email, admin_key FROM phpcrud.admin"; 
        $stmt = $conn->prepare($sql_admin); 
        $stmt->execute(); 
        $admins = $stmt->fetchAll(pdo::FETCH_OBJ);
        foreach ($admins as $admin) {
            if ($input->email === $admin->email && $input->password === $admin->admin_key) {
                $response = new Response; 
                $response->message = "login_success"; 
                $response->admin = true; 
                echo json_encode($response); 
                exit(); 
            }
        }
        $response = new Response; 
        $response->message = "login_failure"; 
        $response->admin = false; 
        echo json_encode($response);
        break;
}


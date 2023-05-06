<?php 
declare(strict_types = 1); 
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
    public function __construct(string $message, bool $admin)
    {
        $this->message = $message; 
        $this->admin = $admin;
    }
    }
function handleResponse (string $message, bool $admin) {
    try {
        $response = new Response($message, $admin); 
    } catch (TypeError $e) {
        echo "Error: " . $e->getMessage(); 
    }
    echo json_encode($response);
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
                handleResponse("login_success", false); 
                exit(); 
            }
        }
        $sql_admin = "SELECT email, admin_key FROM phpcrud.admin"; 
        $stmt = $conn->prepare($sql_admin); 
        $stmt->execute(); 
        $admins = $stmt->fetchAll(pdo::FETCH_OBJ);
        foreach ($admins as $admin) {
            if ($input->email === $admin->email && $input->password === $admin->admin_key) {
                handleResponse("login_success", true); 
                exit(); 
            }
        }
        handleResponse("login_failure", false); 
        break;
}


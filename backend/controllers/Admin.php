<?php 
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *"); 
header("Content-Type: application/json"); 
$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 
switch ($method) {
    case "GET":
        $sql = "SELECT id, nom, prenom, email, role FROM phpcrud.users"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $users = $stmt->fetchAll(pdo::FETCH_OBJ);
        echo json_encode($users); 
        break;  
    case "POST": 
        $data = json_decode($data_json);
        $sql = "INSERT INTO phpcrud.users(nom,prenom,email,role) VALUES(:nom,:prenom,:email,:role)"; 
        $stmt = $conn->prepare($sql);
        $stmt->execute([":nom"=>$data->nom, ":prenom"=>$data->prenom, ":email"=>"Pas encore soumis", ":role"=>$data->role]);
    break; 
    case "DELETE": 
        $id = explode("/", $_SERVER["REQUEST_URI"])[4];
        if (isset($id) && is_numeric($id)) {
            $sql = "DELETE from phpcrud.users WHERE id=:id"; 
            $stmt = $conn->prepare($sql);
            $stmt->execute([":id"=>$id]);
        }
            break; 
}
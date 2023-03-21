<?php 
//API DB interactions
require "../config/pdo.php"; 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST"); 
header("Content-Type: application/json"); 
$method = $_SERVER["REQUEST_METHOD"]; 
switch($method) {
    case "POST": 
    $data_raw = file_get_contents("php://input"); 
    $data = json_decode($data_raw);  
    if($data) {
        $sql = "INSERT INTO etudiant(nom,prenom,email,classement) VALUES(:nom,:prenom,:email,:classement)"; 
        $stmt = $conn->prepare($sql);
        $stmt->execute([":nom"=>$data->nom, ":prenom"=>$data->prenom, ":email"=>$data->email, ":classement"=>$data->classement]);
    }
    break; 
    case "GET": 
        $sql="SELECT idEtud,nom,prenom,email,classement FROM etudiant"; 
        $stmt = $conn->prepare($sql); 
        $stmt->execute(); 
        $data_raw = $stmt->fetchAll((PDO::FETCH_OBJ)); 
        $data = json_encode($data_raw); 
        echo $data;
        break; 
    case "PUT": 
        $id = explode("/", $_SERVER["REQUEST_URI"])[4]; 
        if (isset($id) && is_numeric($id)) {
        $data_raw = file_get_contents("php://input"); 
        $data = json_decode($data_raw);
        $sql = "UPDATE etudiant SET nom=:nom,prenom=:prenom,email=:email,classement=:classement WHERE idEtud=:id"; 
        $stmt = $conn->prepare($sql);
        $stmt->execute([":id"=>$id, ":nom"=>$data->nom,":prenom"=>$data->prenom,":email"=>$data->email,":classement"=>$data->classement, ":id"=>$id]);
        }
        break; 
    case "DELETE": 
        $id = explode("/", $_SERVER["REQUEST_URI"])[4];
        if (isset($id) && is_numeric($id)) {
            $sql = "DELETE from etudiant WHERE idEtud=:id"; 
            $stmt = $conn->prepare($sql);
            $stmt->execute([":id"=>$id]);
        }
            break; 
}




<?php 
//API CONFIG
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST"); 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$data_json = file_get_contents("php://input"); 
$method = $_SERVER["REQUEST_METHOD"]; 
if (!empty($data_json) && $method === "POST") {
    $mail = new PHPMailer(true); 
    $data = json_decode($data_json); 
        $name = $_ENV["SMTP_EMAIL"]; 
        $key = $_ENV["SMTP_PWORD"]; 
        $subject = "Message from " . $data->name; 
        $body = $data->message . "<br></br><strong>Telephone:<strong>" . $data->phone . "<br></br><strong>Email:<strong>" . $data->email; 
        try {        
          $mail->isSMTP();                                            
          $mail->Host       = 'smtp.gmail.com';                     
          $mail->SMTPAuth   = true;                                   
          $mail->Username   = $name;                     
          $mail->Password   = $key;                               
          $mail->SMTPSecure = 'tls';            
          $mail->Port       = 587;    
          $mail->setFrom($data->email);                                  
          $mail->addAddress($name);               
          $mail->isHTML();              
          $mail->Subject = $subject;
          $mail->Body    = $body;
          $mail->send();
          echo "Message was sent successfully"; 
      } catch (Exception $e) {
          echo "Unable to send message: {$mail->ErrorInfo}";
      }  
      $mail->smtpClose(); 
}
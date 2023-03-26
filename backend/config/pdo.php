<?php 
//database connection
$dsn = 'mysql:host=localhost;port=3301;dbname=phpcrud';
$username = 'root';
$password = 'root';

try {
    $conn = new PDO($dsn, $username, $password);
    // Use the $pdo object to execute queries
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
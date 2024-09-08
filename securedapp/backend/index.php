<?php
session_start();
require('vendor/autoload.php');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: http://localhost:3000");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Return a 200 OK response for the preflight request
    http_response_code(200);
    exit();
}
$data =json_decode(file_get_contents("php://input"));
switch($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if ($_GET['register'] == 'register') {
            // Handle user registration
            echo "registration success";
            print_r($data->lname);
        } elseif ($_GET['login'] == 'login') {
            // Handle user login
            echo "login success";
            print_r($data->email);
        }
        break;
    case 'OPTIONS':
        echo "options allowed";
        break;
    default:
        // If method not allowed, return an error
        http_response_code(405);
        echo json_encode(["message" => "Method Not Allowed"]);
        break;
}
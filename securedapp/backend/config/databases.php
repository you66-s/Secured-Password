<?php
//**********************************************************//
//                                                          //
//  SecuredPassword.com                                     //
//  database configuration.                                 //
//  V.0.1                                                   //
//  CREATION : 2024/09/05                                   //
//  MISE A JOUR : 2024/09/05                                //
//                                                          //
//  Tous droits réservés.                                   //
//                                                          //
//**********************************************************//
// DATABASE CONNECTION
class Database{
    private $host = "localhost";
    private $user = "root";
    private $pass = "";
    private $dbname = "secured_password";
    public function connection(){
        try {
            $conn = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }catch (Exception $e){
            echo "Database Connection Failed ".$e->getMessage() . "<br>";
            exit();
        }
    }
}

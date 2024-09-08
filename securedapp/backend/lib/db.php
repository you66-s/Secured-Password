<?php
//**********************************************************//
//                                                          //
//  SecuredPassword.com                                     //
//  SQL statements.                                         //
//  V.0.1                                                   //
//  CREATION : 2024/09/05                                   //
//  MISE A JOUR : 2024/09/05                                //
//                                                          //
//  Tous droits réservés.                                   //
//                                                          //
//**********************************************************//
include "./config/databases.php";
$db = new Database();
$conn = $db->connection();
function createUser($username, $email, $password){

}
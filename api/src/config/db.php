<?php
class db {
    // Properties
    private $dbhost  = 'localhost';
    private $dbuser  = 'root';
    private $dbpass  = '';
    private $dbname  = 'slimapp';
    private $charset = 'utf8mb4';

    // Connect
    public function connect() {
        $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname;charset=$this->charset";
        $dbConnection      = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbConnection;
    }
}

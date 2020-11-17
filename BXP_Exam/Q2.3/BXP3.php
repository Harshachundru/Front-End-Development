<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>BXP SOFTWARE</title>
    </head>

    <body>
        <h1>FULL STACK DEVELOPER EXAM</h1>
        <script src="BXPq3.js"></script>
		<?php

//DataBase Info

$host = "127.0.0.1"; //Host name
$username = "BXP_At_Home_Name"; //Mysql username
$password = "BXP_At_Home_Key"; //Mysql password
$db_name = "bxp_at_home"; //Database name

//Connect to server and select database

$conn = mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");

//Get all data from the table

$query_tables = mysql_query('SELECT bxp_test FROM INFORMATION_SCHEMA.TABLES WHERE table_name LIKE "%table%" ');
//applicable when needed to worl with all tables
while($table = mysql_fetch_assoc($query_tables)){

    $query = mysql_query("SELECT * from ".$table['bxp_test'] );
    $bxp_test = SELECT name, age, job_title FROM bxp_test;
    $row_bxp_test = msql_fetch_assoc($bxp_test);
    
    while($row_bxp_test) {
     echo "name:" .$row_bxp_test["name"];
     echo "age:" .$row_bxp_test["age"];
     echo "job_title:" .$row_bxp_test["job_title"];
} else {
  echo "0 results";
}
}
//$conn->close();

?>
    </body>
</html>


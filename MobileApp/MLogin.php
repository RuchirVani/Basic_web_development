<?php
global $con;;
$con = mysql_connect("localhost:3306", 'rvani', "rv6861", TRUE) or die (mysql_error());
mysql_select_db("rvani", $con);

/// Connection

$pwd = trim($_POST['pwd']);
$email = trim($_POST['email']);
if($pwd == ""){
    echo'PasswordNull';
    return;
    }
if($email == ""){
    echo'EmailNull';
    return;
    }
$quy = "select * from MLogin where email_id='$email'";
global $con;
try {
    $res= mysql_fetch_assoc(mysql_query($quy, $con));
    }
catch (Exception $e1)
    {
    echo 'Error';
    }
if(md5($pwd) === $res['Password']){
    //echo'Successfully';
    echo'Welcome';
    return ;
}else{
    echo'PasswordNotMatch';
    return ;
}    
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>

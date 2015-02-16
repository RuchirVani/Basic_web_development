<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
global $con;;
$con = mysql_connect("localhost:3306", 'rvani', "rv6861", TRUE) ;
mysql_select_db("rvani", $con);

$store = trim($_GET['store']);// check empty string
$costfrtheb1 = trim($_GET['buy1']);
$costfrtheb2 = trim($_GET['buy2']);
$costfrthels = trim($_GET['lease']);
$email = trim($_GET['email']);
$carid=trim($_GET['carid']);
$lan=  trim($_GET['lan']);
$lon= trim($_GET['lon']);

if($email == ""){
    echo 'EmailNULL';
    return;
    }
if($store == ""){
    echo 'StoreNULL';
    return;
    }
if($carid == ""){
    echo'CarIDNULL';
    return;
    //$usr = trim($usr);
}

$sql="Insert into datatable(email_id,Store,lat,lon,buy1,buy2,lease,carid) values('$email','$store','$lan','$lon','$costfrtheb1','$costfrtheb2','$costfrthels','$carid')";
$rec=  mysql_query($sql);
if ($rec)
{
    echo 'Sucessfully';   
}
 else {
     echo'Error occured';
 }

?>

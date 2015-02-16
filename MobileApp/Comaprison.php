<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


global $con;;
$con = mysql_connect("localhost:3306", 'rvani', "rv6861", TRUE) or die (mysql_error());
mysql_select_db("rvani", $con);


$maxlat = trim($_GET['maxlat']);
$minlat = trim($_GET['minlat']);
$maxlon = trim($_GET['maxlon']);
$minlon = trim($_GET['minlot']);

$quy="Select Store,buy1,buy2,lease,carid from datatable where lat>'$minlat' and lat<'$maxlat' and lon>'$minlon' and lon<'$maxlon'";
global $con;
try {
    $res= mysql_query($quy, $con);
    }
catch (Exception $e1)
    {
    echo 'Error';
    }
?>

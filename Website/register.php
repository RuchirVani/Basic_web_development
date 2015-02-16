<?php   

global $con;
$con = mysql_connect("localhost:3306", "rvani", "rv6861",FALSE);
mysql_select_db("rvani", $con);
//$con=mysqli_connect("weblab.cs.uml.edu","rvani","rv6861","rvani");
//var_dump($con);
global $con;
//var_dump($con);
$bool = 0;
$bool2 = 0;
$regno = $_GET['regno'];
$qury = "SELECT reg FROM userinfo WHERE regno = '$regno'";
$res = mysql_fetch_assoc(mysql_query($qury, $con));
if($res){
    
    if($res['reg'] == "1"){
        $qury1 = "UPDATE userinfo SET reg=2 WHERE regno = '$regno'";
        $res1 = mysql_query($qury1, $con);  
        if($res1)
            $bool = 1;
    }
    elseif($res['reg'] == "2") {
        $bool = 3;
    }
}
?>
<!DOCTYPE html> 
<html>
    <head>
        <meta charset="UTF-8">
        <title>
        </title>       
    </head>
    <body>

                <?php 
                if ($bool == 1)
                    echo "<b>Thank you</b> for registering with us!<br>Your registratiion is complete.";
                else if($bool == 3)
                    echo "You have already registered!";
                 else if($bool == 1 && $bool2 ='NULL' )
                    echo "Please register again";
                else 
                    echo "Please register again!";
                ?>
    
       
    </body>
</html>

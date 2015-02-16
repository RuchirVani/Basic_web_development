<?php   
global $con;
$con = mysql_connect("localhost:3306", "rvani", "rv6861",FALSE);
mysql_select_db("rvani", $con);
//var_dump($con);
$bool = 0;
$bool2 = 0;
$regno = $_GET['regno'];
$sql = "SELECT reg FROM userinfo WHERE regno = '$regno'";
$row = mysql_fetch_assoc(mysql_query($sql, $con));
if($row){
    
    if($row['reg'] == "1"){
        $sql = "UPDATE userinfo SET reg=2 WHERE regno = '$regno'";
        $row = mysql_query($sql, $con);  
        if($row)
            $bool = 1;
    }
    elseif($row['reg'] == "2") {
        $bool = 3;
    }
}
$bool2 = TRUE;
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
                if ($bool == 1 && $bool2)
                    echo "Thank you for registering with me.";
                else if($bool == 3 && $bool2)
                    echo "You have already registered";
                 else if($bool == 1 && $bool2 == 0 )
                    echo "Try this link after sometime";
                else 
                    echo "The link that you are trying is incorrect.";
                ?>
    
       
    </body>
</html>

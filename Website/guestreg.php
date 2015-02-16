<?php
global $con;
$con = mysql_connect("localhost:3306", "rvani", "rv6861",FALSE);
mysql_select_db("rvani", $con);
//var_dump($con);
    
$act = $_POST['act'];
switch ($act) {
    case "getcommnts":
        getComments();
        break;
    case "reg_usr":
        includeUser();
        break;
default:
    break;
}
 function includeUser(){
    global $con;
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $reg = $_POST['reg'];
    $comnts = $_POST['comnts'];
        
    //$strtoInsert = "$fname~$lname~$email~$reg~\"$comnts\"";
    // After confirmong user hasn't registered from DB
    if($reg == 1){
    global $con;
    $qury = "SELECT uid FROM userinfo WHERE email = '$email'";
    $res = mysql_fetch_assoc(mysql_query($qury, $con));
    $datetime = date("Y-m-d H:i:s");
    $qury1 = "INSERT INTO comments (user_id,date_time,comments) VALUES ({$res['uid']},'$datetime','$commnts')";
    $res1 = mysql_query($qury1, $con);
    $no = makelink($email);
    $qury2 = "SELECT reg FROM userinfo WHERE email = '$email'";
    $res2 = mysql_fetch_assoc(mysql_query($qury2, $con));
    if($row["reg"] == 1){    
          echo 2;
          return;
       }
     if($row["reg"] == 2){    
            echo 3;
            return;
            
        }
        return;
        
        
    }
    
    $sql = "SELECT uid FROM userinfo WHERE email = '$email'";
    $row = mysql_fetch_assoc(mysql_query($sql, $con));
    if(!$row){
            $sqli = "INSERT INTO userinfo (first_name,last_name,email,reg) VALUES ('$fname','$lname','$email',0)";
            $res = mysql_query($sqli, $con);
    } 
    $regno = md5($regno.$email); 
    if(!$row)
          $sqli = "INSERT INTO userinfo (first_name,last_name,email,reg,regno) VALUES ('$fname','$lname','$email',1,'$regno')";
    else if( $row["reg"] == 0)
          $sqli = "UPDATE userinfo SET reg = 1 , regno = '$regno' WHERE email = '$email'";
    $res = mysql_query($sqli, $con);
    if($res)
        
        if(mailGuest($fname, $lname, $email ,$regno)){
                echo "1";
                return;
        }
    echo "0";
    $row = mysql_fetch_assoc(mysql_query($sql, $con));
    $datetime = date("Y-m-d H:i:s");
    $sqli = "INSERT INTO comments (user_id,date_time,comments) VALUES ({$row['uid']},'$datetime','$comnts')";
    $res = mysql_query($sqli, $con);
    if($res){
        echo "4";
        return;
    }
    echo "0";
 }
function registerUser($fname,$lname,$email,$reg,$commnts){

    global $con;
    $sql = "SELECT uid FROM userinfo WHERE email = '$email'";
    $row = mysql_fetch_assoc(mysql_query($sql, $con));
    $datetime = date("Y-m-d H:i:s");
    $sqli = "INSERT INTO comments (user_id,date_time,comments) VALUES ({$row['uid']},'$datetime','$commnts')";
    $res = mysql_query($sqli, $con);
    $time = microtime();
    $regno = preg_replace("/(\s|0\.)/",'',$time)."_$email";
    $sql = "SELECT reg FROM userinfo WHERE email = '$email'";
    $row = mysql_fetch_assoc(mysql_query($sql, $con));
    if($row && $row["reg"] != 0){
        if($row["reg"] == 1){    
            echo 2;
        }
        if($row["reg"] == 2){    
            echo 3;
        }
        return;
    }
    $regno = md5($regno.$email); 
    if(!$row)
          $sqli = "INSERT INTO userinfo (first_name,last_name,email,reg,regno) VALUES ('$fname','$lname','$email',1,'$regno')";
    else if( $row["reg"] == 0)
          $sqli = "UPDATE userinfo SET reg = 1 , regno = '$regno' WHERE email = '$email'";
    $res = mysql_query($sqli, $con);
    if($res)
    {
        {
                $file = file_get_contents('emal.html');
    echo $file;
    $eml = str_replace('<<fname>>', $fname, $file);
    $eml = str_replace('<<lname>>', $lname, $eml);
    $eml = str_replace('<<link>>', "http://weblab.cs.uml.edu/~rvani/hw4/E-mailverify.php?regno=".$regno, $eml);

    $to      = $email;
    $subject = 'Registration link';
    $message = $eml;
    $headers = 'From: Ruchir_Vani@student.uml.edu' . "\r\n" .
    'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    if( mail($to, $subject, $message, $headers) ){
        //echo "I am Here";
        return 1;   
    }
                echo "1";
                return;
        }
    }
    echo "0";
}
function getComments(){
    global $con;
    $sql = "SELECT u.first_name,u.last_name,c.date_time,c.comments FROM comments c,userinfo u WHERE u.uid = c.user_id  ";
    $res = mysql_query($sql, $con);

    $k = 0;
    while($row = mysql_fetch_assoc($res)){
                    
        $commnts[$k]['fn'] = $row['first_name'];
        $commnts[$k]['ln'] = $row['last_name'];
        $commnts[$k]['cm'] = $row['comments'];
        $k++;
    }

       
    $data = "<div ><b>Comments</b><br><br>";
    foreach ($cmmnts as $cm){
         $cm['cm'] = trim($cm['cm'], '"');
      
        if(strlen($cm['cm']) != 0 ){
            
        $data .= "<div class='cmnts'><span class='name'>{$cm['fn']} {$cm['ln']}</span><br><br>";
        $data .= "- &nbsp;{$cm['cm']}<br><br></div><br><br>";
        }
    }
    echo $data."</div>";
    return;
}



        


?>

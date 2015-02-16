<?php
global $con;;
$con = mysql_connect("localhost:3306", 'rvani', "rv6861", TRUE);
mysql_select_db("rvani", $con);

$name = trim($_GET['name']);
$email = trim($_GET['email']);
if($email == ""){
    echo 'Email NULL';
    return;
    }
if($name == ""){
    echo 'Name NULL';
    return;
    }
$result = filter_var( $email, FILTER_VALIDATE_EMAIL );
if(!$result)
{
    echo 'Email is not valid';
    return;
}
$pwd = Password();
function Password() {
    $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
     //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
        $n = rand(0, $alphaLength);
        $pwd[] = $alphabet[$n];
       }
    return implode($pwd); //turn the array into a string
}
$encrpytpass=md5($pwd);
$sql="Insert into MLogin values('$email','$name','$encrpytpass')";
$a=  mysql_query($sql);
                    $to= $email;
                    $subject = 'Password';
                    $message = "Hello, ".$name."This the password for your application : ".$pwd."\n\n"."Thank you\n"."Ruchir Vani";
                    $headers = 'From: ruchir_vani@student.uml.edu' . "\r\n" .
                    'Reply-To: ruchir_vani@student.uml.edu' . "\r\n" .
            $bool = mail($to, $subject, $message, $headers);
                    
 if($bool)
 {
    echo 'Email has been sent';
    return ;
 }
 else
{
     echo 'Error In sending the e-mail';
     return ;
}    

 
                    
?>

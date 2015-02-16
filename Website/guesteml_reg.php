<?php
if($_POST['act'] == "getcommnts"){
        $fcont = file_get_contents("Recordsfinal.csv");
        $fcont = explode("\n", $fcont);
        
        foreach($fcont as $k => $row){
            $cols = explode(",", $row);
            $commnts[$k]['fn'] = $cols[0];
            $commnts[$k]['ln'] = $cols[1];
            $commnts[$k]['cm'] = $cols[3];
            //var_dump($fcont);
        }
        constructComments($commnts);
        
}
function constructComments($cmnts){
                $data = "<div ><b>Comments</b><br><br>";
                foreach ($cmnts as $cm){
                $cm['cm'] = trim($cm['cm'], '"');
      
                if(strlen($cm['cm']) != 0 ){
//            var_dump($cm);exit;
                $data .= "<div class='cmnts'><span class='name'>{$cm['fn']} {$cm['ln']}</span><br><br>";
                $data .= "- &nbsp;{$cm['cm']}<br><br></div><br><br>";
                }
        }
        echo $data."</div>";
    }
//        return;
        ///
$fname = $_POST['reg_fname'];
$lname = $_POST['reg_lname'];
$email = $_POST['reg_email'];
$comment= $_POST['reg_comments'];
$file = 'Recordsfinal.csv';
//file_put_contents($file,$fname.",".$lname.",".$email."\n" ,FILE_APPEND);
        $fcont = file_get_contents("Recordsfinal.csv");
        $rows = explode("\n", $fcont);
        //count($fcont);
        //var_dump($rows);
        //var_dump($email);
        //echo('bye');
        foreach($rows as $row)
            {
                $cols = explode(",", $row);
        //        var_dump($row); 
//                var_dump($cols[2]);
//                var_dump($email);C
//                exit;
                
                
                if($cols[2] == $email)
                {
                        $regal=1;
                    //var_dump($cols[2]);
                    var_dump($email);
                        
                        break;
                }
                else{
                    $regal=0;
//                                       break;
                }
               
            }
            var_dump($regal);
            echo "</ br></ br>";
                
if ($regal==0)
{
    echo 'E-mail has been sent. To conform the registration click on link in e-mail.';
                    $link = "http://www.cs.uml.edu/~rvani/hw3/confirm_reg.html";
                    $to      = $email;
                    $subject = 'Registration link';
                    $message = "Hello, ".$fname." ".$lname."\n"." Click on link to conform your registering.:".$link." "."\n\n"."Thank you\n"."Ruchir Vani";
                    $headers = 'From: ruchir_vani@student.uml.edu' . "\r\n" .
                    'Reply-To: ruchir_vani@student.uml.edu' . "\r\n" .
                    mail($to, $subject, $message, $headers);
                    //
                    //
                   // $str = $fname.",".$lname.",".$email.",".$comment."\n";
                    //file_put_contents($file,$str,FILE_APPEND);
                    global $con;
                    $insert="insert into userdetails('".$fname."','".$lname."','".$email."','"."'1')";
                    $rec=  mysql_query($insert, $con);
                    
                      
}
elseif ($regal==1) {
echo' already registered';
//echo 'Comment has been posted';
}
////
///
    
    


    

        
?>

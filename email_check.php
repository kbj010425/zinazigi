<?php

include 'db.php';

$email =  htmlentities(trim($_POST['email']));

$stmt = $dbcon->prepare("SELECT * FROM create_user WHERE email = ? ");
$stmt->bind_param('s', $email);

$stmt ->execute();
$result = $stmt->fetch();

if(isset($result) && !empty($result)){
    echo 1;
}else{
   echo 0;
}
mysqli_close($dbcon);
?>
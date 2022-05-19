<?php

$dbcon = mysqli_connect("localhost", "root", "","zinazigi");

$id = htmlentities(trim($_POST['pw_find_id']));
$email = htmlentities(trim($_POST['pw_find_email']));

if($id == '' || $email == ''){
    echo 0;
    exit;
}else{
    $stmt = $dbcon -> prepare("SELECT * FROM create_user WHERE id = ? and email = ?");
    $stmt -> bind_param('ss',$id,$email);
    $stmt -> execute();
    $db_id = $stmt->get_result()->fetch_assoc();
}
if(!isset($db_id)){
    echo 0;
}else{
    echo 1;
}

?>
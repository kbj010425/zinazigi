<?php

include 'db.php';

$id = htmlentities(trim($_POST['id']));

$stmt = $dbcon->prepare("SELECT * FROM create_user WHERE id = ? ");

$stmt->bind_param('s',$id);

$stmt->execute();
$result = $stmt->fetch();

if(isset($result) && !empty($result)){
    echo 1;
}else{
    echo 0;
}

mysqli_close($dbcon);
?>
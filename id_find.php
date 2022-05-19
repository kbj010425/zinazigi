<?php

include 'db.php';

$email = htmlentities(trim($_POST['find_id']));

$stmt = $dbcon ->prepare("SELECT * FROM create_user WHERE email = ?");
$stmt->bind_param('s',$email);
$stmt ->execute();
$db_id = $stmt->get_result()->fetch_assoc();
$db_id1 = $db_id['id'];

if(isset($db_id1)){
        echo $db_id1;
}else{
        
}
?>
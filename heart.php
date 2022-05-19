<?php
include "db.php";


$heart_check = $_POST['heart_check'];

if($_POST['user_id'] == '0'){
    echo 0;
    exit;
}else if($heart_check == '1'){
    echo "2";
    $user_id = $_POST['user_id'];
    $id = $_POST['id'];
    $sql1 = "delete from heart where id='$id' and user_id ='$user_id'";
    $result1 = mysqli_query($dbcon,$sql1);
    exit;
}else if($heart_check =='0'){
    $user_id = $_POST['user_id'];
    $id = $_POST['id'];
    $sql = "insert into heart (id , user_id) values('$id','$user_id')";
    $result = mysqli_query($dbcon,$sql);
if($result){
    echo "1";
}else{
    }
}


?>
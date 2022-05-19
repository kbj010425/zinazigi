<?php
include 'db.php';

$board_num = $_GET['id'];
$user_id = $_GET['user_id'];

$sql = "delete from review where id = '$board_num' and user_id = '$user_id'";

$result = mysqli_query($dbcon,$sql);

if($result){
    echo "<script>alert('리뷰 삭제완료'); location.href = document.referrer; </script>";
}else{
    echo "<script>alert('리뷰 삭제실패'); location.href = document.referrer; </script>";
}

?>

<?php 
    session_start();
    if(!isset($_SESSION['id'])){
        echo "<script>alert('로그인을 해주세요.'); window.history.back(-1);</script>";
    }else{
        $user_id = $_SESSION['id'];
        $id = $_GET['id'];
    }
    include "db.php";
    $sql = "delete from heart where id='$id' and user_id ='$user_id'";
    $result = mysqli_query($dbcon,$sql);
    if($result){
        echo "<script>alert('삭제되었습니다.'); location.href = document.referrer;</script>";
    }else{
        echo "<script>alert('삭제 실패'); location.href = document.referrer;</script>";
    }
?>
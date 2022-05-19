<?php
session_start();

$dbcon = mysqli_connect("localhost", "root", "", "zinazigi");

$id = htmlentities(trim($_POST['login_id']));
$user_pw = htmlentities(trim($_POST['login_pw']));


$stmt = $dbcon->prepare("select * from create_user where id = ? ");
$stmt->bind_param('s',$id);
$stmt->execute();
$db_pw = $stmt->get_result()->fetch_assoc();

$db_pw1 = $db_pw['pw'];


if(!isset($db_pw)){
    echo "<script>alert('아이디가 일치하지 않습니다.'); window.history.back();</script>";
    exit;
}
if(password_verify($user_pw,$db_pw1)){
    echo "<script>alert('로그인 되었습니다.'); location.href = document.referrer;</script>";
    $_SESSION['id'] = $id;
    $_SESSION['grade'] = $db_pw['grade'];
    echo $_SESSION['id'];
}else{
    echo "<script>alert('비밀번호가 일치하지 않습니다..'); window.history.back();</script>";
}

?>
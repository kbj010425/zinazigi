<?php
include "db.php";

$sql = "CREATE TABLE create_user(id varchar(12) primary key, pw varchar(100), email varchar(30), grade char(1))DEFAULT charset=utf8";

$result = mysqli_query($dbcon,$sql);

if($result){
    echo "회원가입 테이블 생성성공<br>";
}else{
    echo "회원가입 테이블 생성실패<br>";
}

$sql = "CREATE TABLE board(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(20), one_line varchar(50), kind varchar(30), user_id varchar(12))DEFAULT charset=utf8";

$result = mysqli_query($dbcon,$sql);

if($result){
    echo "게시판 미리보기 테이블 생성성공<br>";
}else{
    echo "게시판 미리보기 테이블 생성실패<br>";
}

$sql = "CREATE TABLE board_detail(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY, address varchar(50), phone char(13), business_hours varchar(50), menu varchar(250), text text(500))DEFAULT charset=utf8";

$result = mysqli_query($dbcon,$sql);

if($result){
    echo "게시판 상세 테이블 생성성공<br>";
}else{
    echo "게시판 상세 테이블 생성실패<br>";
}

$sql = "CREATE TABLE board_img_src(id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY, img1 varchar(250), img2 varchar(250), img3 varchar(250), img4 varchar(250), img5 varchar(250))DEFAULT charset=utf8";

$result = mysqli_query($dbcon,$sql);
if($result){
    echo "게시판 이미지링크 테이블 생성성공<br>";
}else{
    echo "게시판 이미지링크 테이블 생성실패<br>";
}

$sql = "CREATE TABLE review(id int(5), user_id varchar(12), star char(6), date date, img1 varchar(250), img2 varchar(250), img3 varchar(250), img4 varchar(250), text text(500))DEFAULT charset=utf8";
$result = mysqli_query($dbcon,$sql);
if($result){
    echo "댓글테이블 생성 완료<br>";
}else{
    echo "댓글테이블 생성 실패<br>";
}

$sql = "CREATE TABLE heart(id int(5), user_id varchar(12))DEFAULT charset=utf8";
$result = mysqli_query($dbcon,$sql);
if($result){
    echo "하트테이블 생성 완료<br";
}else{
    echo "하트테이블 생성 실패<br>";
}

mysqli_close($dbcon);

?>
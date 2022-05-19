<?php
include 'db.php';

$id = $_GET['id'];

$sql = "delete from board where id = '$id'";
$result = mysqli_query($dbcon,$sql);
if($result){
    echo "<script>alert('게시판 미리보기 삭제완료');</script>";
}else{
    echo "<script>alert('게시판 미리보기 삭제실패');</script>";
    echo '0';
}

$sql2 = "delete from board_deatil where id = '$id'";
$result2 = mysqli_query($dbcon,$sql);
if($result2){
    echo "<script>alert('게시판 상세내용 삭제완료');</script>";
    echo '1';
}else{
    echo "<script>alert('게시판 상세내용 삭제실패');</script>";
    echo '0';
}

$sql3 = "delete from board_img_src where id = '$id'";
$result3 = mysqli_query($dbcon,$sql);
if($result3){
    echo "<script>alert('게시판 이미지링크 삭제완료');</script>";
    echo '1';
}else{
    echo "<script>alert('게시판 이미지링크 삭제실패');</script>";
    echo '0';
}

$sql4 = "delete from review where id = '$id'";
$result4 = mysqli_query($dbcon,$sql);
if($result4){
    echo "<script>alert('게시판 댓글 삭제완료'); location.href='list_page.php?kind=attraction&page=1';</script>";
    echo '1';
}else{
    echo "<script>alert('게시판 댓글 삭제실패'); location.href='list_page.php?kind=attraction&page=1';</script>";
    echo '0';
}

?>

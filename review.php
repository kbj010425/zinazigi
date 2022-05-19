<?php
session_start();

include 'db.php';

$id =  $_SESSION['id'];
$board_num = $_POST['board_num'];
$star = $_POST['star'];

$today = date("Y-m-d");

$review = $_POST['review'];

$sql = "select * from review where id = '$board_num' and user_id = '$id'";
$result = mysqli_query($dbcon,$sql);
if(mysqli_num_rows($result)){
    echo "<script>alert('이미 리뷰를 등록한 게시글입니다.'); location.href='list_in.php?id=$board_num';</script>";
    exit;
}else{
}


@mkdir("review/".$board_num."/".$id,0700,ture);

$file_name1 = $_FILES['img1']['name'];
$target1 = "review/".$board_num."/".$id."/".$file_name1;

$file_name2 = $_FILES['img2']['name'];
$target2 = "review/".$board_num."/".$id."/".$file_name2;

$file_name3 = $_FILES['img3']['name'];
$target3 = "review/".$board_num."/".$id."/".$file_name3;

$file_name4 = $_FILES['img4']['name'];
$target4 = "review/".$board_num."/".$id."/".$file_name4;

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST)){
    if($_FILES['img1']['size'] > 0){        
    }else {
        $target1 = 0;
    }
    if($_FILES['img2']['size'] > 0){        
    }else {
        $target2 = 0;
    }
    if($_FILES['img3']['size'] > 0){        
    }else {
        $target3 = 0;
    }
    if($_FILES['img4']['size'] > 0){      
    }else {
        $target4 = 0;
    }
}


$stmt = $dbcon->prepare("insert into review(id, user_id, star, date, img1, img2, img3, img4, text) values(?,?,?,?,?,?,?,?,?)");
$stmt->bind_param('sssssssss',$board_num, $id, $star, $today, $target1, $target2, $target3, $target4, $review);
$result = $stmt ->execute();

if($result){
move_uploaded_file($_FILES['img1']['tmp_name'],$target1);
//echo $file_name1."<br>".$target1."<br>";

move_uploaded_file($_FILES['img2']['tmp_name'],$target2);
//echo $file_name2."<br>".$target2."<br>";

move_uploaded_file($_FILES['img3']['tmp_name'],$target3);
//echo $file_name3."<br>".$target3."<br>";

move_uploaded_file($_FILES['img4']['tmp_name'],$target4);
    echo "<script>alert('댓글 등록완료.'); location.href='list_in.php?id=$board_num';</script>";
//    exit;
}else{
    echo "실패";
}

mysqli_close($dbcon);

?>
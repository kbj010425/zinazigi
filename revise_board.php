<?php
session_start();

$user_id = $_SESSION['id'];
$id = $_POST['id'];
$title = htmlentities(trim($_POST['title']));
$title_eng = htmlentities(trim($_POST['title_eng']));
$one_line = htmlentities(trim($_POST['one_line']));
$kind = htmlentities(trim($_POST['kind']));

$address = htmlentities(trim($_POST['address']));
$phone1 = htmlentities(trim($_POST['frest_phone']));
$phone2 = htmlentities(trim($_POST['center_phone']));
$phone3 = htmlentities(trim($_POST['last_phone']));
$phone = $phone1."-".$phone2."-".$phone3;
//echo $phone;
$business = htmlentities(trim($_POST['business']));
$menu = htmlentities(trim($_POST['menu']));
$content = htmlentities(trim($_POST['content']));
//$img1 = htmlentities(trim($_GET['img1']));
//$img2 = htmlentities(trim($_GET['img2']));
//$img3 = htmlentities(trim($_GET['img3']));
//$img4 = htmlentities(trim($_GET['img4']));
//$img5 = htmlentities(trim($_GET['img5']));

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST)){
    
    if($phone == '--'){
        $phone == 0;
    }else{
    }
    if($business == ''){ 
        $business = 0;
    }else {
    }
    if($menu == ''){ 
        $menu = 0;
    }else {
    }
    if($_FILES['img1']['size'] > '0'){ 
        $img1 = '1';
    }else {
        $img1 = '0';
    }
    if($_FILES['img2']['size'] > '0'){ 
        $img2 = '1';
    }else {
        $img2 = '0';
    }
    if($_FILES['img3']['size'] > '0'){ 
        $img3 = '1';
    }else {
        $img3 = '0';
    }
    if($_FILES['img4']['size'] > '0'){ 
        $img4 = '1';
    }else {
        $img4 = '0';
    }
    if($_FILES['img5']['size'] > '0'){ 
        $img5 = '1';
    }else {
        $img5 = '0';
    }
}

//echo $title."<br>".$one_line."<br>".$kind."<br><br>".$phone."<br>".$business."<br>".$menu."<br><br>";


include 'db.php';

$stmt = $dbcon->prepare("UPDATE board set title = ?, one_line = ?, kind = ?, user_id = ? where id = ?");
//echo $title. $one_line. $kind. $user_id. $id;
$stmt->bind_param('sssss',$title, $one_line, $kind, $user_id, $id);
$result = $stmt ->execute();
    
if($result){
    echo "<script>alert('게시판 미리보기 입력성공'); </script>";
}else{
    echo "<script>alert('게시판 미리보기 입력실패'); location.back(-1);</script>";
}

$stmt = $dbcon->prepare("update board_detail set address = ?, phone = ?, business_hours = ?, menu = ?, text =? where id = ?");
$stmt->bind_param('ssssss',$address, $phone, $business, $menu, $content, $id);
$result = $stmt ->execute();
    
if($result){
    echo "<script>alert('게시판 상세보기 입력성공');</script>";
}else{
    echo "<script>alert('게시판 상세보기 입력실패'); location.back(-1);</script>";
}

@mkdir("list_img/".$kind."/".$title_eng,0700,ture);

$file_name1 = $_FILES['img1']['name'];
$target1 = "list_img/".$kind."/".$title_eng."/".$file_name1;

$file_name2 = $_FILES['img2']['name'];
$target2 = "list_img/".$kind."/".$title_eng."/".$file_name2;

$file_name3 = $_FILES['img3']['name'];
$target3 = "list_img/".$kind."/".$title_eng."/".$file_name3;

$file_name4 = $_FILES['img4']['name'];
$target4 = "list_img/".$kind."/".$title_eng."/".$file_name4;

$file_name5 = $_FILES['img5']['name'];
$target5 = "list_img/".$kind."/".$title_eng."/".$file_name5;

if($img1 == '0'){
    $target1 = 0;
}
if($img2 == '0'){
    $target2 = 0;
}
if($img3 == '0'){
    $target3 = 0;
}
if($img4 == '0'){
    $target4 = 0;
}
if($img5 == '0'){
    $target5 = 0;
}

$stmt = $dbcon->prepare("update board_img_src set img1 = ?, img2 =?, img3 =?, img4 =?, img5 =? where id = ?");
$stmt->bind_param('ssssss',$target1, $target2, $target3, $target4, $target5, $id);
$result = $stmt ->execute();
    
if($result){
move_uploaded_file($_FILES['img1']['tmp_name'],$target1);
//echo $file_name1."<br>".$target1."<br>";

move_uploaded_file($_FILES['img2']['tmp_name'],$target2);
//echo $file_name2."<br>".$target2."<br>";

move_uploaded_file($_FILES['img3']['tmp_name'],$target3);
//echo $file_name3."<br>".$target3."<br>";

move_uploaded_file($_FILES['img4']['tmp_name'],$target4);
//echo $file_name4."<br>".$target4."<br>";

move_uploaded_file($_FILES['img5']['tmp_name'],$target5);
//echo $file_name5."<br>".$target5."<br>";
    echo "<script>alert('이미지 링크 저장 완료'); location.href='list_in.php?id=$id'; </script>";
}else{
    echo "<script>alert('게시판 상세보기 입력실패'); location.back(-1);</script>";
}



mysqli_close($dbcon);
?>
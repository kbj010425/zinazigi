<?php
session_start();

$user_id = $_SESSION['id'];
$title = htmlentities(trim($_POST['title']));
$title_eng = htmlentities(trim($_POST['title_eng']));
$one_line = htmlentities(trim($_POST['one_line']));
$kind = htmlentities(trim($_POST['kind']));

$address = htmlentities(trim($_POST['address']));
$phone1 = htmlentities(trim($_POST['frest_phone']));
$phone2 = htmlentities(trim($_POST['center_phone']));
$phone3 = htmlentities(trim($_POST['last_phone']));
$phone = $phone1."-".$phone2."-".$phone3;
$business = htmlentities(trim($_POST['business']));
$menu = htmlentities(trim($_POST['menu']));
$content = htmlentities(trim($_POST['content']));
//$img1 = htmlentities(trim($_GET['img1']));
//$img2 = htmlentities(trim($_GET['img2']));
//$img3 = htmlentities(trim($_GET['img3']));
//$img4 = htmlentities(trim($_GET['img4']));
//$img5 = htmlentities(trim($_GET['img5']));

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST)){
    
    if(@$_POST['phone'] == '--'){
        $phone == 0;
    }else{
    }
    if($_POST['business'] == ''){ 
        $business = 0;
    }else {
    }
    if($_POST['menu'] == ''){ 
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

$stmt = $dbcon->prepare("insert into board(title,one_line,kind,user_id) values(?,?,?,?)");
$stmt->bind_param('ssss',$title, $one_line, $kind,$user_id);
$result = $stmt ->execute();
    
if($result){
    echo "<script>alert('????????? ???????????? ????????????'); </script>";
}else{
    echo "<script>alert('????????? ???????????? ????????????'); location.back(-1);</script>";
}

$stmt = $dbcon->prepare("insert into board_detail(address,phone,business_hours,menu,text) values(?,?,?,?,?)");
$stmt->bind_param('sssss',$address, $phone, $business, $menu,$content);
$result = $stmt ->execute();
    
if($result){
    echo "<script>alert('????????? ???????????? ????????????');</script>";
}else{
    echo "<script>alert('????????? ???????????? ????????????'); location.back(-1);</script>";
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

$stmt = $dbcon->prepare("insert into board_img_src(img1, img2, img3, img4, img5) values(?,?,?,?,?)");
$stmt->bind_param('sssss',$target1, $target2, $target3, $target4, $target5);
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
    echo "<script>alert('????????? ?????? ?????? ??????'); location.href='list_in.php?id=$id'; </script>";
}else{
    echo "<script>alert('????????? ???????????? ????????????'); location.back(-1);</script>";
}



mysqli_close($dbcon);
?>
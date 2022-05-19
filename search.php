<?php 
include "db.php";

$keyword = $_POST['keyword'];

$sql = "select board. id,title,one_line,kind, board_detail. address, board_img_src. img1 FROM board INNER JOIN board_detail ON board.id = board_detail.id INNER JOIN board_img_src ON board_detail.id = board_img_src.id where address LIKE '%$keyword%' OR title LIKE '%$keyword%' ORDER BY id ASC";
$result = mysqli_query($dbcon,$sql);
$num = mysqli_num_rows($result);
$arr = array();

$data = [];

$i = 0;

while($row = mysqli_fetch_assoc($result)){

        
    $data[$i] = [
        'title' => $row['title'],
        'one_line' => $row['one_line'],
        'img_src' => $row['img1'],
        'id' => $row['id'],
    ];
   
$i++;
}


$dataList = json_encode($data, JSON_UNESCAPED_UNICODE);

echo json_encode($dataList, JSON_UNESCAPED_UNICODE);

?>